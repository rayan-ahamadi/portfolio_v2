import { create } from "zustand";

type TransitionState = {
  isTransitionDone: boolean;
  setTransitionDone: (done: boolean) => void;
  isOverlapDone?: boolean;
  setOverlapDone?: (done: boolean) => void;
};

export const useTransitionStore = create<TransitionState>((set) => ({
  isTransitionDone: false,
  setTransitionDone: (done) => set({ isTransitionDone: done }),
  isOverlapDone: false,
  setOverlapDone: (done) => set({ isOverlapDone: done }),
}));

export const markTransitionStart = () =>
  useTransitionStore.getState().setTransitionDone(false);

export const markTransitionDone = () =>
  useTransitionStore.getState().setTransitionDone(true);

export const markOverlapDone = () =>
  useTransitionStore.getState().setOverlapDone?.(true);
