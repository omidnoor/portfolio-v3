import { create } from "zustand";

export const useStore = create((set) => ({
  activeFrame: { name: "" },
  frameEvent: null,
  // frameUuids: [],
  // frameUuid: null,
  setActiveFrame: (frame) => set((state) => ({ ...state, activeFrame: frame })),

  setFrameEventName: (eventName) =>
    set((state) => ({ ...state, frameEventName: eventName })),
  // addFrameUuid: (
  //   uuid, // Function to add a UUID to frameUuids array
  // ) => set((state) => ({ ...state, frameUuids: [...state.frameUuids, uuid] })),
  // setFrameUuid: (uuid) => set((state) => ({ ...state, frameUuid: uuid })),
}));
