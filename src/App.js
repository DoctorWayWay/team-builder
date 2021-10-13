// Importing Libraries and StyleSheet
import React, { useState } from "react";
import "./App.css";
import MemberCard from "./components/MemberCard";

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
  const [members, setMembers] = useState([]);
  // const [teamMembers, setTeamMembers] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  // Update Form Function
  const updateForm = (inputName, inputValue) => {
    setFormData({ ...formData, [inputName]: inputValue });
  };
  // Submit Form Function
  const submitForm = () => {
    const newMember = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      role: formData.role,
    };
    console.log(newMember);
    // Conditional Warning Message
    if (!newMember.name || !newMember.email || !newMember.role) {
      setErrorMessage("Please fill out the entire form.");
      return;
    }
    // Add member to list
    setMembers([...members, newMember]);
  };

  // Returing App
  return (
    <div className="App">
      <h1>Member Form</h1>
      <MemberForm
        formValues={formData}
        error={errorMessage}
        update={updateForm}
        submit={submitForm}
      />
      {members.map((member) => {
        return <MemberCard memberInfo={member} />;
      })}
    </div>
  );
}

export default App;
