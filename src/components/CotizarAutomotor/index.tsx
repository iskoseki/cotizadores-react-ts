import React, { useState } from "react";
import QuoterAutomotor from "./QuoterAutomotor";
import { QuoterResultAuto } from "./QuoterResultAuto";
import OptionsAutomotor from "./Options/OptionsAutomotor";

export default function CotizadorAutomotor() {
  const [cotizacionCompletada, setCotizacionCompletada] = useState(false);

  return (
    <div>
      {cotizacionCompletada ? (
        <QuoterResultAuto setCotizacionCompletada={setCotizacionCompletada} />
      ) : (
        <QuoterAutomotor setCotizacionCompletada={setCotizacionCompletada}>
          <OptionsAutomotor />
        </QuoterAutomotor>
      )}
    </div>
  );
}
