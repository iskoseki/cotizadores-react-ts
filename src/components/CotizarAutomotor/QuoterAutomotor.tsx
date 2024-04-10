import React from "react";
import { useFetch } from "../../hooks/useFetch";
import Loading from "../Loading";
import Requirements from "../Requirements";
import { QuoterAutoProps } from "./QuoterAutoProps";
import useFetchCotizacion from "../../hooks/QuoterAutomotorHooks/useCotizacion";
import useCotizacionStore from "../../context/cotizacionAutoStore";
import toast, { Toaster } from "react-hot-toast";
import { useStore } from "../../context/CotizacionContext";
import { formatCurrency } from "../../utils/formarCurrency";

export default function QuoterAutomotor({
  setCotizacionCompletada,
  children,
}: QuoterAutoProps) {
  const notify = () => toast.error("Por favor, rellene todos los campos");
  const initAutos = import.meta.env.VITE_INIT_AUTO;

  //initial fetch data
  const {
    data: Init,
    error: InitError,
    isLoading: InitIsLoading,
  } = useFetch<QuoterAutoProps>(initAutos);

  //states
  const { year, brand, models, version, productType, product, productClass } =
    useCotizacionStore();
  const { Plazo } = useStore();

  const { data: prestamo } = useFetchCotizacion(
    Number(year),
    Number(brand),
    Number(models),
    Number(Plazo),
    version,
    productType,
    String(productClass),
    String(product)
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
              {/* children => Form fields */}
              {children}
              <div className="col-12 mb-3">
                <label
                  htmlFor="basic-url"
                  className="form-label text-dark bold"
                >
                  Podrías recibir hasta
                </label>
                <p className="form-control text-dark py-2">
                  {prestamo.Prestamo ? formatCurrency(prestamo.Prestamo) : "$0"}
                </p>
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
                      prestamo.Prestamo > 0
                    ) {
                      setCotizacionCompletada(true);
                    } else {
                      notify();
                    }
                  }}
                  className={`btn ${
                    prestamo.Prestamo && prestamo.Prestamo > 0
                      ? "btn-primary"
                      : "btn-secondary"
                  }  py-2 px-5 w-full md:w-auto `}
                  id="btn-paso-adelante-1"
                  disabled={
                    prestamo.Prestamo && prestamo.Prestamo > 0 ? false : true
                  }
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
