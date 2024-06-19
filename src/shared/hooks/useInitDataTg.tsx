import { useInitData } from "@vkruglikov/react-telegram-web-app";
const mockTokenInitData =
  "query_id=AAH7jJsfAAAAAPuMmx9ndXZw&user=%7B%22id%22%3A530287867%2C%22first_name%22%3A%22El%27dar%22%2C%22last_name%22%3A%22Nasyrov%22%2C%22username%22%3A%22buugaaga%22%2C%22language_code%22%3A%22en%22%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1718610245&hash=4fd5ba8fab9c4fcb4c82b24da58242e5e03e931455da28e3f63520c51818a92e";

// export const generateTmaAuth = (initData: string) => mockTokenInitData;
export const useInitDataTg = () => {
  const [_, initData] = useInitData();
  if (import.meta.env.DEV) {
    return mockTokenInitData;
  }
  return initData;
};
