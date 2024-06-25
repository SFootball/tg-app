import { BallsTypes } from "./game.types";

export const getImgPathForBallComponent = (type: BallsTypes) =>
  `/imgs/game/${type}.png`;
