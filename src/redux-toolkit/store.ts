import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { baseApi } from "./api/baseApi";
import {
    persistReducer,
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';
import { authReducer } from "./features/auth/authSlice";

// Configuration for auth state persistence
const authPersistConfig = {
  key: "auth",
  storage,
};

// Wrap reducers with persist configs
const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

// Combine persisted and non-persisted reducers
const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  auth: persistedAuthReducer,
});

// Create the Redux store
export const store = configureStore({
  reducer: rootReducer,

  // Middleware configuration.
  middleware: (getDefaultMiddlewares) =>
  getDefaultMiddlewares({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat(baseApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
