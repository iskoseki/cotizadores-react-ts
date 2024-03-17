import React, { forwardRef } from "react";
import { State, useStore } from "../../context/CotizacionContext";
import CotizacionResult from "./CotizacionResult";
import CotizacionAutoResult from "./CotizacionAutoResult";

import ResultToPrintHead from "./ResultToPrintHead";
import ClientInfo from "./ClientInfo";

export const ResultToPrint = forwardRef<HTMLElement, State>(
  ({ formulario }: State, ref) => {
    const { cotizacion, Monto } = useStore();

    const resultComponent = () => {
      if (cotizacion[0].PrestamoMaximo) {
        return <CotizacionResult />;
      } else if (Monto) {
        return <CotizacionAutoResult />;
      }
      return null;
    };
    return (
      <section ref={ref} className="br-24 bg-white mb-3 md:p-4">
        <ResultToPrintHead />
        <ClientInfo formulario={formulario} />

        {resultComponent()}
      </section>
    );
  }
);
