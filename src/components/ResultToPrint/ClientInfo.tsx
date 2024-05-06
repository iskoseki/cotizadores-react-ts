import React from "react";

export default function ClientInfo({ formulario }) {
  const { First_Name, Last_Name, Email } = formulario;
  return (
    <div className="card border-dark px-3 md:px-3  text-dark bg-24 mb-4">
      <div className="card-body">
        <div className="bold text-normal mb-3">Titular</div>
        <div className="row">
          <div className="col-6 col-md-6">
            <p className="text-uppercase text-[14px] font-bold">Nombre</p>
            <p className="text-[12px] md:text-[16px] mb-0">
              {First_Name} {""}
              {Last_Name}
            </p>
          </div>
          <div className="col-6 col-md-6">
            <p className="text-uppercase text-[14px] font-bold">Mail</p>
            <p className=" text-[12px] md:text-[16px] mb-0">{Email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
