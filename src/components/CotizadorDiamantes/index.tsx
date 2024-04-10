import React, { useState } from "react";
import { QuoterResult } from "../QuoterResult/QuoterResult";
import QuoterDiamantes from "./QuoterDiamantes";
import { useStore } from "../../context/CotizacionContext";
import { Cotizacion } from "../../types/cotizacionTypes";

export default function CotizadorDiamantes() {
  const [cotizacionCompletada, setCotizacionCompletada] = useState(false);
  const guardarCotizacion = useStore((state) => state.guardarCotizacion);

  const handleCotizacionCompleta = (resultadoCotizacion: Cotizacion[]) => {
    guardarCotizacion(resultadoCotizacion);
    console.log("RESULTADO COTIZACIÓN", resultadoCotizacion);
    setCotizacionCompletada(true);
  };

  return (
    <>
      {cotizacionCompletada ? (
        <QuoterResult setCotizacionCompletada={setCotizacionCompletada} />
      ) : (
        <QuoterDiamantes
          setCotizacionCompletada={setCotizacionCompletada}
          handleCotizacionCompleta={handleCotizacionCompleta}
        />
      )}
    </>
  );
}
