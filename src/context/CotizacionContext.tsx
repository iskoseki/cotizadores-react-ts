import { create } from "zustand";
import {
  Cotizacion,
  CotizacionAuto,
  RenegociarAuto,
} from "../types/cotizacionTypes";
import { FormValues } from "../types/formTypes";

// Defino el estado inicial
const initialState: State = {
  CurrentStep: 1,
  CotizacionStatus: false,
  selectedQuoter: null,
  Monto: 0,
  Plazo: 12,
  PlazoQuincenal: 0,
  datosCotizador: {
    alhajas: {
      peso: 0,
      material: "",
    },
    diamantes: {
      size: 0,
      quantity: 0,
      clarity: "",
      color: "",
      cut: "",
    },
    relojes: {
      brand: "",
      price: 0,
    },
  },
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
  showForm: false,
  formulario: {
    xnQsjsdp: "",
    zc_gad: "",
    xmIwtLD: "",
    actionType: "",
    returnURL: "",
    "First Name": "",
    "Last Name": "",
    Mobile: "",
    Email: "",
    LEADCF10: "",
    LEADCF38: "",
  },
  seleccion: [],
};

type DatosCotizador = {
  alhajas: {
    peso: number;
    material: string;
  };
  diamantes: {
    size: number;
    quantity: number;
    clarity: string;
    color: string;
    cut: string;
  };
  relojes: {
    brand: string;
    price: number;
  };
};

// Defino el tipo de estado y acciones
export type State = {
  CurrentStep?: number;
  CotizacionStatus?: boolean;
  selectedQuoter?: string | null;
  datosCotizador: DatosCotizador;
  Monto?: number;
  Plazo?: number;
  PlazoQuincenal?: number;
  cotizacion: Cotizacion[];
  cotizacionAutomotor: CotizacionAuto;
  RenegociarAuto?: RenegociarAuto;
  showForm?: boolean;
  formulario: FormValues;
  seleccion: string[];
};

type Store = State & {
  setCurrentStep: (CurrentStep: number) => void;
  SetCotizacionStatus: (CotizacionStatus: boolean) => void;
  setSelectedQuoter: (selectedQuoter: string | null) => void;
  guardarDatosAlhajas: (peso: number, material: string) => void;
  guardarDatosDiamantes: (
    size: number,
    quantity: number,
    clarity: string,
    color: string,
    cut: string
  ) => void;
  guardarDatosRelojes: (brand: string, price: number) => void;
  guardarMonto: (Monto: number) => void;
  guardarPlazo: (Plazo: number) => void;
  guardarPlazoQuincenal: (PlazoQuincenal: number) => void;
  guardarCotizacion: (cotizacion: Cotizacion[]) => void;
  guardarCotizacionAutos: (cotizacionAutomotor: CotizacionAuto) => void;
  guardarRenegociarAutos: (RenegociarAuto: RenegociarAuto) => void;
  setShowForm: (showForm: boolean) => void;
  guardarFormulario: (formulario: FormValues) => void;
  agregarSeleccion: (seleccion: string) => void;
  reiniciarEstado: () => void;
};

export const useStore = create<Store>((set) => ({
  ...initialState,
  setCurrentStep: (CurrentStep) => set(() => ({ CurrentStep })),
  SetCotizacionStatus: (CotizacionStatus) => set(() => ({ CotizacionStatus })),
  setSelectedQuoter: (selectedQuoter) => set({ selectedQuoter }),
  guardarDatosAlhajas: (peso, material) =>
    set((state) => ({
      datosCotizador: {
        ...state.datosCotizador,
        alhajas: {
          peso,
          material,
        },
      },
    })),
  guardarDatosDiamantes: (
    size: number,
    quantity: number,
    clarity: string,
    color: string,
    cut: string
  ) =>
    set((state) => ({
      datosCotizador: {
        ...state.datosCotizador,
        diamantes: {
          size,
          quantity,
          clarity,
          color,
          cut,
        },
      },
    })),
  guardarDatosRelojes: (brand: string, price: number) =>
    set((state) => ({
      datosCotizador: {
        ...state.datosCotizador,
        relojes: {
          brand,
          price,
        },
      },
    })),
  guardarCotizacion: (cotizacion) => set(() => ({ cotizacion })),
  guardarCotizacionAutos: (cotizacionAutomotor) =>
    set(() => ({ cotizacionAutomotor })),
  guardarMonto: (Monto) => set(() => ({ Monto })),
  guardarPlazo: (Plazo) => set(() => ({ Plazo })),
  guardarPlazoQuincenal: (PlazoQuincenal) => set(() => ({ PlazoQuincenal })),
  guardarRenegociarAutos: (RenegociarAuto) => set(() => ({ RenegociarAuto })),
  guardarFormulario: (formulario) => set(() => ({ formulario })),
  setShowForm: (showForm) => set(() => ({ showForm })),
  agregarSeleccion: (seleccion) =>
    set((state) => ({ seleccion: [...state.seleccion, seleccion] })),
  reiniciarEstado: () => set(() => ({ ...initialState })),
}));
