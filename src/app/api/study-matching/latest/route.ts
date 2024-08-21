import connectDB from "@/lib/db";
import { Study } from "@/lib/schema";
import { NextRequest } from "next/server";

export async function GET(_: NextRequest) {
  await connectDB();

  try {
    const result = await Study.find()
      .populate("writer", "name email role profile_img position_tag")
      .sort({ createdAt: "desc" });

    const data = result.splice(0, 8);
    return Response.json({ data }, { status: 200 });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
