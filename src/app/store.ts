import { configureStore } from "@reduxjs/toolkit";
import { userSlice, blogsSlice } from "../slices";

export const store = configureStore({
    reducer: {
        user: userSlice,
        blogs: blogsSlice
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;