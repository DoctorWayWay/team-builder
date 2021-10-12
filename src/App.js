import React, { useState, useEffect } from "react";
import "./App.css";

// Initial Form Data Key/Value pairs
const initialFormData = {
  // Text Inputs
  name: "",
  email: "",
  // Dropdown Input
  role: "",
};

function App() {
  // State Management
  const [formData, setFormData] = useState(initialFormData);
  const [teamMembers, setTeamMembers] = useState([]);

  // Returing App
  return (
    <div className="App">
      <h1>Hello World!</h1>
    </div>
  );
}

export default App;
