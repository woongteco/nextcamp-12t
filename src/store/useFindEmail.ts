import { create } from "zustand";
import { persist } from "zustand/middleware";

type TFindEmail = {
  userEmail: string | null;
  setUserEmail: (email: string) => void;
  clearUserEmail: () => void;
};

const useFindEmail = create(
  persist<TFindEmail>(
    (set) => ({
      userEmail: null,
      setUserEmail: (email: string) => {
        const checkTime = Date.now() + 1 * 60 * 1000;
        localStorage.setItem("storage-time", checkTime.toString()),
          set({ userEmail: email });
      },
      clearUserEmail: () => {
        set({ userEmail: null });
        localStorage.removeItem("storage-time");
      },
    }),
    {
      name: "find-email",
      onRehydrateStorage: () => (state) => {
        const storageTime = localStorage.getItem("storage-time");
        if (state && storageTime && Date.now() > Number(storageTime)) {
          state.clearUserEmail();
        }
      },
    }
  )
);

export default useFindEmail;
