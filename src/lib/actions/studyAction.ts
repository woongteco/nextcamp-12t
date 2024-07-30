"use server";

import connectDB from "../db";
import { Study } from "../schema";
const { v4: uuidv4 } = require("uuid");

// post
export async function studyAction(formData: FormData) {
  const studyId = uuidv4();
  const thumbnailUrl = formData.get("thumbnailUrl") as string;
  const title = formData.get("title") as string;
  const jobCategory = formData.get("jobCategory") as string;
  const targetCategory = formData.get("targetCategory") as string;
  const expense = Number(formData.get("expense"));
  const recruitmentPeople = Number(formData.get("recruitmentPeople"));
  const recruitmentPeriod = formData.get("recruitmentPeriod");
  const studyPeriod = formData.get("studyPeriod") as string;
  const location = formData.get("location") as string;
  const place = formData.get("place") as string;
  const content = formData.get("content") as string;
  const userId = formData.get("userId") as string;
  const name = formData.get("name") as string;
  const role = formData.get("role") as string;
  const position = formData.get("position") as string;
  const profileUrl = formData.get("profileUrl") as string;
  const rule = formData.get("rule");
  const curriculum = formData.get("curriculum");
  const heartCount = Number(formData.get("heartCount"));

  if (
    !thumbnailUrl ||
    !jobCategory ||
    !targetCategory ||
    !expense ||
    !recruitmentPeople ||
    !recruitmentPeriod ||
    !studyPeriod ||
    !location ||
    !place ||
    !content
  ) {
    return {
      state: false,
      message: "스터디 개설하려면 필수 정보를 입력해주세요.",
    };
  }

  await connectDB();

  try {
    const study = new Study({
      studyId,
      thumbnailInfo: {
        thumbnailUrl,
        title,
        jobCategory,
        targetCategory,
        recruitmentPeople,
        recruitmentPeriod,
        studyPeriod,
        location,
        expense,
        place,
      },
      contents: {
        content,
        rule,
        curriculum,
      },
      writer: {
        userId,
        name,
        role,
        position,
        profileUrl,
      },
      heartCount,
      createdAt: new Date(),
    });

    await study.save();
    return { state: true, message: "스터디 개설이 되었습니다." };
  } catch (error) {
    console.log("post study error" + error);
    return { state: false, message: "스터디 개설에 실패했습니다." };
  }
}

// get
export async function getStudy() {}

// update
export async function updateStudy(studyId: string, formData: FormData) {}

// delete
export async function deleteStudy(studyId: string) {}
