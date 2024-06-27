import { create } from "zustand";

const authStore = (set: any) => ({
  authUser: null,
  isLoggedIn: false,

  setAuthUser: (user: any) => {
    set((state: any) => ({
      ...state,
      authUser: { ...state.authUser, ...user },
    }));
  },

  setSignOut: () => {
    set((state: any) => ({
      ...state,
      authUser: null,
      isLoggedIn: true
    }));
  },

  setIsLoggedIn: (loggedIn: boolean) => {
    set((state: any) => ({
      ...state,
      isLoggedIn: loggedIn,
    }));
  },
});

const useAuthStore = create(authStore);
export default useAuthStore;
