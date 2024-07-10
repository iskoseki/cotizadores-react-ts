import React, { useRef } from "react";
import { useStore } from "../../context/CotizacionContext";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import OutlineButton from "../OutlineButton/OutlineButton";
import { useFetch } from "../../hooks/useFetch";
import { QuoterAutoProps } from "../CotizarAutomotor/QuoterAutoProps";
import useSmoothScroll from "../../hooks/useSmoothScroll";
import createApiUrl from "../../utils/creatApiUrl";
import { ResultValues } from "./ResultValues";

export default function QuoterResult({ setCotizacionCompletada }) {
  const { setShowForm } = useStore();
  const initAutos = import.meta.env.VITE_INIT_AUTO;

  const { data: Init } = useFetch<QuoterAutoProps>(createApiUrl(initAutos));
  const toScroll = useRef(null);
  useSmoothScroll(toScroll);
  return (
    <div
      ref={toScroll}
      id="paso-2"
      className="pasos-cotizador my-4 bg-white br-24 p-4"
    >
      <h2 className="text-normal-dos text-dark bold text-5xl">
        {Init?.titulo_estimacion_de_prestamo}
      </h2>

      <div className="mt-6">
        <ResultValues />
      </div>

      <div className="d-flex justify-content-center gap-[20px] justify-content-md-end mt-4">
        <OutlineButton
          func={() => {
            setCotizacionCompletada(false);
          }}
          id="btn-paso-atras"
          type="button"
          children="Volver a cotizar"
        />

        <PrimaryButton
          fun={() => setShowForm(true)}
          id="btn-paso-siguiente"
          type="button"
          children="Siguiente"
        />
      </div>
    </div>
  );
}
