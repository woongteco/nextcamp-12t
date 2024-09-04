import { PostDataFull } from "@/types/model/PostItem";
import { cfetch } from "@/utils/customFetch";
import { create } from "zustand";

type ResponseState = {
  state: boolean;
  data?: string[];
  message?: string;
};
type TLikeState = {
  liked: string[];
  setLiked: (fetched: string[]) => void;
  addLiked: (postId: string) => void;
  delLiked: (postId: string) => void;
  fetchUsersLiked: () => Promise<ResponseState>;
  fetchLikeToggle: (postId: string) => Promise<ResponseState>;
};

const likePostStore = create<TLikeState>((set, get) => ({
  liked: [],
  setLiked: (fetched: string[]) => set({ liked: fetched }),
  addLiked: (postId: string) => set((state) => ({ liked: [...state.liked, postId] })),
  delLiked: (postId: string) => set((state) => ({ liked: state.liked.filter(id => id !== postId) })),
  fetchUsersLiked: async () => {
    try {
      const response = await cfetch("/api/community/likes", {
        method: "GET",
      })
        .then((res) => res.json())
        .then(({ result }) => {
          // console.log("data", { result });
          return result;
        })
        .catch((err) => {
          throw new Error(err.message);
        });
      if (response?.data !== undefined && response?.data !== null) {
        get().setLiked(response.data);
      }

      return response;
    } catch (error) {
      console.error(error);
    }
  },
  fetchLikeToggle: async (postId: string) => {
    try {
      const response = await cfetch("/api/community/likes/" + postId, {
        method: "PATCH",
      })
        .then((res) => res.json())
        .then(({ result }) => {
          // console.log("data", { result });
          return result;
        })
        .catch((err) => {
          throw new Error(err.message);
        });

      if (response.state === false) {
        return response;
      }

      // const state = get();
      // state.setLiked(!state.liked);
      return response;
    } catch (error: any) {
      console.error(error);
    }
  },
}));

export default likePostStore;
