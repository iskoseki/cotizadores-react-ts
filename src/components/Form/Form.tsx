import React from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { FormValues } from "../../types/formTypes";
import { FieldProps } from "./FieldProps.type";
import Actions from "./Actions";

const Form = ({
  onSubmit,
  formFields,
}: {
  onSubmit: SubmitHandler<FormValues>;
  formFields: FieldProps[];
}) => {
  const methods = useForm<FormValues>();

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="row mb-4">
          {formFields.map((field, index) => {
            const Component = field.component;
            return <Component key={index} {...field} />;
          })}
        </div>
        <Actions />
      </form>
    </FormProvider>
  );
};

export default Form;
