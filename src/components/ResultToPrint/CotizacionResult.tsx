import React from "react";
import { useStore } from "../../context/CotizacionContext";
export default function CotizacionResult() {
  const { cotizacion } = useStore();
  return (
    <>
      {cotizacion ? (
        <>
          <div className="card border-dark text-dark bg-24 mb-4">
            <h2 className="font-bold text-[20px] mb-8 w-full text-pretty">
              Datos de cotización
            </h2>
            <div className="card-body  p-0 md:p-2">
              <div className="row hidden md:flex mb-6">
                <div className="col-12 col-md-4 ">
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
                <div key={index} className="row mb-4">
                  <div className="col-12 col-md-4 ">
                    <p className="text-uppercase text-[14px] font-bold md:hidden">
                      Plazo
                    </p>
                    <p className="text-[14px] md:text-[16px] my-2">
                      {item.Producto}
                    </p>
                  </div>
                  <div className="col-12 col-md-4">
                    <p className="text-uppercase text-[14px] font-bold md:hidden">
                      PrestamoMaximo
                    </p>
                    <p className="text-[14px] md:text-[16px] my-2">
                      ${item.PrestamoMaximo}
                    </p>
                  </div>
                  <div className="col-12 col-md-4">
                    <p className="text-uppercase text-[14px] font-bold md:hidden">
                      Prestamo Minimo
                    </p>
                    <p className="text-[14px] md:text-[16px] my-2 ">
                      {" "}
                      ${item.PrestamoMinimo}
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
