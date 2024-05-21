import { UserType } from "../types/User";

export const mockReferrals = Array(30)
  .fill({})
  .map((_, index) => ({
    username: `user${index + 1}`,
    tg_username: `user${index + 1}`,
  })) as UserType[];
