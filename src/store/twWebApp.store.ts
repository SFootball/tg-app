import { InitDataUnsafe } from "@vkruglikov/react-telegram-web-app";
// import { TGWebApp } from "src/shared/types/TgWebApp";
import { create } from "zustand";

type TGWebAppStoreType = {
  // tgWebApp: TGWebApp | null;
  initData: InitDataUnsafe | null;
  // setTgWebApp: (tgWebApp: TGWebApp) => void;
  setInitData: (initData: InitDataUnsafe) => void;
};

export const useTgWebAppStore = create<TGWebAppStoreType>()((set) => ({
  // tgWebApp: null,
  initData: null,
  // setTgWebApp: () => set((state) => ({ tgWebApp: state.tgWebApp })),
  setInitData: () => set((state) => ({ initData: state.initData })),
  // removeAllBears: () => set({ bears: 0 }),
}));
