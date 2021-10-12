import React from "react";

const MemberForm = (props) => {
  // MemberForm Properties
  const {} = props;
  // Form Submit Function
  const formSubmit = (event) => {
    event.preventDefault();
    // submit();
  };
  // Returning Form
  return (
    <form onSubmit={formSubmit}>
      {/* ----- NAME INPUT ----- */}
      <label>
        Name:
        <input
          type="text"
          name="name"
          maxLength="30"
          placeholder="Name goes here"
        />
      </label>
      <br />
      {/* ----- EMAIL INPUT ----- */}
      <label>
        Email:
        <input type="text" name="email" placeholder="Email goes here" />
      </label>
      <br />
      {/* ----- ROLE DROPDOWN INPUT ----- */}
      <label>
        <select name="role">
          <option value="">-- Select a role --</option>
          <option value="Backend Engineer">Backend Engineer</option>
          <option value="Frontend Engineer">Frontend Engineer</option>
          <option value="Designer">Designer</option>
          <option value="Wizard">Wizard</option>
        </select>
      </label>
      <br />
      {/* ----- SUBMIT BUTTON ----- */}
      <button>Submit</button>
    </form>
  );
};

export default MemberForm;
