"use server";

import connectDB from "../db";
import { Post } from "../schema";
const { v4: uuidv4 } = require("uuid");

// post
export async function communityAction(id: string, formData: FormData) {
  const postId = uuidv4();
  const categoryValue = formData.get("categoryValue") as string;
  const categoryLabel = formData.get("categoryLabel") as string;
  const isRecruiting = formData.get("isRecruiting") === "true";
  const title = formData.get("title") as string;
  const body = formData.get("body") as string;
  const linkedStudyId = formData.get("linkedStudyId") as string;

  if (!categoryValue || !categoryLabel || !title || !body) {
    return {
      state: false,
      message: "커뮤니티 등록하려면 필수 정보를 입력해주세요.",
    };
  }

  await connectDB();

  try {
    const post = new Post({
      postId,
      category: {
        value: categoryValue,
        label: categoryLabel,
        isRecruiting,
      },
      contents: {
        title,
        body,
        linkedStudyId,
      },
      writer: id,
      createdAt: new Date(),
      view: 0,
      like: 0,
    });

    await post.save();
    return {
      state: true,
      message: "커뮤니티 글이 등록되었습니다.",
    };
  } catch (error) {
    console.log("post error" + error);
    return {
      state: false,
      message: "커뮤니티 등록에 실패했습니다.",
    };
  }
}

// get
export async function getCommunity(postId: string | null = null) {
  await connectDB();

  try {
    if (postId) {
      const post = await Post.findOne({ postId }).populate("writer");
      if (!post) {
        return { state: false, message: "게시글을 찾을 수 없습니다." };
      }
      return { state: true, data: post };
    } else {
      const postList = await Post.find().populate("writer");
      return { state: true, data: postList };
    }
  } catch (error) {
    console.log("get profile" + error);
    return { state: false, message: "프로필 정보 로딩에 실패했습니다." };
  }
}

// update
export async function updateCommunity(id: string, formData: FormData) {}

// delete
export async function deleteCommunity(id: string) {
  await connectDB();

  try {
    await Post.findOneAndDelete({ postId: id });
    return { success: true, message: "커뮤니티 글이 삭제되었습니다." };
  } catch (error) {
    console.error("delete post error", error);
    return { success: false, message: "커뮤니티 글 삭제에 실패했습니다." };
  }
}
