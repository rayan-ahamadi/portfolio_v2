import { create } from "zustand";

type TransitionState = {
  isTransitionDone: boolean;
  setTransitionDone: (done: boolean) => void;
  isFirstOverlapDone?: boolean;
  setFirstOverlapDone?: (done: boolean) => void;
  isSecondOverlapDone?: boolean;
  setSecondOverlapDone?: (done: boolean) => void;
};

export const useTransitionStore = create<TransitionState>((set) => ({
  isTransitionDone: false,
  setTransitionDone: (done) => set({ isTransitionDone: done }),
  isFirstOverlapDone: false,
  setFirstOverlapDone: (done) => set({ isFirstOverlapDone: done }),
  isSecondOverlapDone: false,
  setSecondOverlapDone: (done) => set({ isSecondOverlapDone: done }),
}));

export const markTransitionStart = () =>
  useTransitionStore.getState().setTransitionDone(false);

export const markTransitionDone = () =>
  useTransitionStore.getState().setTransitionDone(true);

export const markFirstOverlapDone = () =>
  useTransitionStore.getState().setFirstOverlapDone?.(true);

export const markSecondOverlapDone = () =>
  useTransitionStore.getState().setSecondOverlapDone?.(true);
