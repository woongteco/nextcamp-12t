"use server";

import { nanoid } from "nanoid";
import { delay } from "@/dummies/utils";
import connectDB from "../db";
import { Study } from "../schema";
import { getStudyCards } from "@/dummies/studies";

// post
export async function createStudy(userId: string, formData: FormData) {
  const studyId = nanoid();
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
  const rules = formData.get("rules");
  const curriculums = formData.get("curriculums");
  const heartCount = Number(formData.get("heartCount"));

  console.log(
    title,
    thumbnailUrl,
    title,
    jobCategory,
    targetCategory,
    expense,
    recruitmentPeople,
    recruitmentPeriod,
    studyPeriod,
    location,
    place,
    content,
    rules,
    curriculums
  );

  // if (
  //   !jobCategory ||
  //   !targetCategory ||
  //   !expense ||
  //   !recruitmentPeople ||
  //   !recruitmentPeriod ||
  //   !studyPeriod ||
  //   !location
  // ) {
  //   return {
  //     state: false,
  //     message: "스터디 개설하려면 필수 정보를 입력해주세요.",
  //   };
  // }

  await connectDB();

  try {
    const study = new Study({
      studyId,
      studyInfo: {
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
        rules,
        curriculums,
      },
      writer: userId,
      heartCount,
    });

    await study.save();
    return { state: true, message: "스터디 개설이 완료되었습니다." };
  } catch (error) {
    console.log("post study error" + error);
    return { state: false, message: "스터디 개설에 실패했습니다." };
  }
}

// get
export async function getStudy(studyId: string | null = null) {
  try {
    if (studyId) {
      const study = await Study.findOne({ studyId }).populate("writer");
      if (!study) {
        return { state: false, message: "해당 스터디를 찾을 수 없습니다." };
      }
      return { state: true, data: study };
    } else {
      const studyList = await Study.find().populate("writer");
      return { state: true, data: studyList };
    }
  } catch (error) {
    console.log(error);
    return { state: false, message: "스터디 목록을 가져오는데 실패했습니다." };
  }
}

// update
export async function updateStudy(studyId: string, formData: FormData) {
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
  const rule = formData.get("rule");
  const curriculum = formData.get("curriculum");
  const heartCount = Number(formData.get("heartCount"));

  await connectDB();

  try {
    const update = await Study.findOneAndUpdate(
      { studyId },
      {
        $set: {
          studyInfo: {
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
          heartCount,
        },
      },
      { new: true }
    );

    if (!update) {
      return { state: false, message: "해당 스터디를 찾을 수 없습니다." };
    }
    return { state: true, message: "스터디가 수정 되었습니다." };
  } catch (error) {
    console.log("update study error" + error);
    return { state: false, message: "스터디 수정에 실패했습니다." };
  }
}

// delete
export async function deleteStudy(studyId: string) {
  await connectDB();

  try {
    await Study.deleteOne({ studyId });
    return { state: true, message: "스터디가 삭제 되었습니다." };
  } catch (error) {
    console.log("delete study error" + error);
    return { state: false, message: "스터디 삭제에 실패했습니다." };
  }
}

export async function getAllStudies() {
  await delay(1000);
  const data = getStudyCards();
  return { state: true, data };
}

export async function filterStudies(option: object) {
  await delay(1000);
  console.log("filterStudies options", option);
  const data = getStudyCards();
  return { state: true, data };
}
