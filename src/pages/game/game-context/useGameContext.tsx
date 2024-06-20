import { useContext } from "react";
import { gameContext } from "./GameContext";

export const useGameContext = () => {
  const context = useContext(gameContext);
  if (!context) {
    throw new Error("useGameContext must be used within a GameProvider");
  }
  return context;
};
