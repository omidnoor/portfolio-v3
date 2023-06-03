import { create } from "zustand";

export const useStore = create((set) => ({
  activeFrame: null,
  setActiveFrame: (frameId) =>
    set((state) => ({ ...state, activeFrame: frameId })),
}));
