
export interface Enlace {
  title: string;
  url: string;
  target: string;
}

export interface Cotizador {
  titulo: string;
  enlace: Enlace;
  activo: boolean;
}

export interface Paso {
  titulo: string;
  activo: boolean;
}

export interface Response {
  mostrar_pasos: boolean;
  pasos: Paso[];
  mostrar_cotizador: boolean;
  cotizador: Cotizador[];
  titulo_selección_de_sucursal: string;
  
}

export interface QuaterSelectorProps {
  selectedQuoter?: string | null;
  setSelectedQuoter: (selectedQuoter: string | null) => void;
  initialSelectedQuoter?: string | null;
}
