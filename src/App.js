// Importing Libraries and StyleSheet
import React, { useState, useEffect } from "react";
import "./App.css";

// Importing Components
import MemberForm from "./components/MemberForm";

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
      <MemberForm />
    </div>
  );
}

export default App;
