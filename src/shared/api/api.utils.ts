import { TmaTypeAuthKey } from "./swagger";

export const generateTmaAuth = (initData: string) =>
  `${TmaTypeAuthKey.Tma} ${initData}`;
// mock test
// export const mockTokenInitData =
//   "tma query_id=AAH7jJsfAAAAAPuMmx_yD_05&user=%7B%22id%22%3A530287867%2C%22first_name%22%3A%22El%27dar%22%2C%22last_name%22%3A%22Nasyrov%22%2C%22username%22%3A%22buugaaga%22%2C%22language_code%22%3A%22en%22%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1716919213&hash=7416cd8d434ba3bdfcaac0a4932ddb58d022f4a676226dd31de3b49ad2d2b46a";
// export const generateTmaAuth = (initData: string) => mockTokenInitData;
