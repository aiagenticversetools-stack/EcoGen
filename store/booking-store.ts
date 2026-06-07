'use client';

import { create } from 'zustand';

interface BookingState {
  step: number;
  selectedAccommodation: string;
  setStep: (step: number) => void;
  setSelectedAccommodation: (value: string) => void;
  reset: () => void;
}

export const useBookingStore = create<BookingState>((set) => ({
  step: 1,
  selectedAccommodation: '',
  setStep: (step) => set({ step }),
  setSelectedAccommodation: (value) => set({ selectedAccommodation: value }),
  reset: () => set({ step: 1, selectedAccommodation: '' })
}));
