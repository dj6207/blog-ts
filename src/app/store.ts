import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { userSlice, blogsSlice } from "../slices";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { apiSlice } from "../services/apiSlice";

export const store = configureStore({
    reducer: {
        user: userSlice,
        blogs: blogsSlice,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
});
setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;