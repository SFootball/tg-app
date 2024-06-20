import { AuthPrefixToken } from "./swagger";

export const generateTmaAuth = (initData: string) =>
  `${AuthPrefixToken.Tma} ${initData}`;
// mock test
