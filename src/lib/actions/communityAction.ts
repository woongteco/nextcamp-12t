"use server";

import { nanoid } from "nanoid";
import connectDB from "../db";
import { Post, Comment } from "../schema";

// post
export async function createCommunity(userId: string, formData: FormData) {
  const postId = nanoid();
  const categoryValue = formData.get("categoryValue") as string;
  const categoryLabel = formData.get("categoryLabel") as string;
  const isRecruiting = formData.get("isRecruiting") === "true";
  const title = formData.get("title") as string;
  const body = formData.get("body") as string;
  const linkedStudyId = formData.get("linkedStudyId") as string;

  if (!userId) {
    return { state: false, message: "유효한 id가 필요합니다." };
  }

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
      writer: userId,
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
      const post = await Post.findOne({ postId })
        .populate("writer")
        .populate("comments");

      if (!post) {
        return { state: false, message: "해당 게시글을 찾을 수 없습니다." };
      }
      return { state: true, data: post };
    } else {
      const postList = await Post.find().populate("writer");
      return { state: true, data: postList };
    }
  } catch (error) {
    console.log("get profile" + error);
    return {
      state: false,
      message: "게시글 데이터를 가져오는데 실패했습니다.",
    };
  }
}

// update
export async function updateCommunity(postId: string, formData: FormData) {
  const categoryValue = formData.get("categoryValue") as string;
  const categoryLabel = formData.get("categoryLabel") as string;
  const isRecruiting = formData.get("isRecruiting") === "true";
  const title = formData.get("title") as string;
  const body = formData.get("body") as string;
  const linkedStudyId = formData.get("linkedStudyId") as string;

  try {
    const update = await Post.findOneAndUpdate(
      { postId },
      {
        $set: {
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
          createdAt: new Date(),
          view: 0,
          like: 0,
        },
      },
      { new: true }
    );

    if (!update) {
      return { state: false, message: "해당 커뮤니티 글을 찾을 수 없습니다." };
    }
    return { state: true, message: "커뮤니티 글이 수정되었습니다." };
  } catch (error) {
    console.log("update post error " + error);
    return { state: false, message: "커뮤니티 글을 수정하는데 실패했습니다." };
  }
}

// delete
export async function deleteCommunity(postId: string) {
  await connectDB();

  try {
    await Post.deleteOne({ postId });
    await Comment.deleteMany({ postId });

    return { success: true, message: "커뮤니티 글이 삭제되었습니다." };
  } catch (error) {
    console.error("delete post error", error);
    return { success: false, message: "커뮤니티 글 삭제에 실패했습니다." };
  }
}
