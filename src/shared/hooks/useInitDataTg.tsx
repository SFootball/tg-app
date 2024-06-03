import { useInitData } from "@vkruglikov/react-telegram-web-app";
const mockTokenInitData =
  "query_id=AAFBKWwYAAAAAEEpbBgaRe_i&user=%7B%22id%22%3A409741633%2C%22first_name%22%3A%22%D0%90%D0%BB%D0%B8%22%2C%22last_name%22%3A%22%D0%91%D0%B0%D0%B9%D0%B1%D1%83%D1%82%D0%BE%D0%B2%22%2C%22username%22%3A%22Ali9Khan5%22%2C%22language_code%22%3A%22ru%22%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1717406051&hash=0711e516fed6eda047823676437571fea5b9ad54bbb5e4aaeee717dc3e77086e";
// export const generateTmaAuth = (initData: string) => mockTokenInitData;
export const useInitDataTg = () => {
  const [_, initData] = useInitData();
  console.log("import.meta.env.DEV: ", import.meta.env.DEV);
  if (import.meta.env.DEV) {
    return mockTokenInitData;
  }
  return initData;
};
