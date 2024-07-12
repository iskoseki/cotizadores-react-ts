import React from "react";

export default function VersionOption({
  version,
  setVersion,
  setVersionText,
  versionOptions,
}) {
  return (
    <div className="col-12 mb-4">
      <label htmlFor="basic-url" className="form-label text-dark bold">
        Version
      </label>
      <select
        className="form-select border-dark py-2"
        aria-label="Default select example"
        value={version}
        onChange={(e) => {
          setVersionText(e.target.options[e.target.selectedIndex].text);
          setVersion(e.target.value);
        }}
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
