import { FieldProps, HeaderFormName } from "./FieldProps";
import { HiddenInput } from "./FormOptions/HiddenInput";
import { Input } from "./FormOptions/Input";
import { Select } from "./FormOptions/Select";

export const headerFormName: HeaderFormName = {
  autoFormName: "WebToLeads5591635000004669005",
  quoterFormName: "WebToLeads5591635000004669139",
};

export const formFields: FieldProps[] = [
  {
    component: HiddenInput,
    name: "xnQsjsdp",
    value: "a0270331bcd71ecdc72c172aaf5672c133af267fe05ac4389480de9c1788e3e4",
  },
  {
    component: HiddenInput,
    name: "zc_gad",
    value: "",
  },
  {
    component: HiddenInput,
    name: "xmIwtLD",
    value: "05e8c4fa2d2cef1a1e811e05d582532a3b4eb324848251a500d108d7d21c573e",
  },
  {
    component: HiddenInput,
    name: "actionType",
    value: "TGVhZHM=",
  },
  {
    component: HiddenInput,
    name: "returnURL",
    value: "https&#x3a;&#x2f;&#x2f;www.montepio.org.mx",
  },
  {
    component: Input,
    name: "First_Name",
    label: "Nombres",
    type: "text",
    pattern: /^[A-Za-z\sáéíóúÁÉÍÓÚ]+$/i,
    maxLength: 40,
    errorMessage:
      "Este campo es requerido. Solo se permiten letras en este campo.",
  },
  {
    component: Input,
    name: "Last_Name",
    label: "Apellido",
    type: "text",
    pattern: /^[A-Za-z\sáéíóúÁÉÍÓÚ]+$/i,
    maxLength: 40,
    errorMessage:
      "Este campo es requerido. Solo se permiten letras en este campo.",
  },
  {
    component: Input,
    name: "Mobile",
    label: "Teléfono celular",
    type: "tel",
    pattern: /^[0-9]+$/i,
    maxLength: 10,
    errorMessage:
      "Este campo es requerido. Solo se permiten números en este campo.",
  },
  {
    component: Input,
    name: "Email",
    label: "Correo electrónico",
    type: "email",
    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    maxLength: 100,
    errorMessage:
      "Este campo es requerido. Por favor, ingresa un correo electrónico válido.",
  },
  {
    component: Select,
    name: "LEADCF10",
    label: "Estado",
    options: [
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
    ],
    errorMessage: "Este campo es requerido.",
  },
  {
    component: Select,
    name: "LEADCF38",
    label: "Estado",
    options: [
      { value: "-None-", label: "-Seleccione-" },
      { value: "WhatsApp", label: "WhatsApp" },
      { value: "Correo&#x20;electr&oacute;nico", label: "Correo electrónico" },
      { value: "Llamada&#x20;telef&oacute;nica", label: "Llamada telefonica" },
    ],
    errorMessage: "Este campo es requerido.",
  },
];
export const formAutoFields: FieldProps[] = [
  {
    component: HiddenInput,
    name: "xnQsjsdp",
    value: "c203e7548d352765c8d9a0dec800d272adcf927bb755cebc7d42cc62c3c8906c",
  },
  {
    component: HiddenInput,
    name: "zc_gad",
    value: "",
  },
  {
    component: HiddenInput,
    name: "xmIwtLD",
    value:
      "62ac2f6529547d49b685501e0f5dedc944f21380662a11d8a696b09b992450a62e9e713750ed9607b9953f99984a3278",
  },
  {
    component: HiddenInput,
    name: "actionType",
    value: "TGVhZHM=",
  },
  {
    component: HiddenInput,
    name: "returnURL",
    value: "https&#x3a;&#x2f;&#x2f;prestamoportuauto.montepio.org.mx&#x2f;",
  },
  {
    component: Input,
    name: "First_Name",
    label: "Nombres",
    type: "text",
    pattern: /^[A-Za-z\sáéíóúÁÉÍÓÚ]+$/i,
    maxLength: 40,
    errorMessage:
      "Este campo es requerido. Solo se permiten letras en este campo.",
  },
  {
    component: Input,
    name: "Last_Name",
    label: "Apellido",
    type: "text",
    pattern: /^[A-Za-z\sáéíóúÁÉÍÓÚ]+$/i,
    maxLength: 40,
    errorMessage:
      "Este campo es requerido. Solo se permiten letras en este campo.",
  },
  {
    component: Input,
    name: "Mobile",
    label: "Teléfono celular",
    type: "tel",
    pattern: /^[0-9]+$/i,
    maxLength: 10,
    errorMessage:
      "Este campo es requerido. Solo se permiten números en este campo.",
  },
  {
    component: Input,
    name: "Email",
    label: "Correo electrónico",
    type: "email",
    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    maxLength: 100,
    errorMessage:
      "Este campo es requerido. Por favor, ingresa un correo electrónico válido.",
  },
  {
    component: Select,
    name: "LEADCF10",
    label: "Estado",
    options: [
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
    ],
    errorMessage: "Este campo es requerido.",
  },
  {
    component: Select,
    name: "LEADCF38",
    label: "Estado",
    options: [
      { value: "-None-", label: "-Seleccione-" },
      { value: "WhatsApp", label: "WhatsApp" },
      { value: "Correo&#x20;electr&oacute;nico", label: "Correo electrónico" },
      { value: "Llamada&#x20;telef&oacute;nica", label: "Llamada telefonica" },
    ],
    errorMessage: "Este campo es requerido.",
  },
];

/**
 * 
 * 
export const formFields: FieldProps[] = [
  {
    component: HiddenInput,
    name: "xnQsjsdp",
    value: "a0270331bcd71ecdc72c172aaf5672c133af267fe05ac4389480de9c1788e3e4",
  },
  {
    component: HiddenInput,
    name: "zc_gad",
    value: "",
  },
  {
    component: HiddenInput,
    name: "xmIwtLD",
    value: "05e8c4fa2d2cef1a1e811e05d582532a3b4eb324848251a500d108d7d21c573e",
  },
  {
    component: HiddenInput,
    name: "actionType",
    value: "TGVhZHM=",
  },
  {
    component: HiddenInput,
    name: "returnURL",
    value: "https&#x3a;&#x2f;&#x2f;www.montepio.org.mx",
  },
  {
    component: Input,
    name: "First_Name",
    label: "Nombres",
    type: "text",
    pattern: /^[A-Za-z\sáéíóúÁÉÍÓÚ]+$/i,
    maxLength: 40,
    errorMessage:
      "Este campo es requerido. Solo se permiten letras en este campo.",
  },
  {
    component: Input,
    name: "Last_Name",
    label: "Apellido",
    type: "text",
    pattern: /^[A-Za-z\sáéíóúÁÉÍÓÚ]+$/i,
    maxLength: 40,
    errorMessage:
      "Este campo es requerido. Solo se permiten letras en este campo.",
  },
  {
    component: Input,
    name: "Mobile",
    label: "Teléfono celular",
    type: "tel",
    pattern: /^[0-9]+$/i,
    maxLength: 10,
    errorMessage:
      "Este campo es requerido. Solo se permiten números en este campo.",
  },
  {
    component: Input,
    name: "Email",
    label: "Correo electrónico",
    type: "email",
    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    maxLength: 100,
    errorMessage:
      "Este campo es requerido. Por favor, ingresa un correo electrónico válido.",
  },
  {
    component: Select,
    name: "LEADCF10",
    label: "Estado",
    options: [
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
    ],
    errorMessage: "Este campo es requerido.",
  },
  {
    component: Select,
    name: "LEADCF38",
    label: "Estado",
    options: [
      { value: "-None-", label: "-Seleccione-" },
      { value: "WhatsApp", label: "WhatsApp" },
      { value: "Correo&#x20;electr&oacute;nico", label: "Correo electrónico" },
      { value: "Llamada&#x20;telef&oacute;nica", label: "Llamada telefonica" },
    ],
    errorMessage: "Este campo es requerido.",
  },
];
export const formAutoFields: FieldProps[] = [
  {
    component: HiddenInput,
    name: "xnQsjsdp",
    value: "c203e7548d352765c8d9a0dec800d272adcf927bb755cebc7d42cc62c3c8906c",
  },
  {
    component: HiddenInput,
    name: "zc_gad",
    value: "",
  },
  {
    component: HiddenInput,
    name: "xmIwtLD",
    value:
      "62ac2f6529547d49b685501e0f5dedc944f21380662a11d8a696b09b992450a62e9e713750ed9607b9953f99984a3278",
  },
  {
    component: HiddenInput,
    name: "actionType",
    value: "TGVhZHM=",
  },
  {
    component: HiddenInput,
    name: "returnURL",
    value: "https&#x3a;&#x2f;&#x2f;prestamoportuauto.montepio.org.mx&#x2f;",
  },
  {
    component: Input,
    name: "First_Name",
    label: "Nombres",
    type: "text",
    pattern: /^[A-Za-z\sáéíóúÁÉÍÓÚ]+$/i,
    maxLength: 40,
    errorMessage:
      "Este campo es requerido. Solo se permiten letras en este campo.",
  },
  {
    component: Input,
    name: "Last_Name",
    label: "Apellido",
    type: "text",
    pattern: /^[A-Za-z\sáéíóúÁÉÍÓÚ]+$/i,
    maxLength: 40,
    errorMessage:
      "Este campo es requerido. Solo se permiten letras en este campo.",
  },
  {
    component: Input,
    name: "Mobile",
    label: "Teléfono celular",
    type: "tel",
    pattern: /^[0-9]+$/i,
    maxLength: 10,
    errorMessage:
      "Este campo es requerido. Solo se permiten números en este campo.",
  },
  {
    component: Input,
    name: "Email",
    label: "Correo electrónico",
    type: "email",
    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    maxLength: 100,
    errorMessage:
      "Este campo es requerido. Por favor, ingresa un correo electrónico válido.",
  },
  {
    component: Select,
    name: "LEADCF10",
    label: "Estado",
    options: [
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
    ],
    errorMessage: "Este campo es requerido.",
  },
  {
    component: Select,
    name: "LEADCF38",
    label: "Estado",
    options: [
      { value: "-None-", label: "-Seleccione-" },
      { value: "WhatsApp", label: "WhatsApp" },
      { value: "Correo&#x20;electr&oacute;nico", label: "Correo electrónico" },
      { value: "Llamada&#x20;telef&oacute;nica", label: "Llamada telefonica" },
    ],
    errorMessage: "Este campo es requerido.",
  },
];

 */
