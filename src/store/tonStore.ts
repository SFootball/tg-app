import { create } from "zustand";

type TonStoreType = {
  userFrendlyAddress: string | null;
  setUserFriendlyAddress: (address: string) => void;
};

export const useTonStore = create<TonStoreType>()((set) => ({
  userFrendlyAddress: null,
  setUserFriendlyAddress: () =>
    set((state) => ({ userFrendlyAddress: state.userFrendlyAddress })),
  // removeAllBears: () => set({ bears: 0 }),
}));
