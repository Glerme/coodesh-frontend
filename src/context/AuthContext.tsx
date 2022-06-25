import { createContext, useEffect, useState } from "react";
import {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login";
import { toast } from "react-toastify";

import type { UserProps } from "types/User";

interface AuthContextProviderProps {
  children?: React.ReactNode;
}

interface AuthContextProps {
  user: UserProps | null;
  signIn: (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => Promise<void>;
  signOut: () => void;
  loading: boolean;
}

export const AuthContext = createContext<AuthContextProps>({
  signIn: async (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => {},
  signOut: () => {},
  user: null,
  loading: true,
});

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [loading, setLoading] = useState(false);

  const [user, setUser] = useState<UserProps | null>(null);

  const signIn = async (response: any) => {
    try {
      setLoading(true);

      const parsedValue = JSON.stringify(response);

      localStorage.setItem("user", parsedValue);

      setUser(response);
    } catch (error) {
      console.error(error);

      toast.error("Occurred an Error");

      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    try {
      setLoading(true);

      localStorage.removeItem("user");

      setUser(null);
    } catch (error) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const refreshUser = () => {
    try {
      setLoading(true);
      const locaStorageUser = localStorage.getItem("user");

      if (locaStorageUser) {
        setUser(JSON.parse(locaStorageUser));
      }
    } catch (error) {
      toast.error("Occurred an Error");

      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refreshUser();
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, signOut, user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
