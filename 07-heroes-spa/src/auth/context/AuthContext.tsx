import { createContext } from "react";

export interface PropsAuthContext {
  login: (name: string) => void;
  logout: () => void;
  user?: {
    id?: string,
    name?: string
  };
  logged?: boolean
}

export const AuthContext = createContext<PropsAuthContext | null>(null);