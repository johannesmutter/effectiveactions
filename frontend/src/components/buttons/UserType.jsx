import React from "react";
import "../../styles/register.css"

const UserType = ({ icon, label }) => {
  return (
    <div className="reg-user">
      <button className="user-btn">
        <img src={icon} alt={label} />
      </button>
      <h4>{label}</h4>
    </div>
  );
};

export default UserType;
