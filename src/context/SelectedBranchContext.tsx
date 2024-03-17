import React from "react";
import { Sede } from "../types/branchTypes";

export type BranchWithCoordinates = Sede & { lat: number; lng: number };

export const SelectedBranchContext = React.createContext<{
  selectedBranch: BranchWithCoordinates | null;
  setSelectedBranch: React.Dispatch<
    React.SetStateAction<BranchWithCoordinates | null>
  >;
}>({
  selectedBranch: null,
  setSelectedBranch: () => {},
});
