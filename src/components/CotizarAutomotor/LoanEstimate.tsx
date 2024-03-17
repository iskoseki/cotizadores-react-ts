import React from "react";

export const ResultValues = ({ cotizacionAutomotor, Init, Monto }) => {
  return (
    <>
      <div className="pasos-cotizador ">
        {cotizacionAutomotor ? (
          <div className="flex flex-col md:flex-row gap-1">
            <div className="col-6 w-full md:w-1/2 mb-2">
              <label htmlFor="basic-url" className="form-label text-dark bold">
                Podrías recibir hasta
              </label>
              <div className="input-group">
                <p
                  id="basic-url"
                  className="form-control text-dark border-dark "
                >
                  {cotizacionAutomotor.Prestamo}
                </p>
              </div>
              <small id="montoHelp" className="form-thin text-muted">
                {Init?.texto_estimacion_de_prestamo
                  ? Init?.texto_estimacion_de_prestamo
                  : `Este valor está sujeto a ser modificado según las condiciones
                  específicas del auto`}
                .
              </small>
            </div>
            <div className="col-6 w-full md:w-1/2 mb-2">
              <label htmlFor="basic-url" className="form-label text-dark bold">
                El pago total de tu préstamo sería de
              </label>
              <div className="input-group">
                <p
                  className="form-control border-dark  text-dark"
                  id="basic-url"
                >
                  {Monto}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <p>No hay resultados, intentalo nuevamente.</p>
        )}
      </div>
    </>
  );
};
