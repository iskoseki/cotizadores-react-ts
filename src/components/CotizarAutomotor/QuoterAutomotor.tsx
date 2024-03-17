import React from "react";
import { useFetch } from "../../hooks/useFetch";
import Loading from "../Loading";
import Requirements from "../Requirements";

import { QuoterAutoProps } from "./QuoterAutoProps";
import useFetchCotizacion from "../../hooks/QuoterAutomotorHooks/useCotizacion";
import useCotizacionStore from "../../context/cotizacionAutoStore";
import toast, { Toaster } from "react-hot-toast";

export default function QuoterAutomotor({
  setCotizacionCompletada,
  children,
}: QuoterAutoProps) {
  const notify = () => toast.error("Por favor, rellene todos los campos");

  //initial fetch data
  const {
    data: Init,
    error: InitError,
    isLoading: InitIsLoading,
  } = useFetch<QuoterAutoProps>(
    "https://bgwp.bgroup.com.ar/wp-json/acf/v3/pages/74"
  );

  //states
  const { year, brand, models, version, productType } = useCotizacionStore();
  const { data: prestamo } = useFetchCotizacion(
    Number(year),
    Number(brand),
    Number(models),
    12,
    version,
    productType
  );

  //handlers
  if (InitIsLoading) {
    return <Loading />;
  }

  if (InitError) {
    return <div>Error: {InitError?.message}</div>;
  }

  return (
    <>
      <div className="p-4 br-24 bg-white mb-3">
        <Toaster />
        <div id="paso-1" className="pasos-cotizador">
          {InitIsLoading ? (
            <Loading />
          ) : (
            <>
              <h2 className="text-normal-dos text-dark bold mb-2">
                {Init?.titulo_datos_cotizador}
              </h2>

              {Init?.texto_datos_cotizador ? (
                <div
                  id="acordeon-contenido sm:block hidden "
                  className="mb-5 font-thin"
                  dangerouslySetInnerHTML={{
                    __html: Init?.texto_datos_cotizador,
                  }}
                />
              ) : null}
              {children}
              <div className="col-12 mb-3">
                <label
                  htmlFor="basic-url"
                  className="form-label text-dark bold"
                >
                  Podrías recibir hasta
                </label>

                <p className="form-control border-dark py-2">
                  {prestamo.Prestamo ? "$" + prestamo.Prestamo : "$" + 0}
                </p>
                <small id="montoHelp" className="form-thin text-muted">
                  {Init?.texto_estimacion_de_prestamo
                    ? Init?.texto_estimacion_de_prestamo
                    : `Este valor está sujeto a ser modificado según las condiciones
                  específicas del auto`}
                  .
                </small>
              </div>
              <div className="d-flex justify-content-center justify-content-md-end">
                <button
                  onClick={() => {
                    if (
                      year &&
                      brand &&
                      models &&
                      version &&
                      productType &&
                      prestamo.Prestamo
                    ) {
                      setCotizacionCompletada(true);
                    } else {
                      notify();
                    }
                  }}
                  className="btn btn-dark py-2 px-5 w-full md:w-auto"
                  id="btn-paso-adelante-1"
                >
                  Cotizar
                </button>
              </div>
            </>
          )}
        </div>
      </div>
      <Requirements />
    </>
  );
}
