import { createContext, useContext } from "react";
import Modal from "./modal";

const AppContext = createContext();

export function AppWrapper({ children }) {
  return (
    <AppContext.Provider value={{ Modal }}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
