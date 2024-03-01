import React from "react";

const Button = ({ onClick, children }) => {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      {children}
    </button>
  );
};
export default Button;
