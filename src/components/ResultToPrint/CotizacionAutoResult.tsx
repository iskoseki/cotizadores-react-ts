import React from "react";
import { useStore } from "../../context/CotizacionContext";
import { formatCurrency } from "../../utils/formarCurrency";
export default function CotizacionAutoResult() {
  const { Monto, Plazo, PlazoQuincenal } = useStore();
  return (
    <>
      {Monto ? (
        <>
          <div className="card border-dark text-dark bg-24 mb-4 ">
            <div className="card-body">
              <div className="bold text-normal ">Datos de cotización</div>
              <div className="row print-row-titles">
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
              <div className="row">
                <div className="col-12 col-md-4">
                  <p className="text-uppercase text-[14px] font-bold md:hidden mt-2">
                    Monto deseado del préstamo
                  </p>
                  <p className="text-[14px] md:text-[16px] ">
                    {formatCurrency(Monto)}
                  </p>
                </div>
                <div className="col-12 col-md-4">
                  <p className="text-uppercase text-[14px] font-bold md:hidden mt-2">
                    Plazo
                  </p>
                  <p className="text-[14px] md:text-[16px]">{Plazo} meses</p>
                </div>
                <div className="col-12 col-md-4">
                  <p className="text-uppercase text-[14px] font-bold md:hidden mt-2">
                    Monto deseado del préstamo
                  </p>
                  <p className="text-[14px] md:text-[16px]">
                    {formatCurrency(Math.round(Number(PlazoQuincenal)))}
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
