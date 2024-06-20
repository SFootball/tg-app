import { FC, PropsWithChildren, useState } from "react";
import { useInitData } from "@vkruglikov/react-telegram-web-app";
import { AuthContext } from "./AuthContext";

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [token, setToken] = useState("");

  const [_, initData] = useInitData();

  if (initData) {
    setToken(initData);
  }
  // check if null
  if (!AuthContext) {
    throw new Error("AuthProvider must be used within a AuthProvider");
  }
  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};
