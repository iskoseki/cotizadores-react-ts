export type FormValues = {
  Lead_Source?: string;
  xnQsjsdp: string;
  zc_gad: string;
  xmIwtLD: string;
  actionType: string;
  returnURL: string;
  First_Name: string;
  Last_Name: string;
  Mobile: string;
  Email: string;
  LEADCF10: string;
  LEADCF38: string;
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