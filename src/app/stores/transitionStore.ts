import { create } from "zustand";

type TransitionState = {
  isTransitionDone: boolean;
  setTransitionDone: (done: boolean) => void;
};

export const useTransitionStore = create<TransitionState>((set) => ({
  isTransitionDone: false,
  setTransitionDone: (done) => set({ isTransitionDone: done }),
}));

export const markTransitionStart = () =>
  useTransitionStore.getState().setTransitionDone(false);

export const markTransitionDone = () =>
  useTransitionStore.getState().setTransitionDone(true);
