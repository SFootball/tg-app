import { Dispatch, SetStateAction, createContext } from "react";

export type GameContextType = {
  gamePoints: number;
  setGamePoints: Dispatch<SetStateAction<number>>;
  isGameStarted: boolean;
  setGameStarted: Dispatch<SetStateAction<boolean>>;
  resetPoints: () => void;
};

export const gameContext = createContext<GameContextType | null>(null);
