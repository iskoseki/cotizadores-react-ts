import React, { Suspense, useEffect } from "react";
import { ResultToPrint } from "../components/ResultToPrint/ResultToPrint";
import { useReactToPrint } from "react-to-print";
import Loading from "../components/Loading";
import { useStore } from "../context/CotizacionContext";
import createApiUrl from "../utils/creatApiUrl";

export function FourthStepContent() {
  const { cotizacion, cotizacionAutomotor, formulario } = useStore();

  const componentRef = React.useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Suspense fallback={<Loading />}>
      <section className="section" id="inicio">
        <div className="container">
          <div className="d-flex justify-content-center">
            <div className="col-12 col-md-10">
              <div className="br-24 bg-white mb-3">
                <div className="p-4">
                  <ResultToPrint
                    ref={componentRef}
                    cotizacion={cotizacion}
                    cotizacionAutomotor={cotizacionAutomotor}
                    formulario={formulario}
                    seleccion={[""]}
                  />
                  <div className="flex flex-wrap gap-2 justify-content-center justify-content-md-end">
                    <a
                      href={createApiUrl("/sucursales/")}
                      className="btn btn-outline-dark flex justify-center items-center  py-2 px-md-2 w-full md:w-[12.25rem] h-12 "
                    >
                      Encuentra tu sucursal
                    </a>
                    <button
                      onClick={handlePrint}
                      className="btn btn-outline-dark py-2 px-md-2 w-full md:w-[11.25rem] h-12 "
                    >
                      Descargar PDF
                    </button>

                    <a
                      href={createApiUrl("")}
                      className="btn btn-primary flex justify-center items-center  py-2 px-md-2 w-full md:w-[11.25rem] h-12"
                    >
                      Volver a inicio
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Suspense>
  );
}
export default function FourthStep() {
  return <FourthStepContent />;
}
