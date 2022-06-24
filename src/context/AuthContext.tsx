import { createContext } from "react";

interface AuthContextProviderProps {
  children?: React.ReactNode;
}

export const AuthContext = createContext({});

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};
