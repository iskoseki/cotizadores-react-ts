import React from "react";
import { useStore } from "../../context/CotizacionContext";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import OutlineButton from "../OutlineButton/OutlineButton";

export const ResultValues = () => {
  const { cotizacion } = useStore();
  const options = ["Plazo", "Préstamo máximo", "Préstamo mínimo"];
  return (
    <>
      <div className="pasos-cotizador">
        <div className="px-3  ">
          <div className="hidden md:flex row">
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
            <div
              key={index}
              className="bg-[#f4f4f4] md:bg-transparent rounded-5xl py-3 my-2  md:pb-3 px-3"
            >
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
                      <span className="md:hidden "> {options[1]}:</span> $
                      {item.PrestamoMaximo}
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-4 md-2  md:mb-1">
                  <div className="input-group">
                    <p
                      className="md:outline-1 md:outline p-2 w-full text-dark border-dark rounded-3xl"
                      id="basic-url"
                    >
                      <span className="md:hidden "> {options[2]}:</span> $
                      {item.PrestamoMinimo}
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

export function QuoterResult({ setCotizacionCompletada }) {
  const { setShowForm } = useStore();

  return (
    <div id="paso-2" className="pasos-cotizador my-4 bg-white br-24 p-4">
      <h2 className="text-normal-dos text-dark bold text-5xl">
        Estimación de préstamo
      </h2>
      <p className="text-dark mb-5 hidden md:block mt-2">
        Lorem ipsum dolor sit amet consectetur. Cursus non tellus sodales at
        maecenas egestas justo. Consequat lobortis tristique faucibus orci quis
        tempor.
      </p>
      <div className="mt-6">
        <ResultValues />
      </div>

      <div className="d-flex justify-content-center gap-1 justify-content-md-end mt-4">
        <OutlineButton
          func={() => {
            setCotizacionCompletada(false);
          }}
          id="btn-paso-atras"
          type="button"
          children="Volver"
        />

        <PrimaryButton
          fun={() => setShowForm(true)}
          id="btn-paso-siguiente"
          type="button"
          children="siguiente"
        />
      </div>
    </div>
  );
}
