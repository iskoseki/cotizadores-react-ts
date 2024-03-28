import React from "react";
import { FormValues } from "../../types/formTypes";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

import OutlineButton from "../OutlineButton/OutlineButton";
import { useStore } from "../../context/CotizacionContext";

export default function Form({
  onSubmit,
}: {
  onSubmit: SubmitHandler<FormValues>;
}) {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const { setShowForm } = useStore();
  return (
    <form
      id="webform"
      name="WebToLeads5591635000004669139"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="row mb-4">
        <input
          type="text"
          style={{ display: "none" }}
          {...register("xnQsjsdp")}
          value="a0270331bcd71ecdc72c172aaf5672c133af267fe05ac4389480de9c1788e3e4"
        />
        <input type="hidden" {...register("zc_gad")} value="" />
        <input
          type="text"
          style={{ display: "none" }}
          {...register("xmIwtLD")}
          value="05e8c4fa2d2cef1a1e811e05d582532a3b4eb324848251a500d108d7d21c573e"
        />
        <input
          type="text"
          style={{ display: "none" }}
          {...register("actionType")}
          value="TGVhZHM="
        />
        <input
          type="text"
          style={{ display: "none" }}
          {...register("returnURL")}
          value="https&#x3a;&#x2f;&#x2f;www.montepio.org.mx"
        />
        <div className="col-12 col-md-6 mb-3">
          <label htmlFor="First_Name" className="form-label text-dark bold">
            Nombres
          </label>
          <div className="input-group">
            <input
              type="text"
              {...register("First_Name", {
                required: "Este campo es requerido",
                minLength: {
                  value: 3,
                  message: "El nombre debe tener al menos 3 caracteres",
                },
                pattern: {
                  value: /^[A-Za-z]+$/i,
                  message: "Solo se permiten letras en este campo",
                },
              })}
              id="First_Name"
              className={`form-control border-dark py-2`}
              maxLength={40}
            />
          </div>
          {errors.First_Name && (
            <p className="text-[#FF0000] text-[12px]">
              *{errors.First_Name.message}
            </p>
          )}
        </div>
        <div className="col-12 col-md-6 mb-3">
          <label htmlFor="Last_Name" className="form-label text-dark bold">
            Apellidos
          </label>
          <div className="input-group">
            <input
              className="form-control border-dark py-2"
              type="text"
              {...register("Last_Name", {
                required: "Este campo es requerido",
                pattern: {
                  value: /^[A-Za-z]+$/i,
                  message: "Solo se permiten letras en este campo",
                },
              })}
              id="Last_Name"
              maxLength={80}
            />
          </div>
          {errors.Last_Name && (
            <p className="text-[#FF0000] text-[12px]">
              *{errors.Last_Name.message}
            </p>
          )}
        </div>
        <div className="col-12 col-md-12 mb-3">
          <label htmlFor="Phone" className="form-label text-dark bold">
            Teléfono celular
          </label>
          <div className="input-group">
            <input
              className="form-control border-dark py-2 "
              type="tel"
              {...register("Mobile", {
                required: "Este campo es requerido",
                pattern: {
                  value: /^[0-9]+$/i,
                  message: "Solo se permiten números en este campo",
                },
              })}
              id="Mobile"
              maxLength={15}
            />
          </div>
          {errors.Mobile && (
            <p className="text-[#FF0000] text-[12px]">
              * {errors.Mobile.message}.
            </p>
          )}
        </div>
        <div className="col-12 col-md-12 mb-3">
          <label htmlFor="basic-url" className="form-label text-dark bold">
            Correo electrónico
          </label>
          <div className="input-group">
            <input
              type="email"
              className="form-control border-dark py-2"
              autoComplete="false"
              {...register("Email", {
                required: "Este campo es requerido",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Por favor, ingresa un correo electrónico válido",
                },
              })}
              id="Email"
              maxLength={100}
            />
          </div>
          {errors.Email && (
            <p className="text-[#FF0000] text-[12px]">{errors.Email.message}</p>
          )}
        </div>
        <div className="col-12 col-md-6 mb-3">
          <Controller
            name="LEADCF10"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => (
              <div className="col-12 mb-4">
                <label
                  htmlFor="basic-url"
                  className="form-label text-dark bold"
                >
                  Estado
                </label>
                <select className="form-select border-dark py-2" {...field}>
                  <option value="-None-">-Seleccione-</option>
                  <option value="Ciudad de México">Ciudad de México</option>
                  <option value="Guanajuato">Guanajuato</option>
                  <option value="Guerrero">Guerrero</option>
                  <option value="Estado de México">Estado de México</option>
                  <option value="Michoacán">Michoacán</option>
                  <option value="Morelos">Morelos</option>
                  <option value="Nuevo León">Nuevo León</option>
                  <option value="Puebla">Puebla</option>
                  <option value="Querétaro">Querétaro</option>
                  <option value="Quintana Roo">Quintana Roo</option>
                  <option value="Tlaxcala">Tlaxcala</option>
                  <option value="Yucatán">Yucatán</option>
                </select>
              </div>
            )}
          />
          {errors.LEADCF10 && (
            <p className="text-[#FF0000]  text-[12px]">
              *Este campo es requerido.
            </p>
          )}
        </div>
        <div className="col-12 col-md-6 mb-3">
          <Controller
            name="LEADCF38"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => (
              <div className="col-12 mb-4">
                <label
                  htmlFor="basic-url"
                  className="form-label text-dark bold"
                >
                  Preferencia de contacto
                </label>

                <select className="form-select border-dark py-2" {...field}>
                  <option value="-None-">-Seleccione-</option>
                  <option value="WhatsApp">WhatsApp</option>
                  <option value="Correo&#x20;electr&oacute;nico">
                    Correo electr&oacute;nico
                  </option>
                  <option value="Llamada&#x20;telef&oacute;nica">
                    Llamada telefonica
                  </option>
                </select>
              </div>
            )}
          />
          {errors.LEADCF10 && (
            <p className="text-[#FF0000]  text-[12px]">
              *Este campo es requerido.
            </p>
          )}
        </div>
      </div>

      <div className="flex justify-center md:justify-end md:gap-2">
        <OutlineButton
          func={() => setShowForm(false)}
          type="button"
          id="volver"
          value="Volver"
          title="Volver"
        >
          Volver
        </OutlineButton>

        <button
          type="submit"
          id="formsubmit"
          value="Agendar Cita"
          title="Agendar Cita"
          className={`btn btn-primary flex flex-shrink-0 justify-center items-center gap-2.5 py-2 px-2 w-full md:w-[11.25rem] h-12  bg-[#a6192e] Sans" '] text-white text-center rounded-5xl leading-normal`}
        >
          Enviar Información
        </button>
      </div>
    </form>
  );
}
