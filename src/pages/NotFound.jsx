import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-white shadow-md m-auto text-center p-10 mx-10 mt-10">
      Sorry the page you're looking for does not exists!
      <button
        className="bg-blue-500 hover:bg-blue-600
        block w-1/2 text-white p-2 text-sm mt-3 mx-auto"
        onClick={() => navigate("/")}
      >
        Back to home
      </button>
    </div>
  );
};

export default NotFound;
