import React from "react";

export default function BrandOption({ brand, setBrand, brandOptions }) {
  return (
    <div className="col-12 mb-4">
      <label htmlFor="basic-url" className="form-label text-dark bold">
        Marcar
      </label>
      <select
        className="form-select border-dark py-2"
        aria-label="Default select example"
        value={brand}
        onChange={(e) => setBrand(e.target.value)}
      >
        <option defaultValue={"Default"}>Seleccione una marca</option>
        {brandOptions
          ? brandOptions.map((option, index) => (
              <option key={index} value={option.Clave}>
                {option.Nombre}
              </option>
            ))
          : null}
      </select>
    </div>
  );
}
