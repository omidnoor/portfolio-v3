import { create } from "zustand";

export const useStore = create((set) => ({
  activeFrame: { name: "" },
  frameEvent: null,
  portal: null,
  htmlName: "",
  isActiveFrame: false,
  htmlClicked: false,
  isLetsTalk: false,
  hoverHtml: false,
  hoverThree: false,

  setHtmlName: (htmlName) => set((state) => ({ ...state, htmlName })),

  setActiveFrame: (frame) =>
    set((state) => {
      // console.log("Frame being set: ", frame);
      return { ...state, activeFrame: frame };
    }),
  setFrameEventName: (eventName) =>
    set((state) => ({ ...state, frameEventName: eventName })),

  setIsaActiveFrame: (isActive) => ({
    ...state,
    isActiveFrame: isActive,
  }),

  setHtmlClicked: (htmlClicked) => set((state) => ({ ...state, htmlClicked })),
  setIsLetsTalk: (isLetsTalk) => set((state) => ({ ...state, isLetsTalk })),
  setHoverHtml: (hoverHtml) => set((state) => ({ ...state, hoverHtml })),
  setHoverThree: (hoverThree) => set((state) => ({ ...state, hoverThree })),
}));
