import React, { useRef } from "react";
import RenegociarAuto from "./RenegociarAuto";
import { useStore } from "../../context/CotizacionContext";
import { QuoterAutoProps } from "../CotizarAutomotor/QuoterAutoProps";
import { useFetch } from "../../hooks/useFetch";
import { formatCurrency } from "../../utils/formarCurrency";
import useSmoothScroll from "../../hooks/useSmoothScroll";

export function QuoterResultAuto({ setCotizacionCompletada }) {
  const { cotizacionAutomotor, Monto } = useStore();
  const initAutos = import.meta.env.VITE_INIT_AUTO;
  const { data: Init } = useFetch<QuoterAutoProps>(initAutos);
  const miRef = useRef(null);
  useSmoothScroll(miRef);
  return (
    <div ref={miRef}>
      <div className="pasos-cotizador my-4 bg-white br-24 p-4">
        <h2 className="text-normal-dos text-dark bold mb-4">
          {Init?.titulo_estimacion_de_prestamo}
        </h2>
        <p className="text-dark mb-5 hidden md:block">
          {Init?.texto_estimacion_de_prestamo}
        </p>

        <>
          <div className="pasos-cotizador ">
            {cotizacionAutomotor ? (
              <div className="flex flex-col md:flex-row gap-1">
                <div className="col-6 w-full md:w-1/2 mb-2">
                  <label
                    htmlFor="basic-url"
                    className="form-label text-dark bold"
                  >
                    Podrías recibir hasta
                  </label>
                  <div className="input-group">
                    <p
                      id="basic-url"
                      className="form-control text-dark border-dark "
                    >
                      {cotizacionAutomotor.Prestamo &&
                        formatCurrency(cotizacionAutomotor.Prestamo)}
                    </p>
                  </div>
                </div>
                <div className="col-6 w-full md:w-1/2 mb-2">
                  <label
                    htmlFor="basic-url"
                    className="form-label text-dark bold"
                  >
                    El pago total de tu préstamo sería de
                  </label>
                  <div className="input-group">
                    <p
                      className="form-control border-dark  text-dark"
                      id="basic-url"
                    >
                      {!Monto ? "$0.00" : formatCurrency(Monto)}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <p>No hay resultados, intentalo nuevamente.</p>
            )}
          </div>
        </>
      </div>
      <RenegociarAuto setCotizacionCompletada={setCotizacionCompletada} />
    </div>
  );
}
