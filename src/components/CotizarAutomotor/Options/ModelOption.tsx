import React from "react";

export default function ModelOption({
  models,
  setModels,
  setModelsText,
  modelsOptions,
}) {
  return (
    <div className="col-12 mb-4">
      <label htmlFor="basic-url" className="form-label text-dark bold">
        Modelo
      </label>
      <select
        className="form-select border-dark py-2"
        aria-label="Default select example"
        value={models}
        onChange={(e) => {
          setModelsText(e.target.options[e.target.selectedIndex].text);
          setModels(e.target.value);
        }}
      >
        <option defaultValue={"Default"}>Selecciona un modelo</option>
        {modelsOptions
          ? modelsOptions.map((option, index) => (
              <option key={index} value={option.Clave}>
                {option.Nombre}
              </option>
            ))
          : null}
      </select>
    </div>
  );
}
