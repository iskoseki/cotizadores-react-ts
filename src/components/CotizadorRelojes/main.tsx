import React, { useState } from "react";

import QuoterResult from "../QuoterResult/";
import { useStore } from "../../context/CotizacionContext";
import { Cotizacion } from "../../types/cotizacionTypes";
import QuoterRelojes from "./QuoterRelojes";

export default function CotizadorRelojes() {
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
        <QuoterRelojes
          setCotizacionCompletada={setCotizacionCompletada}
          handleCotizacionCompleta={handleCotizacionCompleta}
        />
      )}
    </>
  );
}
