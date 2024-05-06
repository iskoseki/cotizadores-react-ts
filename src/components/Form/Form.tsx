import React from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import OutlineButton from "../OutlineButton/OutlineButton";
import { useStore } from "../../context/CotizacionContext";
import { FormValues } from "../../types/formTypes";
import { FieldProps } from "./FieldProps";

const Form = ({
  onSubmit,
  formName,
  formFields,
}: {
  onSubmit: SubmitHandler<FormValues>;
  formName: string;
  formFields: FieldProps[];
}) => {
  const methods = useForm<FormValues>();
  const { setShowForm } = useStore();

  return (
    <FormProvider {...methods}>
      <form
        id="webform"
        name={formName}
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <div className="row mb-4">
          {formFields.map((field, index) => {
            const Component = field.component;
            return <Component key={index} {...field} />;
          })}
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
