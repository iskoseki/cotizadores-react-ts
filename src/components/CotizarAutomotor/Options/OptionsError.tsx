import React from "react";
const OptionsError = ({ error }: { error: string | number | null }) => {
  return (
    <div className="my-20">
      <p className="font-bold text-medium text-red-400">
        Lo lamentamos, ocurrió un error con la carga. 🔌
      </p>{" "}
      <p>Por favor, vuelve a intentar nuevamente o espera unos minutos.</p>
      <span className="font-thin italic">({error})</span>
    </div>
  );
};

export default OptionsError;
