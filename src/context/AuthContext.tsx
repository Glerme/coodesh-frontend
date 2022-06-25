import { createContext, useState } from "react";
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

      setUser(response);
    } catch (error) {
      console.error(error);

      setUser(null);

      toast.error("Occurred  a error");
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ signIn, signOut, user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
