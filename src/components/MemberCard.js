// Importing Libraries
import React from "react";

const MemberCard = (props) => {
  const { memberInfo } = props;
  return (
    <div>
      <h3>{memberInfo.name}</h3>
      <p>{memberInfo.email}</p>
      <p>{memberInfo.role}</p>
    </div>
  );
};

export default MemberCard;
