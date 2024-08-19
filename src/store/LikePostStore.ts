import { PostDataFull } from "@/types/model/PostItem";
import { cfetch } from "@/utils/customFetch";
import { create } from "zustand";

type ResponseState = {
  state: boolean;
  data: PostDataFull | null;
  message?: string;
};
type TLikeState = {
  liked: boolean;
  setLiked: (liked: boolean) => void;
  fetchLiked: (postId: string) => Promise<ResponseState>;
  // likePost: PostLikeModel[];
  // setLikePush: ({ userId, postId }: PostLikeModel) => void;
  // setLikePull: ({ userId, postId }: PostLikeModel) => void;
  fetchLikeToggle: (postId: string) => Promise<ResponseState>;
};

const LikePostStore = create<TLikeState>((set, get) => ({
  liked: false,
  setLiked: (liked: boolean) => set({ liked }),
  fetchLiked: async (postId: string) => {
    try {
      const response = await cfetch("/api/community/likes/" + postId, {
        method: "GET",
      })
        .then((res) => res.json())
        .then(({ result }) => {
          console.log("data", { result });
          return result;
        })
        .catch((err) => {
          throw new Error(err.message);
        });
      if (response?.state === false) {
        return response;
      }

      get().setLiked(response.data);
      return response;
    } catch (error: any) {
      throw new Error(error?.message as string);
    }
  },
  // likePost: [],
  // setLikePost: (likePost: PostLikeModel[]) => set({ likePost }),
  // setLikePush: (newLikePost: PostLikeModel) =>
  //   set(({ likePost }) => ({ likePost: [...likePost, newLikePost] })),
  // setLikePull: ({ userId, postId }: PostLikeModel) =>
  //   set(({ likePost }) => {
  //     const updated = likePost.filter((likes) => {
  //       if (likes.userId !== userId || likes.postId !== postId) {
  //         return likes;
  //       }
  //     });
  //     return { likePost: updated };
  //   }),
  fetchLikeToggle: async (postId: string) => {
    try {
      const response = await cfetch("/api/community/likes/" + postId, {
        method: "PATCH",
      })
        .then((res) => res.json())
        .then(({ result }) => {
          console.log("data", { result });
          return result;
        })
        .catch((err) => {
          throw new Error(err.message);
        });

      if (response.state === false) {
        return response;
      }

      const state = get();
      state.setLiked(!state.liked);
      return response;
    } catch (error: any) {
      throw new Error(error?.message as string);
    }
  },
}));

export default LikePostStore;
