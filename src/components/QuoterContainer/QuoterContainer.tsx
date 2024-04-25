import React, { Suspense, useEffect, useRef } from "react";
import { useStore } from "../../context/CotizacionContext";

import Loading from "../Loading";

import QuoterCicle from "../QuoterCicle/QuoterCicle";
import ThirdStep from "../../routes/FormPage";
import useSmoothScroll from "../../hooks/useSmoothScroll";

const QuaterSelector = React.lazy(
  () => import("../QuaterSelector/QuoterSelector")
);
const CotizadorAlhajas = React.lazy(() => import("../CotizadorAlhajas"));
const CotizadorAutomotor = React.lazy(() => import("../CotizarAutomotor"));
const CotizadorDiamantes = React.lazy(() => import("../CotizadorDiamantes"));
const CotizadorRelojes = React.lazy(() => import("../CotizadorRelojes"));

export default function QuoterContainer() {
  const scroll = useRef(null);
  const {
    reiniciarEstado,
    showForm,
    setSelectedQuoter,
    selectedQuoter,
    setCurrentStep,
  } = useStore();

  useSmoothScroll(scroll);

  const quoterMap = {
    "/cotizacion/alhajas": "Alhajas",
    "/cotizacion/auto": "Auto",
    "/cotizacion/relojes": "Relojes",
    "/cotizacion/diamantes": "Diamantes",
  };

  useEffect(() => {
    reiniciarEstado();
    const path = window.location.pathname;
    Object.keys(quoterMap).forEach((key) => {
      if (path.includes(key)) {
        setSelectedQuoter(quoterMap[key]);
      }
    });
  }, [reiniciarEstado, setSelectedQuoter, setCurrentStep]);

  const quoterComponents = {
    Alhajas: <CotizadorAlhajas />,
    Auto: <CotizadorAutomotor />,
    Relojes: <CotizadorRelojes />,
    Diamantes: <CotizadorDiamantes />,
  };

  return (
    <>
      <Suspense fallback={<Loading height={400} />}>
        {showForm ? (
          <ThirdStep />
        ) : (
          <section ref={scroll} className="bg-[#f8f8f8] section cotizador ">
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
                    {selectedQuoter && quoterComponents[selectedQuoter]}
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
