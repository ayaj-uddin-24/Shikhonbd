// src/components/Loading.jsx
import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="loader border-t-4 border-blue-600 w-16 h-16 rounded-full animate-spin"></div>
    </div>
  );
};

export default Loading;
