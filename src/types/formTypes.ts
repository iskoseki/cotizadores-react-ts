export type FormValues = {
  Lead_Source?: string;
  xnQsjsdp: string;
  zc_gad: string;
  xmIwtLD: string;
  actionType: string;
  returnURL: string;
  "First Name": string;
  "Last Name": string;
  Mobile: string;
  Email: string;
  LEADCF10?: string;
  LEADCF16?: string;
  LEADCF47?: string;
  LEADCF38?: string;
  LEADCF12?: string | null;
  LEADCF44?: string;
  LEADCF39?: string;
  LEADCF41?: string;
  LEADCF40?: string;
  LEADCF42?: string;
  LEADCF43?: string;
};
 export interface SetForm {
    titulo_ingresa_tus_datos: string;
    texto_ingresa_tus_datos: string;
  }

export type FieldProps = {
  component: React.FC;
  name: string;
  label?: string;
  type?: string;
  pattern?: RegExp;
  maxLength?: number;
  errorMessage?: string;
  value?: string;
}
enum OptionType {
  text = "text",
  tel = "tel",
  mail = "mail",
  Select = "select"
}
export type ValuesVisibles = {
  etiqueta_del_campo: string,
        nombre_del_campo: string,
        tipo: OptionType,
        opciones: []
        
}

export type ValuesOcultos = {
  nombre_del_campo: string,
      valor_del_campo:string
}