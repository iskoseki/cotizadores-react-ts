import React from "react";
import { useStore } from "../../context/CotizacionContext";
export default function CotizacionAutoResult() {
  const { Monto, Plazo, PlazoQuincenal } = useStore();
  return (
    <>
      {Monto ? (
        <>
          <div className="card border-dark text-dark bg-24 mb-4">
            <div className="card-body">
              <div className="bold text-normal mb-3">Datos de cotización</div>
              <div className="row hidden md:flex">
                <div className="col-12 col-md-4">
                  <p className="text-uppercase text-small book">
                    Monto deseado del préstamo
                  </p>
                </div>
                <div className="col-12 col-md-4">
                  <p className="text-uppercase text-small book">
                    Monto deseado del préstamo
                  </p>
                </div>
                <div className="col-12 col-md-4">
                  <p className="text-uppercase text-small book">
                    Pago mensual deseado
                  </p>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-12 col-md-4">
                  <p className="text-uppercase text-[14px] font-bold md:hidden">
                    Monto deseado del préstamo
                  </p>
                  <p className="text-[14px] md:text-[16px] my-2">{Monto}</p>
                </div>
                <div className="col-12 col-md-4">
                  <p className="text-uppercase text-[14px] font-bold md:hidden">
                    Plazo
                  </p>
                  <p className="text-[14px] md:text-[16px] my-2">
                    {Plazo} meses
                  </p>
                </div>
                <div className="col-12 col-md-4">
                  <p className="text-uppercase text-[14px] font-bold md:hidden">
                    Monto deseado del préstamo
                  </p>
                  <p className="text-[14px] md:text-[16px] my-2">
                    {Math.round(Number(PlazoQuincenal))}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
