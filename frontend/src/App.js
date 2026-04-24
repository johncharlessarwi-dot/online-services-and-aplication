import React, { useState } from "react";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

function App() {
  const [formData, setFormData] = useState({ grades: "", course: "" });
  const [result, setResult] = useState("");

  const checkAdmission = async () => {
    const res = await fetch(`${API_URL}/ai/check`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });
    const data = await res.json();
    setResult(data.message);
  };

  return (
    <div style={{ padding: "50px", textAlign: "center", fontFamily: "Arial" }}>
      <h1>John Online Services - AI Advisor</h1>
      <h2>AI ELIGIBILITY CHECKER</h2>

      <input
        placeholder="Enter Grades (e.g. A,B,C)"
        value={formData.grades}
        onChange={(e) => setFormData({ ...formData, grades: e.target.value })}
        style={{ padding: "10px", margin: "10px", width: "200px" }}
      /><br/><br/>

      <input
        placeholder="Desired Course"
        value={formData.course}
        onChange={(e) => setFormData({ ...formData, course: e.target.value })}
        style={{ padding: "10px", margin: "10px", width: "200px" }}
      /><br/><br/>

      <button
        onClick={checkAdmission}
        style={{
          padding: "12px 24px",
          background: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px"
        }}
      >
        Check Eligibility
      </button>

      {result && (
        <div style={{
          marginTop: "20px",
          padding: "15px",
          background: "#f8f9fa",
          borderRadius: "5px",
          fontWeight: "bold",
          fontSize: "18px"
        }}>
          {result}
        </div>
      )}
    </div>
  );
}

export default App;