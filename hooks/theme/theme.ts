// themeStore.ts

import { create } from 'zustand';
import {  ThemeStore } from './types';

export const useThemeStore = create<ThemeStore>((set) => ({
    theme: 'light',
    toggleTheme: () => set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
}));
