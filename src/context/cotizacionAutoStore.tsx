import { create } from "zustand";

interface CotizacionState {
  year: string;
  brand: string;
  brandText: string;
  models: string;
  modelsText: string;
  version: string;
  versionText: string;
  productType: string;
  productClass?: string;
  product?: string;

  setYear: (newYear: string) => void;
  setBrand: (newBrand: string) => void;
  setBrandText: (newBrandText: string) => void;
  setModels: (newModels: string) => void;
  setModelsText: (newModelsText: string) => void;
  setVersion: (newVersion: string) => void;
  setVersionText: (newVersionText: string) => void;
  setProductType: (newProductType: string) => void;
  setProductClass: (newProductClass: string) => void;
  setProduct: (newProduct: string) => void;
}

const initialState: CotizacionState = {
  year: "",
  brand: "",
  brandText: "",
  models: "",
  modelsText: "",
  version: "",
  versionText: "",
  productType: "",
  productClass: "",
  product: "",
  setYear: () => {},
  setBrand: () => {},
  setBrandText: () => {},
  setModels: () => {},
  setModelsText: () => {},
  setVersion: () => {},
  setVersionText: () => {},
  setProductType: () => {},
  setProductClass: () => {},
  setProduct: () => {},
};

const useCotizacionStore = create<CotizacionState>((set) => ({
  ...initialState,
  setYear: (newYear) => set((state) => ({ ...state, year: newYear })),
  setBrand: (newBrand) => set((state) => ({ ...state, brand: newBrand })),
  setBrandText: (newBrandText) =>
    set((state) => ({ ...state, brandText: newBrandText })),
  setModels: (newModels) => set((state) => ({ ...state, models: newModels })),
  setModelsText: (newModelsText) =>
    set((state) => ({ ...state, modelsText: newModelsText })),

  setVersion: (newVersion) =>
    set((state) => ({ ...state, version: newVersion })),
  setVersionText: (newVersionText) =>
    set((state) => ({ ...state, versionText: newVersionText })),
  setProductType: (newProductType) =>
    set((state) => ({ ...state, productType: newProductType })),
  setProductClass: (newProductClass) =>
    set((state) => ({ ...state, productClass: newProductClass })),
  setProduct: (newProduct) =>
    set((state) => ({ ...state, product: newProduct })),
  // Add setters for other state variables
}));

export default useCotizacionStore;
