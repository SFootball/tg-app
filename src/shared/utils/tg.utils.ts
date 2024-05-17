import {
  TG_API_URL,
  TG_COMMAND_START,
  TG_GROUP_NAME,
} from "../constants/api.constants";

export const generateRefLink = (tgUserId: number | undefined) => {
  return `${TG_API_URL}/${TG_GROUP_NAME}?${TG_COMMAND_START}=${tgUserId}`;
};
