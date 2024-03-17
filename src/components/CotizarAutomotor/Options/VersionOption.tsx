import React from "react";

export default function VersionOption({ version, setVersion, versionOptions }) {
  return (
    <div className="col-12 mb-4">
      <label htmlFor="basic-url" className="form-label text-dark bold">
        Version
      </label>
      <select
        className="form-select border-dark py-2"
        aria-label="Default select example"
        value={version}
        onChange={(e) => setVersion(e.target.value)}
      >
        <option defaultValue={"Default"}>Selecciona la version</option>
        {versionOptions
          ? versionOptions.map((option, index) => (
              <option key={index} value={option.Clave}>
                {option.Nombre}
              </option>
            ))
          : null}
      </select>
    </div>
  );
}
