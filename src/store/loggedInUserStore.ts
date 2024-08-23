import { ProfileSchema } from "@/types/model/User";
import { create } from "zustand";

type LoggedInUserInfo = {
  user: ProfileSchema | null;
};

const loggedInUserStore = create<LoggedInUserInfo>((set, get) => ({
  user: null,
}));

export default loggedInUserStore;
