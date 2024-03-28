import { Dispatch, SetStateAction } from "react";
import { CotizacionAuto, incentivos } from "../../types/cotizacionTypes";
import { acordeon } from "../Requirements";

export interface QuoterAutoProps {

  setCotizacionCompletada: Dispatch<SetStateAction<boolean>>;
  handleCotizacionCompleta?: (
    resultadoCotizacion: CotizacionAuto,
    year: string
  ) => void;
  texto_estimacion_de_prestamo?: string;
  
  mostrar_datos_cotizador?: boolean;
  titulo_datos_cotizador?: string;
  titulo_estimacion_de_prestamo?: string;
  texto_datos_cotizador?: string | TrustedHTML | undefined ;
  campos_datos_a_cotizar?: {
    nombre_del_campo: string;
    tipo_de_campo: string;
    tamano_de_campo: string;
    seleccion: boolean;
    opciones: [{ opcion: string }];
  }[];
  incentivos?: incentivos[];
  acordeon?: acordeon[];
  children: React.ReactNode
}