import React from "react";

const ErrorForm = () => {
  return (
    <>
      <div
        className="p-1 mt-2 w-3/6 text-center ring-2 bg-red-600/80 ring-red-700 mb-4 text-md text-cyan-50 rounded-lg"
        role="alert"
      >
        <span className="text-cyan-50 font-bold">Error! </span>
        Cargue todos los campos solicitados!
      </div>
    </>
  );
};

export default ErrorForm;