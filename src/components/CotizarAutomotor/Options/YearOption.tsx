import React from "react";

export default function YearOption({ year, setYear, yearOptions }) {
  return (
    <div className="col-12 mb-4">
      <label htmlFor="basic-url" className="form-label text-dark bold">
        Año
      </label>
      <select
        className="form-select border-dark py-2"
        aria-label="Default select example"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      >
        <option defaultValue={"Default"}>Selecciona el año</option>
        {yearOptions
          ? yearOptions?.map((option, index) => (
              <option key={index} value={option.Clave}>
                {option.Nombre}
              </option>
            ))
          : null}
      </select>
    </div>
  );
}
