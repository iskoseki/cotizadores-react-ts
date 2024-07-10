import React from "react";
import { useStore } from "../../context/CotizacionContext";
import { formatCurrency } from "../../utils/formarCurrency";
export default function CotizacionResult() {
  const { cotizacion } = useStore();
  return (
    <>
      {cotizacion ? (
        <>
          <div
            id="cotiacion-result-print"
            className="card p-4 border-dark text-dark bg-24 mb-4"
          >
            <h2 className="font-bold text-[20px] mb-3 w-full text-pretty">
              Cotización
            </h2>
            <div className="card-body p-0 md:p-2">
              <div className="print-row-titles row mb-3 text-left">
                <div className="col-12 col-md-4">
                  <p className="text-uppercase text-[14px] font-bold">Plazo</p>
                </div>
                <div className="col-12 col-md-4">
                  <p className="text-uppercase text-[14px] font-bold">
                    Prestamo Maximo
                  </p>
                </div>
                <div className="col-12 col-md-4">
                  <p className="text-uppercase text-[14px] font-bold">
                    Prestamo Minimo
                  </p>
                </div>
              </div>
              {cotizacion.map((item, index) => (
                <div key={index} className="row mb-4 text-left">
                  <div className="col-4 col-md-4 ">
                    <p className="text-uppercase text-[10px] md:text-[14px] font-bold md:hidden pt-2">
                      Plazo mensual
                    </p>
                    <p className="text-[12px] md:text-[16px]">
                      {item.Producto}
                    </p>
                  </div>
                  <div className="col-4 col-md-4 ">
                    <p className="text-uppercase text-[10px] md:text-[14px] font-bold md:hidden pt-2">
                      Prestamo Maximo
                    </p>
                    <p className="text-[12px] md:text-[16px]">
                      {formatCurrency(item.PrestamoMaximo)}
                    </p>
                  </div>
                  <div className="col-4 col-md-4 ">
                    <p className="text-uppercase text-[10px] md:text-[14px] font-bold md:hidden pt-2">
                      Prestamo Minimo
                    </p>
                    <p className="text-[12px] md:text-[16px]">
                      {formatCurrency(item.PrestamoMinimo)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <p>No hay datos de cotizacion disponibles.</p>
      )}
    </>
  );
}
