import React from "react";

const MemberForm = (props) => {
  // MemberForm Properties
  const { formValues, error, update, submit } = props;
  // Form Submit Handler
  const formSubmit = (event) => {
    event.preventDefault();
    submit();
  };
  const onChange = (event) => {
    // Running inputs through update function in App.js
    const name = event.target.name;
    const value = event.target.value;
    update(name, value);
  };
  // Returning Form
  return (
    <form onSubmit={formSubmit}>
      {/* ----- ERROR MESSAGE ----- */}
      <h2>{error}</h2>
      {/* ----- NAME INPUT ----- */}
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formValues.name}
          maxLength="30"
          placeholder="Name goes here"
          onChange={onChange}
        />
      </label>
      <br />
      {/* ----- EMAIL INPUT ----- */}
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formValues.email}
          placeholder="Email goes here"
          onChange={onChange}
        />
      </label>
      <br />
      {/* ----- ROLE DROPDOWN INPUT ----- */}
      <label>
        <select name="role" value={formValues.role} onChange={onChange}>
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
