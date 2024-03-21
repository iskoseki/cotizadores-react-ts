import React, { Suspense, useEffect } from "react";
import { useStore } from "../../context/CotizacionContext";

import Loading from "../Loading";

import QuoterCicle from "../QuoterCicle/QuoterCicle";
import ThirdStep from "../../routes/thirdStep";

const QuaterSelector = React.lazy(
  () => import("../QuaterSelector/QuoterSelector")
);
const CotizadorAlhajas = React.lazy(() => import("../CotizadorAlhajas"));
const CotizadorAutomotor = React.lazy(() => import("../CotizarAutomotor"));
const CotizadorDiamantes = React.lazy(() => import("../CotizadorDiamantes"));
const CotizadorRelojes = React.lazy(() => import("../CotizadorRelojes"));

export default function QuoterContainer() {
  const {
    reiniciarEstado,
    showForm,
    setSelectedQuoter,
    selectedQuoter,
    setCurrentStep,
  } = useStore();

  useEffect(() => {
    reiniciarEstado();
    // Obtenemos la ruta actual
    const path = window.location.pathname;
    // Verificamos si la ruta corresponde a alguna de nuestras opciones
    if (path.includes("/cotizacion/alhajas")) {
      setSelectedQuoter("Alhajas");
    } else if (path.includes("/cotizacion/automotor")) {
      setSelectedQuoter("Automotor");
    } else if (path.includes("/cotizacion/relojes")) {
      setSelectedQuoter("Relojes");
    } else if (path.includes("/cotizacion/diamantes")) {
      setSelectedQuoter("Diamantes");
    }
  }, [reiniciarEstado, setSelectedQuoter, setCurrentStep]);

  return (
    <>
      <Suspense fallback={<Loading height={400} />}>
        {showForm ? (
          <ThirdStep />
        ) : (
          <section className="bg-[#f8f8f8] section cotizador ">
            <Suspense fallback={<Loading />}>
              <div className="hidden md:block">
                <QuoterCicle />
              </div>
              <div className="container">
                <div className="d-flex justify-start md:justify-center">
                  <div className="col-12 col-md-10">
                    <QuaterSelector
                      selectedQuoter={selectedQuoter}
                      setSelectedQuoter={setSelectedQuoter}
                    />
                    <div className="d-md-none">
                      <QuoterCicle />
                    </div>
                    {selectedQuoter === "Alhajas" && <CotizadorAlhajas />}
                    {selectedQuoter === "Automotor" && <CotizadorAutomotor />}
                    {selectedQuoter === "Relojes" && <CotizadorRelojes />}
                    {selectedQuoter === "Diamantes" && <CotizadorDiamantes />}
                  </div>
                </div>
              </div>
            </Suspense>
          </section>
        )}
      </Suspense>
    </>
  );
}
