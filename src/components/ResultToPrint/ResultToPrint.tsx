import React, { forwardRef } from "react";
import { State, useStore } from "../../context/CotizacionContext";
import CotizacionResult from "./CotizacionResult";
import CotizacionAutoResult from "./CotizacionAutoResult";

import ResultToPrintHead from "./ResultToPrintHead";
import ClientInfo from "./ClientInfo";
import CotizacionInfo from "./CotizacionInfo";

export const ResultToPrint = forwardRef<HTMLElement, State>(
  ({ formulario }: State, ref) => {
    const { cotizacion, Monto, selectedQuoter } = useStore();
    console.log("Cotizador seleccionado es:", selectedQuoter);
    const resultComponent = () => {
      if (cotizacion && cotizacion[0] && cotizacion[0].PrestamoMaximo) {
        return <CotizacionResult />;
      } else if (Monto) {
        return <CotizacionAutoResult />;
      }
      return null;
    };
    return (
      <section
        id="ResultToPrint"
        ref={ref}
        className="br-24 bg-white mb-3 md:p-4"
      >
        <div id="ResultToPrintBody">
          <ResultToPrintHead />
          <ClientInfo formulario={formulario} />
          <CotizacionInfo />
          {resultComponent()}
        </div>
      </section>
    );
  }
);
