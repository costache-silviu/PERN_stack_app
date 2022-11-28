import React from "react";
import "./input.css";

const Input = ({ type, placeholder }) => {
  return (
    <input
      className="custom-input-field"
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;
