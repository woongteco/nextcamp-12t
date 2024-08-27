import connectDB from "../db";
import { Alert, User } from "../schema";

export async function getUserData(userId: string) {
  await connectDB();

  try {
    const data = await User.findById(userId);

    if (!data) {
      return { state: false, message: "사용자 데이터를 찾을 수 없습니다." };
    }

    return { state: true, data };
  } catch (error: any) {
    console.error("error", error.message);
    return { state: false, message: "잘못된 시도입니다. userId: " + userId };
  }
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
