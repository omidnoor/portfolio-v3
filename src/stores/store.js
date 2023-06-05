import { create } from "zustand";

export const useStore = create((set) => ({
  activeFrame: null,
  frameEvent: null,
  setActiveFrame: (frameId) =>
    set((state) => ({ ...state, activeFrame: frameId })),

  setFrameEventName: (eventName) =>
    set((state) => ({ ...state, frameEventName: eventName })),
}));
