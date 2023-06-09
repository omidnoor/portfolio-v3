import { create } from "zustand";

export const useStore = create((set) => ({
  activeFrame: { name: "" },
  frameEvent: null,
  portal: null,
  htmlName: "",
  isActiveFrame: false,
  htmlClicked: false,

  setHtmlName: (htmlName) => set((state) => ({ ...state, htmlName })),

  setActiveFrame: (frame) => set((state) => ({ ...state, activeFrame: frame })),

  setFrameEventName: (eventName) =>
    set((state) => ({ ...state, frameEventName: eventName })),

  setIsaActiveFrame: (isActive) => ({
    ...state,
    isActiveFrame: isActive,
  }),

  setHtmlClicked: (htmlClicked) => set((state) => ({ ...state, htmlClicked })),
}));
