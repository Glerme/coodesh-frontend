import { createContext } from "react";

interface AuthContextProvider {
  children?: React.ReactNode;
}

export const AuthContext = createContext({});

export const AuthContextProvider = ({ children }: AuthContextProvider) => {
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};
