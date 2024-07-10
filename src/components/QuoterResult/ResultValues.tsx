import React from "react";
import { useStore } from "../../context/CotizacionContext";
import { formatCurrency } from "../../utils/formarCurrency";

export const ResultValues = () => {
  const { cotizacion } = useStore();
  const options = ["Plazo", "Préstamo máximo", "Préstamo mínimo"];
  return (
    <>
      <div className="pasos-cotizador">
        <div className=" my-0">
          <div className="d-none d-md-flex  row">
            <div className="col-12 col-md-4">
              <label htmlFor="basic-url" className="form-label text-dark bold">
                Plazos
              </label>
            </div>
            <div className="col-12 col-md-4">
              <label htmlFor="basic-url" className="form-label text-dark bold">
                Préstamo máximo
              </label>
            </div>
            <div className="col-12 col-md-4 ">
              <label htmlFor="basic-url" className="form-label text-dark bold">
                Préstamo mínimo
              </label>
            </div>
          </div>
        </div>
        {cotizacion ? (
          cotizacion.map((item, index) => (
            <div key={index} className="card-result ">
              <div className="row">
                <label
                  htmlFor="basic-url"
                  className="form-label text-dark bold hidden"
                >
                  {options[index]}
                </label>
                <div className="col-12 col-md-4 md-2  md:mb-1">
                  <div className="input-group">
                    <p
                      id="basic-url"
                      className="md:outline-1 md:outline p-2 w-full  text-dark border-dark rounded-3xl"
                    >
                      <span className="md:hidden font-bold">
                        {options[0]} {item.Producto}
                      </span>{" "}
                      <span className="hidden md:block">{item.Producto}</span>
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-4 md-2  md:mb-1">
                  <div className="input-group">
                    <p
                      className="md:outline-1 md:outline p-2 w-full text-dark border-dark rounded-3xl"
                      id="basic-url"
                    >
                      <span className="md:hidden "> {options[1]}:</span>
                      {formatCurrency(item.PrestamoMaximo)}
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-4 md-2  md:mb-1">
                  <div className="input-group">
                    <p
                      className="md:outline-1 md:outline p-2 w-full text-dark border-dark rounded-3xl"
                      id="basic-url"
                    >
                      <span className="md:hidden "> {options[2]}:</span>
                      {formatCurrency(item.PrestamoMinimo)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="my-10">No hay resultados, intentalo nuevamente.</p>
        )}
      </div>
    </>
  );
};
