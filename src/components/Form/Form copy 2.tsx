import React from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { Input } from "./FormOptions/Input";
import { Select } from "./FormOptions/Select";
import { HiddenInput } from "./FormOptions/HiddenInput";
import OutlineButton from "../OutlineButton/OutlineButton";
import { useStore } from "../../context/CotizacionContext";
import { FormValues } from "../../types/formTypes";

const Form = ({ onSubmit }: { onSubmit: SubmitHandler<FormValues> }) => {
  const methods = useForm<FormValues>();
  const { setShowForm } = useStore();

  return (
    <FormProvider {...methods}>
      <form
        id="webform"
        name="WebToLeads5591635000004669139"
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <div id="hiddenInputs">
          <HiddenInput
            name="xnQsjsdp"
            value="a0270331bcd71ecdc72c172aaf5672c133af267fe05ac4389480de9c1788e3e4"
          />
          <HiddenInput name="zc_gad" value="" />
          <HiddenInput
            name="xmIwtLD"
            value="05e8c4fa2d2cef1a1e811e05d582532a3b4eb324848251a500d108d7d21c573e"
          />
          <HiddenInput name="actionType" value="TGVhZHM=" />
          <HiddenInput
            name="returnURL"
            value="https&#x3a;&#x2f;&#x2f;www.montepio.org.mx"
          />
        </div>

        <div className="row mb-4">
          <Input
            name="First_Name"
            label="Nombres"
            type="text"
            pattern={/^[A-Za-z\sáéíóúÁÉÍÓÚ]+$/i}
            maxLength={40}
            errorMessage="Este campo es requerido. Solo se permiten letras en este campo."
          />
          <Input
            name="Last_Name"
            label="Apellido"
            type="text"
            pattern={/^[A-Za-z\sáéíóúÁÉÍÓÚ]+$/i}
            maxLength={40}
            errorMessage="Este campo es requerido. Solo se permiten letras en este campo."
          />
          <Input
            name="Mobile"
            label="Teléfono celular"
            type="tel"
            pattern={/^[0-9]+$/i}
            maxLength={10}
            errorMessage="Este campo es requerido. Solo se permiten números en este campo."
          />
          <Input
            name="Email"
            label="Correo electrónico"
            type="email"
            pattern={/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i}
            maxLength={100}
            errorMessage="Este campo es requerido. Por favor, ingresa un correo electrónico válido."
          />
          <Select
            name="LEADCF10"
            label="Estado"
            options={[
              { value: "-None-", label: "-Seleccione-" },
              { value: "Ciudad de México", label: "Ciudad de México" },
              { value: "Guanajuato", label: "Guanajuato" },
              { value: "Guerrero", label: "Guerrero" },
              { value: "Estado de México", label: "Estado de México" },
              { value: "Michoacán", label: "Michoacán" },
              { value: "Morelos", label: "Morelos" },
              { value: "Nuevo León", label: "Nuevo León" },
              { value: "Puebla", label: "Puebla" },
              { value: "Querétaro", label: "Querétaro" },
              { value: "Quintana Roo", label: "Quintana Roo" },
              { value: "Tlaxcala", label: "Tlaxcala" },
              { value: "Yucatán", label: "Yucatán" },
            ]}
            errorMessage="Este campo es requerido."
          />
          <Select
            name="LEADCF38"
            label="Estado"
            options={[
              { value: "-None-", label: "-Seleccione-" },
              { value: "WhatsApp", label: "WhatsApp" },
              {
                value: "Correo&#x20;electr&oacute;nico",
                label: "Correo electrónico",
              },
              {
                value: "Llamada&#x20;telef&oacute;nica",
                label: "Llamada telefonica",
              },
            ]}
            errorMessage="Este campo es requerido."
          />
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
    </FormProvider>
  );
};

export default Form;
