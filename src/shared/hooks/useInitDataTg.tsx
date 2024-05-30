import { useInitData } from "@vkruglikov/react-telegram-web-app";
const mockTokenInitData =
  "query_id=AAH7jJsfAAAAAPuMmx-H-fwl&user=%7B%22id%22%3A530287867%2C%22first_name%22%3A%22El%27dar%22%2C%22last_name%22%3A%22Nasyrov%22%2C%22username%22%3A%22buugaaga%22%2C%22language_code%22%3A%22en%22%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1717057943&hash=774fbc91116b8917fdcdc6b58719a1f94066b69da607d35af0eebb0d08a2cdb9";
// export const generateTmaAuth = (initData: string) => mockTokenInitData;
export const useInitDataTg = () => {
  const [_, initData] = useInitData();
  console.log("import.meta.env.DEV: ", import.meta.env.DEV);
  if (import.meta.env.DEV) {
    return mockTokenInitData;
  }
  return initData;
};
