import { createContext } from "react";
// import { UserType } from "src/shared/types/User";

type AuthContextType = {
  token: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
  // user: UserType;
  // setUser: React.Dispatch<React.SetStateAction<UserType>>;
};

export const AuthContext = createContext<AuthContextType | null>(null);
