import { TmaTypeAuthKey } from "./swagger";

export const generateTmaAuth = (initData: string) =>
  `${TmaTypeAuthKey.Tma} ${initData}`;
// mock test
