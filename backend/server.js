const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

// Unganisha na MongoDB (Database)
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/john_online')
    .then(() => console.log("✅ MongoDB Connected"))
    .catch(err => console.log("❌ DB Error: ", err));

// Route ya AI Admission Prediction
app.post("/api/ai/admission", (req, res) => {
    const { grades, course } = req.body;
    
    // Tunapata idadi ya masomo yenye herufi 'A'
    const gradeScore = grades.toUpperCase().split(",").filter(g => g.trim() === "A");
    let probability = gradeScore.length * 25; 
 if (course.toLowerCase().includes("medicine")) probability -= 10;
    if (probability > 95) probability = 95;
    if (probability < 10) probability = 10;
    let message = `Your admission chance for ${course} is ${probability}%`;
    res.json({ probability, message });
});

// New AI Eligibility Checker
app.post("/api/ai/check", (req, res) => {
    const { grades, course } = req.body;

    const gradeList = grades.split(",").map(g => g.trim().toUpperCase());

    const hasGoodGrades = gradeList.includes("A") || gradeList.includes("B");

    let message = "";

    if (hasGoodGrades) {
        message = `✅ Eligible for ${course}. You meet minimum requirements.`;
    } else {
        message = `⚠ Not fully eligible for ${course}. Consider improving grades or choosing related course.`;
    }

    res.json({ message });
});

// ClickPay Webhook for Payment Reconciliation
app.post("/api/webhook/clickpay", async (req, res) => {
    const { transaction_id, status } = req.body;

    // Note: This assumes you have an Order model
    // const order = await Order.findOne({ transaction_id });

    // if (!order) return res.json({ error: "Order not found" });

    // if (order.status === "PAID") {
    //     return res.json({ message: "Already processed" });
    // }

    // order.status = status;
    // await order.save();

    console.log(`Payment webhook received: ${transaction_id} - ${status}`);

    res.json({ message: "Webhook processed" });
});

// Subscription endpoint
app.post("/api/subscribe", (req, res) => {
    const { userId, plan } = req.body;

    const pricing = {
        basic: 0,
        premium: 15000,
        vip: 30000
    };

    const userPlan = {
        userId,
        plan,
        price: pricing[plan] || 0
    };

    res.json({ message: "Subscription activated", userPlan });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {console.log(`🚀 Server running on port ${PORT}`);
});