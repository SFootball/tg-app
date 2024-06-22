import { FC, PropsWithChildren, useCallback, useState } from "react";
import { gameContext } from "./GameContext";
import { useUserQuery } from "src/shared/hooks/useUserQuery";

export const GameProvider: FC<PropsWithChildren> = ({ children }) => {
  useUserQuery();
  const [gamePoints, setGamePoints] = useState(0);
  const [isGameStarted, setGameStarted] = useState(false);

  const resetPoints = useCallback(() => {
    setGamePoints(0);
  }, []);

  if (gameContext === null) {
    throw new Error("GameProvider must be used within a GameProvider");
  }
  return (
    <gameContext.Provider
      value={{
        gamePoints,
        setGamePoints,
        isGameStarted,
        setGameStarted,
        resetPoints,
      }}
    >
      {children}
    </gameContext.Provider>
  );
};
