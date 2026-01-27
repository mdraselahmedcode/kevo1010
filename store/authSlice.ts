// src/store/authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Role = 'customer' | 'provider' | null;

type AuthState = {
  user: null | {
    id: string;
    email: string;
  };
  role: Role;
  isAppLoading: boolean;
};

const initialState: AuthState = {
  user: null,
  role: null,
  isAppLoading: true,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<AuthState['user']>) {
      state.user = action.payload;
    },
    setRole(state, action: PayloadAction<Role>) {
      state.role = action.payload;
    },
    setAppLoading(state, action: PayloadAction<boolean>) {
      state.isAppLoading = action.payload;
    },
    logout(state) {
      state.user = null;
      state.role = null;
    },
  },
});

export const { setUser, setRole, setAppLoading, logout } = authSlice.actions;

export default authSlice.reducer;
