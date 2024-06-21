import { FC, PropsWithChildren, useCallback, useState } from "react";
import { gameContext } from "./GameContext";

export const GameProvider: FC<PropsWithChildren> = ({ children }) => {
  const [gamePoints, setGamePoints] = useState(0);
  const [isGameStarted, setGameStarted] = useState(false);

  const resetPoints = useCallback(() => {
    setGamePoints(0);
  }, []);

  // check if null
  if (!gameContext) {
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
