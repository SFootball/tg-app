import { TGWebApp } from "src/shared/types/TgWebApp";
import { create } from "zustand";

type TGWebAppStoreType = {
  tgWebApp: TGWebApp | null;
  setTgWebApp: (tgWebApp: TGWebApp) => void;
};

export const useTgWebAppStore = create<TGWebAppStoreType>()((set) => ({
  tgWebApp: null,
  setTgWebApp: () => set((state) => ({ tgWebApp: state.tgWebApp })),
  // removeAllBears: () => set({ bears: 0 }),
}));
