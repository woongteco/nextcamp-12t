import { getSession } from "@/auth";
import connectDB from "@/lib/db";
import { Post, PostLike } from "@/lib/schema";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    const session = await getSession();
    const userId = session?.user.id;
  
    if (userId === undefined || userId === null) {
      return Response.json(
        {
          state: true,
          message: "로그인한 사용자만 좋아요 상태를 확인할 수 있어요.",
          data: false,
        },
        { status: 200 }
      );
    }
  
    await connectDB();
    try {
      const exist = await PostLike.find({ userId });
      console.log("GET exist:", exist);
      const result = { state: true, data: exist };

      return Response.json({ result }, { status: 200 });
    } catch (error) {
      return Response.json({ error }, { status: 500 });
    }
  }