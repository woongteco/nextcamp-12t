import connectDB from "../db";
import { Post } from "../schema";

export async function getAlert(userId: string) {
  if (!userId) {
    return { state: false, message: "유효한 id가 없습니다." };
  }

  await connectDB();

  try {
    const result = await Post.find({ writer: userId }).select(
      "postId contents.title comments"
    );
    if (!result) {
      return { state: false, message: "해당 계정은 알림이 없습니다." };
    }
    return { state: true, result };
  } catch (error) {
    return { state: false, message: "알림 조회에 실패했습니다." };
  }
}
