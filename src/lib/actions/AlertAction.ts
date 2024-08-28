import connectDB from "../db";
import { Alert, Post } from "../schema";

export async function getAlert(userId: string) {
  if (!userId) {
    return { state: false, message: "유효한 id가 없습니다." };
  }

  await connectDB();

  try {
    const data = await Post.find({ writer: userId }).select(
      "postId contents.title comments"
    );

    if (!data) {
      return { state: false };
    }

    // const commentCount = data.reduce((acc, el) => acc + el.comments.length, 0);

    // const dataCount = new Alert({
    //   userId,
    //   count: {
    //     postComment: commentCount,
    //   },
    // });

    // const save = await dataCount.save();

    // const postCommentCount = save.count.postComment;
    const result = JSON.parse(JSON.stringify(data));

    return { state: true, result };
  } catch (error) {
    return { state: false, message: "알림 조회에 실패했습니다." };
  }

export async function updateAlert(userId: string, formData: FormData) {
  const postComment = formData.get("postComment");
  const studyComment = formData.get("studyComment");

  await connectDB();

  try {
    const data = await Alert.findOneAndUpdate(
      { userId },
      {
        count: {
          postComment,
          studyComment,
        },
      }
    );

    return { state: true, data };
  } catch (error) {
    return { state: false, message: "알림 정보에 실패했습니다." };
  }
}
