import HomePage from "@/components/pageComponents/Home";
import AboutMe from "@/components/pageComponents/AboutMe";
import { create } from "zustand";

export const useStore = create((set) => ({
  activeFrame: null,

  pages: {
    Home: HomePage,
    About: AboutMe,
  },

  setActiveFrame: (frameId) =>
    set((state) => ({ ...state, activeFrame: frameId })),
}));
