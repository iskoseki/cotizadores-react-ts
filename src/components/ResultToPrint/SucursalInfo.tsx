import React from "react";
export default function SucursalInfo({ sucursal }) {
  return (
    <div className="card border-dark text-dark bg-24 mb-4">
      <div className="card-body">
        <div className="bold text-normal mb-3">Datos de sucursal</div>
        <div className="row">
          <div className="col-12 col-md-6 mb-4">
            <p className="text-uppercase text-small book">Direccion</p>
            <p className="text-normal mb-0">
              {sucursal.Calle} {sucursal.Numero} {sucursal.Colonia}{" "}
              {sucursal.CP}
            </p>
          </div>
          <div className="col-12 col-md-6 mb-4">
            <p className="text-uppercase text-small book">Telefono</p>
            <p className="text-normal mb-0">
              {sucursal.Telefono1} {sucursal.Telefono2}
            </p>
          </div>
          <div className="col-12 col-md-6 mb-4">
            <p className="text-uppercase text-small book">
              Horarios de atencion
            </p>
            <p className="text-normal mb-0">{sucursal.HorarioLV}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
