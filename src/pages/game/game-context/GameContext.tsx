import { Dispatch, SetStateAction, createContext } from "react";

export type GameContextType = {
  gamePoints: number;
  setGamePoints: Dispatch<SetStateAction<number>>;
};

export const gameContext = createContext<GameContextType | null>(null);
