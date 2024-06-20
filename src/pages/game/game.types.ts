export type BallsTypes = "simple" | "bonus" | "bomb";

export type BallsType = {
  id: number;
  src: string;
  top: number;
  left: number;
  type: BallsTypes;
};
