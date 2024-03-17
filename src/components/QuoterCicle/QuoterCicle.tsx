import React, { useEffect, useMemo, useState } from "react";
import { Response } from "../QuaterSelector/QuaterSelector.types";
import { useFetch } from "../../hooks/useFetch";
import NumberCicle from "./NumberCicle";
import { useStore } from "../../context/CotizacionContext";

export default function QuoterCicle() {
  const [paso1Completado, setPaso1Completado] = useState(false);
  const [paso2Completado, setPaso2Completado] = useState(false);
  const { CurrentStep } = useStore();
  const { data } = useFetch<Response>(
    "https://bgwp.bgroup.com.ar/wp-json/acf/v3/pages/28"
  );

  useEffect(() => {
    const updateSteps = () => {
      CurrentStep === 1 ? setPaso1Completado(false) : setPaso2Completado(false);
      CurrentStep === 2 ? setPaso1Completado(true) : setPaso2Completado(false);
    };
    updateSteps();
  }, [CurrentStep, setPaso1Completado, setPaso2Completado]);

  const isActive = useMemo(
    () => (path: string) => location.pathname === path,
    []
  );

  return (
    <section className=" ">
      <div className="mt-5 container py-md-5">
        <div className="d-flex justify-content-center">
          <div className="col-7 col-md-5 text-center position-relative">
            <div className="linea-punteada"></div>
            <ul className="list-group list-group-horizontal pasos">
              <NumberCicle
                isActive={isActive("/")}
                num={1}
                paso={paso1Completado}
              >
                {data?.pasos[0].titulo}
              </NumberCicle>

              <NumberCicle
                isActive={isActive("/ingresa-tus-datos")}
                num={2}
                paso={paso2Completado}
              >
                {data?.pasos[1].titulo}
              </NumberCicle>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
