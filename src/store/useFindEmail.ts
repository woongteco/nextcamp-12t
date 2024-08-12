import { create } from "zustand";

type TFindEmail = {
  userEmail: string | null;
  setUserEmail: (email: string) => void;
};

const useFindEmail = create<TFindEmail>((set) => ({
  userEmail: null,
  setUserEmail: (email: string) => set({ userEmail: email }),
}));

export default useFindEmail;
