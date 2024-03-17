import { create } from "zustand";
import {
  Cotizacion,
  CotizacionAuto,
  RenegociarAuto,
} from "../types/cotizacionTypes";
import { Sede } from "../types/branchTypes";
import { FormValues } from "../types/formTypes";

// Defino el estado inicial
const initialState: State = {
  CurrentStep: 1,
  CotizacionStatus: false,
  selectedQuoter: null,
  Monto: 0,
  Plazo: 12,
  PlazoQuincenal: 0,
  cotizacion: [
    {
      PrestamoMaximo: 0,
      PrestamoMinimo: 0,
      Producto: "",
    },
  ],
  cotizacionAutomotor: {
    InstalacionGPS: 0,
    Prestamo: 0,
    Avaluo: 0,
  },
  RenegociarAuto: {
    Monto: 0,
    Plazo: 0,
    PlazoQuincenal: 0,
  },

  sucursal: {
    coordinates: { lat: 0, lng: 0 },
    Estatus: "",
    Ramos: "",
    TipoSucursal: "",
    Correo: "",
    HorarioD: "",
    HorarioS: "",
    HorarioLV: "",
    Telefono2: "",
    Telefono1: "",
    Calle: "",
    Numero: "",
    Colonia: "",
    Municipio: "",
    Estado: "",
    CP: "",
    NumZona: "",
    Nombre: "",
    NumSucursal: "",
  },
  showForm: false,
  formulario: {
    xnQsjsdp: "",
    zc_gad: "",
    xmIwtLD: "",
    actionType: "",
    returnURL: "",
    First_Name: "",
    Last_Name: "",
    Mobile: "",
    Email: "",
    LEADCF10: "",
    LEADCF38: "",
  },
  seleccion: [],
};

// Defino el tipo de estado y acciones
export type State = {
  CurrentStep?: number;
  CotizacionStatus?: boolean;
  selectedQuoter?: string | null;
  Monto?: number;
  Plazo?: number;
  PlazoQuincenal?: number;
  cotizacion: Cotizacion[];
  cotizacionAutomotor: CotizacionAuto;
  RenegociarAuto?: RenegociarAuto;
  sucursal: Sede;
  showForm?: boolean;
  formulario: FormValues;
  seleccion: string[];
};

type Store = State & {
  setCurrentStep: (CurrentStep: number) => void;
  SetCotizacionStatus: (CotizacionStatus: boolean) => void;
  setSelectedQuoter: (selectedQuoter: string | null) => void;
  guardarMonto: (Monto: number) => void;
  guardarPlazo: (Monto: number) => void;
  guardarPlazoQuincenal: (Monto: number) => void;
  guardarCotizacion: (cotizacion: Cotizacion[]) => void;
  guardarCotizacionAutos: (cotizacionAutomotor: CotizacionAuto) => void;
  guardarRenegociarAutos: (RenegociarAutos: RenegociarAuto) => void;
  seleccionarSucursal: (sucursal: Sede) => void;
  setShowForm: (showForm: boolean) => void;
  guardarFormulario: (formulario: FormValues) => void;
  agregarSeleccion: (seleccion: string) => void;
  reiniciarEstado: () => void;
};

// Creo el store
export const useStore = create<Store>((set) => ({
  ...initialState,
  setCurrentStep: (CurrentStep) => set(() => ({ CurrentStep })),
  SetCotizacionStatus: (CotizacionStatus) => set(() => ({ CotizacionStatus })),
  setSelectedQuoter: (selectedQuoter) => set({ selectedQuoter }),
  guardarCotizacion: (cotizacion) => set(() => ({ cotizacion })),
  guardarCotizacionAutos: (cotizacionAutomotor) =>
    set(() => ({ cotizacionAutomotor })),
  guardarMonto: (Monto) => set(() => ({ Monto })),
  guardarPlazo: (Plazo) => set(() => ({ Plazo })),
  guardarPlazoQuincenal: (PlazoQuincenal) => set(() => ({ PlazoQuincenal })),
  guardarRenegociarAutos: (RenegociarAuto) => set(() => ({ RenegociarAuto })),
  seleccionarSucursal: (sucursal) => set(() => ({ sucursal })),
  guardarFormulario: (formulario) => set(() => ({ formulario })),
  setShowForm: (showForm) => set(() => ({ showForm })),
  agregarSeleccion: (seleccion) =>
    set((state) => ({ seleccion: [...state.seleccion, seleccion] })),
  reiniciarEstado: () => set(() => ({ ...initialState })),
}));
