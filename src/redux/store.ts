import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Features/auth/authSlice";
import postsReducer from "../Features/posts/postSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
