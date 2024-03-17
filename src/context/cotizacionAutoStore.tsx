import { create } from "zustand";

interface CotizacionState {
  year: string;
  brand: string;
  models: string;
  version: string;
  productType: string;
  // Add any other state variables you need
  setYear: (newYear: string) => void;
  setBrand: (newBrand: string) => void;
  setModels: (newModels: string) => void;
  setVersion: (newVersion: string) => void;
  setProductType: (newProductType: string) => void;
  // Add setters for other state variables
}

const initialState: CotizacionState = {
  year: "",
  brand: "",
  models: "",
  version: "",
  productType: "",
  // Add any other state variables with their initial values
  setYear: () => {},
  setBrand: () => {},
  setModels: () => {},
  setVersion: () => {},
  setProductType: () => {},
};

const useCotizacionStore = create<CotizacionState>((set) => ({
  ...initialState,
  setYear: (newYear) => set((state) => ({ ...state, year: newYear })),
  setBrand: (newBrand) => set((state) => ({ ...state, brand: newBrand })),
  setModels: (newModels) => set((state) => ({ ...state, models: newModels })),
  setVersion: (newVersion) =>
    set((state) => ({ ...state, version: newVersion })),
  setProductType: (newProductType) =>
    set((state) => ({ ...state, productType: newProductType })),
  // Add setters for other state variables
}));

export default useCotizacionStore;
