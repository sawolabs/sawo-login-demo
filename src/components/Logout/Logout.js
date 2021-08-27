import React from "react";
import "./Logout.css";

const Logout = (props) => {
  const logoutHandler = () => {
    alert("You will be logged out...");
    props.removeCookie("payload");
  };

  return (
    <>
      <div>
        <button type="button" onClick={logoutHandler} className="logout-button">
          LogOut
        </button>
      </div>
    </>
  );
};

export default Logout;
