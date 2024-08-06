import { revalidatePath } from "next/cache";
import connectDB from "../db";
import { User } from "../schema";

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
