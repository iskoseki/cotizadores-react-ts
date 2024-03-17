import React, { useState } from "react";
import QuoterAlhajas from "./QuoterAlhajas";
import { QuoterResult } from "../QuoterResult/QuoterResult";
import { useStore } from "../../context/CotizacionContext";
import { Cotizacion } from "../../types/cotizacionTypes";

export default function CotizadorAlhajas() {
  const [cotizacionCompletada, setCotizacionCompletada] = useState(false);
  const guardarCotizacion = useStore((state) => state.guardarCotizacion);

  const handleCotizacionCompleta = (resultadoCotizacion: Cotizacion[]) => {
    guardarCotizacion(resultadoCotizacion);
    setCotizacionCompletada(true);
  };

  return (
    <>
      {cotizacionCompletada ? (
        <QuoterResult setCotizacionCompletada={setCotizacionCompletada} />
      ) : (
        <QuoterAlhajas
          setCotizacionCompletada={setCotizacionCompletada}
          handleCotizacionCompleta={handleCotizacionCompleta}
        />
      )}
    </>
  );
}
