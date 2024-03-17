import { create } from "zustand";
import { BranchWithCoordinates } from "./SelectedBranchContext";

type State = {
  branchesWithCoordinates: BranchWithCoordinates[] | null;
  actualLocation: {
    lat: number;
    lng: number;
  };
  closestBranch: BranchWithCoordinates | null;
  setBranchesWithCoordinates: (branch: BranchWithCoordinates[]) => void;
  setActualLocation: (branch: { lat: number; lng: number }) => void;
  setClosestBranch: (branch: BranchWithCoordinates | null) => void;
};

export const useClosestBranchStore = create<State>((set) => ({
  branchesWithCoordinates: [],
  setBranchesWithCoordinates: (branch) =>
    set({ branchesWithCoordinates: branch }),
  actualLocation: { lat: 19.444067450879974, lng: -99.15505391509416 },
  closestBranch: null,
  setClosestBranch: (branch) => set({ closestBranch: branch }),
  setActualLocation: (branch) => set({ actualLocation: branch }),
}));
