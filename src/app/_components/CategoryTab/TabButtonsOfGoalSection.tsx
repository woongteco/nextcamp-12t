import MainTabButtonGroup from "./MainTabButtonGroup";
import MainSectionOfGoals from "./MainSectionOfGoals";
import { cfetch } from "@/utils/customFetch";
import { StudyDataFull } from "@/types/model/StudyCard";

export default async function TabButtonsOfGoalSection() {
  const response = await cfetch("/api/study", {
    next: { tags: ["study"] },
  })
    .then((res) => res.json())
    .then(({ data }) => {
      return data;
    })
    .catch((err) => err);

  if (!response?.data) {
    throw new Error("스터디 정보 가져오기 실패");
  }

  const data: StudyDataFull[] = response.data;

  return (
    <>
      <MainTabButtonGroup />
      <MainSectionOfGoals data={JSON.parse(JSON.stringify(data))} />
    </>
  );
}
