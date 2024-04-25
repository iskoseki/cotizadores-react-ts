import React from "react";
import { FormValues } from "../../types/formTypes";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import OutlineButton from "../OutlineButton/OutlineButton";
import { useStore } from "../../context/CotizacionContext";

export default function FormAutoImpulsa({
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
      name="WebToLeads5591635000004669005"
      onSubmit={handleSubmit(onSubmit)}
      acceptCharset="UTF-8"
    >
      <div className="row mb-4">
        <input
          type="text"
          style={{ display: "none" }}
          {...register("xnQsjsdp")}
          value="c203e7548d352765c8d9a0dec800d272adcf927bb755cebc7d42cc62c3c8906c"
        />
        <input type="hidden" {...register("zc_gad")} value="" />
        <input
          type="text"
          style={{ display: "none" }}
          {...register("xmIwtLD")}
          value="62ac2f6529547d49b685501e0f5dedc944f21380662a11d8a696b09b992450a62e9e713750ed9607b9953f99984a3278"
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
          value="https&#x3a;&#x2f;&#x2f;prestamoportuauto.montepio.org.mx&#x2f;"
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
                  value: /^[A-Za-z\sáéíóúÁÉÍÓÚ]+$/i,
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
                  value: /^[A-Za-z\sáéíóúÁÉÍÓÚ]+$/i,
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
          <label
            htmlFor="Phone"
            typeof="tel"
            className="form-label text-dark bold"
          >
            Teléfono celular
          </label>
          <div className="input-group">
            <input
              className="form-control border-dark py-2"
              type="text"
              {...register("Mobile", {
                required: "Este campo es requerido",
                pattern: {
                  value: /^[0-9]+$/i,
                  message: "Solo se permiten números en este campo",
                },
              })}
              id="Mobile"
              maxLength={10}
            />
          </div>
          {errors.Mobile && (
            <p className="text-[#FF0000] text-[12px]">
              * {errors.Mobile.message}.
            </p>
          )}
        </div>
        <div className="col-12 col-md-12 mb-3">
          <label htmlFor="Email" className="form-label text-dark bold">
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
                  <option value="Ciudad&#x20;de&#x20;M&eacute;xico">
                    Ciudad de M&eacute;xico
                  </option>
                  <option value="Guanajuato">Guanajuato</option>
                  <option value="Guerrero">Guerrero</option>
                  <option value="Estado&#x20;de&#x20;M&eacute;xico">
                    Estado de M&eacute;xico
                  </option>
                  <option value="Michoac&aacute;n">Michoac&aacute;n</option>
                  <option value="Morelos">Morelos</option>
                  <option value="Nuevo&#x20;Le&oacute;n">
                    Nuevo Le&oacute;n
                  </option>
                  <option value="Puebla">Puebla</option>
                  <option value="Quer&eacute;taro">Quer&eacute;taro</option>
                  <option value="Quintana&#x20;Roo">Quintana Roo</option>
                  <option value="Tlaxcala">Tlaxcala</option>
                  <option value="Yucat&aacute;n">Yucat&aacute;n</option>
                </select>
              </div>
            )}
          />
          {errors.LEADCF10 && <p>Este campo es requerido</p>}
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
          {errors.LEADCF10 && <p>Este campo es requerido</p>}
        </div>
        <div className="hidden col-12 col-md-6 mb-3 ">
          <Controller
            name="Lead_Source"
            control={control}
            defaultValue="Autoimpulsa Web"
            render={({ field }) => (
              <div className="col-12 mb-4">
                <label
                  htmlFor="basic-url"
                  className="form-label text-dark bold"
                >
                  Lead Source
                </label>

                <select className="form-select border-dark py-2" {...field}>
                  <option value="-None-">-None-</option>
                  <option value="800">800</option>
                  <option defaultValue="Autoimpulsa&#x20;Web">
                    Autoimpulsa Web
                  </option>
                  <option value="Blaster">Blaster</option>
                  <option value="Carrusel&#x20;Arte">Carrusel Arte</option>
                  <option value="Chat&#x20;Bot">Chat Bot</option>
                  <option value="Clientes&#x20;Preferentes">
                    Clientes Preferentes
                  </option>
                  <option value="Club&#x20;Diamante">Club Diamante</option>
                  <option value="Estrategia&#x20;Digital">
                    Estrategia Digital
                  </option>
                  <option value="Facebook">Facebook</option>
                  <option value="Google&#x20;AdWords">Google AdWords</option>
                  <option value="Inmueble">Inmueble</option>
                  <option value="Instagram">Instagram</option>
                  <option value="Linkedin">Linkedin</option>
                  <option value="Prueba">Prueba</option>
                  <option value="Publicidad&#x20;Organica">
                    Publicidad Organica
                  </option>
                  <option value="Publicidad&#x20;Pagada">
                    Publicidad Pagada
                  </option>
                  <option value="Redes&#x20;Sociales">Redes Sociales</option>
                  <option value="SMS">SMS</option>
                  <option value="Subasta&#x20;Consiga">Subasta Consiga</option>
                  <option value="Subasta&#x20;Minutos&#x20;de&#x20;Oro">
                    Subasta Minutos de Oro
                  </option>
                  <option value="Subasta&#x20;Streaming">
                    Subasta Streaming
                  </option>
                  <option value="WebForm">WebForm</option>
                  <option value="Whatsapp">Whatsapp</option>
                  <option value="WhatsApp&#x20;-&#x20;Whatsapp&#x20;Montepio&#x20;Luz&#x20;Savi&oacute;n">
                    WhatsApp - Whatsapp Montepio Luz Savi&oacute;n
                  </option>
                  <option value="Whatsapp&#x20;Business">
                    Whatsapp Business
                  </option>
                  <option value="Youtube">Youtube</option>
                </select>
              </div>
            )}
          />
          {errors.Lead_Source && <p>Este campo es requerido</p>}
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
