import React from "react";

const BtnAction = ({ classes, onClick, title }) => {
  return (
    <button
      className={`border ${classes}
      transition-all duration-100 delay-75
      block w-full py-2 px-5 text-sm mt-3 rounded-md`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default BtnAction;
