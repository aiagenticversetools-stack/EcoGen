'use client';

import { create } from 'zustand';

interface UiState {
  isMobileMenuOpen: boolean;
  prefersReducedMotion: boolean;
  openMobileMenu: () => void;
  closeMobileMenu: () => void;
  setPrefersReducedMotion: (value: boolean) => void;
}

export const useUiStore = create<UiState>((set) => ({
  isMobileMenuOpen: false,
  prefersReducedMotion: false,
  openMobileMenu: () => set({ isMobileMenuOpen: true }),
  closeMobileMenu: () => set({ isMobileMenuOpen: false }),
  setPrefersReducedMotion: (value) => set({ prefersReducedMotion: value })
}));
