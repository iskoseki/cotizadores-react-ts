import { useFormValues, visiblesType } from "./useFormValues";
import { HiddenInput, Input, Select } from "../components/Form/FormOptions";
import { ValuesOcultos } from "../types/formTypes";

export default function useFormFields() {
  const { visibles, ocultos, visiblesAuto, ocultosAuto } = useFormValues();
  const camposOcultos =
    ocultos &&
    ocultos.map((campo: ValuesOcultos) => ({
      component: HiddenInput,
      name: campo.nombre_del_campo,
      value: campo.valor_del_campo,
    }));
  const camposOcultosAutos =
    ocultosAuto &&
    ocultosAuto.map((campo: ValuesOcultos) => ({
      component: HiddenInput,
      name: campo.nombre_del_campo,
      value: campo.valor_del_campo,
    }));
  const camposVisibles = visibles.map((campo: visiblesType) => {
    let pattern;
    let maxLength;
    let errorMessage;
    const name = campo.nombre_del_campo;
    const label = campo.etiqueta_del_campo;
    const component = campo.tipo === "select" ? Select : Input;
    const tipo = campo.tipo;

    if (campo.tipo === "text") {
      pattern = /^[A-Za-z\sáéíóúÁÉÍÓÚ]+$/i;
      maxLength = 40;
      errorMessage =
        "Este campo es requerido. Solo se permiten letras en este campo.";
    } else if (campo.tipo === "tel") {
      pattern = /^[0-9]+$/i;
      maxLength = 10;
      errorMessage =
        "Este campo es requerido. Solo se permiten números en este campo.";
    } else if (campo.tipo === "mail") {
      pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      maxLength = 100;
      errorMessage =
        "Este campo es requerido. Por favor, ingresa un correo electrónico válido.";
    }

    return {
      component: component,
      name: name,
      label: label,
      type: tipo,
      pattern,
      maxLength,
      errorMessage,
      options: campo.opciones
        ? campo.opciones.map((opcion) => ({
            value: opcion.opcion,
            label: opcion.opcion,
          }))
        : undefined,
    };
  });
  const camposVisiblesAutos = visiblesAuto.map((campo: visiblesType) => {
    let pattern;
    let maxLength;
    let errorMessage;
    const name = campo.nombre_del_campo;
    const label = campo.etiqueta_del_campo;
    const component = campo.tipo === "select" ? Select : Input;
    const tipo = campo.tipo;

    if (campo.tipo === "text") {
      pattern = /^[A-Za-z\sáéíóúÁÉÍÓÚ]+$/i;
      maxLength = 40;
      errorMessage =
        "Este campo es requerido. Solo se permiten letras en este campo.";
    } else if (campo.tipo === "tel") {
      pattern = /^[0-9]+$/i;
      maxLength = 10;
      errorMessage =
        "Este campo es requerido. Solo se permiten números en este campo.";
    } else if (campo.tipo === "mail") {
      pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      maxLength = 100;
      errorMessage =
        "Este campo es requerido. Por favor, ingresa un correo electrónico válido.";
    }

    return {
      component: component,
      name: name,
      label: label,
      type: tipo,
      pattern,
      maxLength,
      errorMessage,
      options: campo.opciones
        ? campo.opciones.map((opcion) => ({
            value: opcion.opcion,
            label: opcion.opcion,
          }))
        : undefined,
    };
  });
  const formFields = [...camposOcultos, ...camposVisibles];
  const formAutoFields = [...camposOcultosAutos, ...camposVisiblesAutos];

  return { formFields, formAutoFields };
}
