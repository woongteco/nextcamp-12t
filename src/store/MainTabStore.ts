import { GOALS } from "@/constants/categories/study_goal";
import { create } from "zustand";

type TMainTabButton = {
  mainTab: string;
  setMainTab: (selected: string) => void;
};
const MainTabSelectedStore = create<TMainTabButton>((set) => ({
  mainTab: GOALS[0].value,
  setMainTab: (selected: string) => set({ mainTab: selected }),
}));

export default MainTabSelectedStore;
