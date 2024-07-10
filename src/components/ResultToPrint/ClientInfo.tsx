import React from "react";
import UserID from "../../utils/fetchUserId";

export default function ClientInfo({ formulario }) {
  const { id, error } = UserID();
  return (
    <div className="card border-dark   text-dark bg-24 mb-4">
      <div className="card-body">
        <div className="bold text-normal mb-3">Titular</div>
        <div className="row">
          <div className="col-6 col-md-6">
            <p className="text-uppercase text-[14px] font-bold">Nombre</p>
            <p className="text-[12px] md:text-[16px] mb-0">
              {formulario["First Name"]} {""}
              {formulario["Last Name"]}
            </p>
          </div>
          {error || id === "Usuario sin ID" ? null : (
            <div className="col-6 col-md-6">
              <p className="text-uppercase text-[14px] font-bold">
                Número de cliente
              </p>
              <p className="text-[12px] md:text-[16px] mb-0">
                {id} {""}
                {error}
              </p>
            </div>
          )}
          <div className="col-6 col-md-6">
            <p className="text-uppercase text-[14px] font-bold">Mail</p>
            <p className=" text-[12px] md:text-[16px] mb-0">
              {formulario.Email}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
