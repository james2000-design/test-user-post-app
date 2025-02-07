import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, AuthState } from "../../Models/types";

const getStoredUser = (): AuthState => {
  const storedUser = localStorage.getItem("authState");
  return storedUser
    ? JSON.parse(storedUser)
    : { user: null, isAuthenticated: false };
};

const initialState: AuthState = getStoredUser();

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      // Save to localStorage
      localStorage.setItem("authState", JSON.stringify(state));
    },
    signup: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      // Save to localStorage
      localStorage.setItem("authState", JSON.stringify(state));
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      // Remove from localStorage
      localStorage.removeItem("authState");
    },
  },
});

export const { login, signup, logout } = authSlice.actions;
export default authSlice.reducer;
