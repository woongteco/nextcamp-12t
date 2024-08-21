import { getSession } from "@/auth";
import connectDB from "@/lib/db";
import { Study, User } from "@/lib/schema";
import { noData } from "@/utils/undefinedOrNull";
import { NextRequest } from "next/server";

const DEFAULT_SIZE = 8;

export async function GET(_: NextRequest) {
  const session = await getSession();
  const userId = session?.user.id;
  await connectDB();

  if (noData(userId)) {
    const data = await Study.find().sort({ heartCount: "desc" });
    return Response.json({ data }, { status: 200 });
  }

  try {
    const favors = await User.find({ _id: userId }).select("my_category");
    const result =
      favors.length > 0
        ? await Study.find({
            studyInfo: { jobCategory: { $in: favors } },
          })
            .populate("writer", "name email role profile_img position_tag")
            .sort({ createdAt: "desc" })
        : await Study.find().sort({ heartCount: "desc" });

    if (favors.length > 0 && result.length < DEFAULT_SIZE) {
      // const groups = favors.reduce((prev, curr) => {
      //   const [cate, g] = curr.split("_");
      //   const group = [cate, g].join("_");
      //   if (prev.includes(group)) return [...prev];
      //   return [...prev, group];
      // }, []);
      const notEqual = await Study.find({
        studyInfo: { jobCategory: { $nin: favors } },
      })
        .populate("writer", "name email role profile_img position_tag")
        .sort({ createdAt: "desc" });

      const vacant = DEFAULT_SIZE - result.length;
      result.push(...notEqual.splice(0, vacant));
    }

    const data = result.splice(0, 8);
    return Response.json({ data }, { status: 200 });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
