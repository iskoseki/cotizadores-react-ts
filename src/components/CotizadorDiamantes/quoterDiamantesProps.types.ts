import { Dispatch, SetStateAction } from "react";
import { Cotizacion } from "../../types/cotizacionTypes";

export interface QuoterDiamantesProps {
  setCotizacionCompletada: Dispatch<SetStateAction<boolean>>;
  handleCotizacionCompleta: (resultadoCotizacion: Cotizacion[]) => void;
  mostrar_datos_diamantes?: true;
 titulo_datos_cotizador?: string;
 texto_datos_cotizador?: string;
  cortes?: { imagen: string; nombre: string }[];
  tonos?: { imagen: string; nombre: string }[];
  claridad?: { imagen: string; nombre: string }[];
  campos_datos_a_cotizar?: {
    nombre_del_campo: string;
    tipo_de_campo: number;
    tamano_de_campo: string;
    seleccion: boolean;
    opciones: boolean;
  }[];
}