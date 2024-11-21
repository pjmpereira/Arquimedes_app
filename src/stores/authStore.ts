import { create } from 'zustand';

interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  login: (email: string, password: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: null,
  login: (email, password) => {
    // Simulate authentication
    set({
      isAuthenticated: true,
      user: {
        id: '1',
        name: 'John Doe',
        email: email,
      },
    });
  },
  logout: () => {
    set({ isAuthenticated: false, user: null });
  },
}));