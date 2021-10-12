import React from "react";

const MemberForm = (props) => {
  // Form Submit Function
  const formSubmit = (event) => {
    event.preventDefault();
    // submit();
  };
  // Returning Form
  return (
    <form onSubmit={formSubmit}>
      {/* ----- USERNAME INPUT ----- */}
      <label>
        Username:
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
      <button>Submit</button>
    </form>
  );
};

export default MemberForm;
