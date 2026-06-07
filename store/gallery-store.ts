'use client';

import { create } from 'zustand';

interface GalleryState {
  activeIndex: number | null;
  setActiveIndex: (index: number | null) => void;
  next: (length: number) => void;
  previous: (length: number) => void;
}

export const useGalleryStore = create<GalleryState>((set) => ({
  activeIndex: null,
  setActiveIndex: (index) => set({ activeIndex: index }),
  next: (length) =>
    set((state) => ({
      activeIndex: state.activeIndex === null ? 0 : (state.activeIndex + 1) % length
    })),
  previous: (length) =>
    set((state) => ({
      activeIndex:
        state.activeIndex === null ? length - 1 : (state.activeIndex - 1 + length) % length
    }))
}));
