import { useInitData } from "@vkruglikov/react-telegram-web-app";
const mockTokenInitData =
  "query_id=AAFBKWwYAAAAAEEpbBh0lzI2&user=%7B%22id%22%3A409741633%2C%22first_name%22%3A%22%D0%90%D0%BB%D0%B8%22%2C%22last_name%22%3A%22%D0%91%D0%B0%D0%B9%D0%B1%D1%83%D1%82%D0%BE%D0%B2%22%2C%22username%22%3A%22Ali9Khan5%22%2C%22language_code%22%3A%22ru%22%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1717535918&hash=460ae499fabe7dd1efc5d56a5079ec88eb0c6372bc138bbc36fab429371d5023";
// export const generateTmaAuth = (initData: string) => mockTokenInitData;
export const useInitDataTg = () => {
  const [_, initData] = useInitData();
  if (import.meta.env.DEV) {
    return mockTokenInitData;
  }
  return initData;
};
