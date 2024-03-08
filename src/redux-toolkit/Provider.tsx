"use client";
import react, { FC, ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "sonner";

type TReduxProvider = {
  children: ReactNode;
};

// persisting store before passing to the provider
persistStore(store);

const ReduxProvider: FC<TReduxProvider> = ({ children }) => {
  return (
    <Provider store={store}>
        {children}
      <Toaster/>
    </Provider>
  );
};

export default ReduxProvider;
