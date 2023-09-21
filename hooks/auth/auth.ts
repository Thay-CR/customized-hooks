import { create } from 'zustand';
import { AuthStore } from './types';

export const useAuth = create<AuthStore>((set) => ({
    user: null,
    isAuthenticated: false,
    login: async (email: string, password: string) => {
        set({ user: { email }, isAuthenticated: true });
    },
    logout: async () => {
        set({ user: null, isAuthenticated: false });
    },
}));


