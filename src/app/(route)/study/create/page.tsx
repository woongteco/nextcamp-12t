"use client";

import { FormEvent } from "react";
import { studyAction } from "@/lib/actions/studyAction";
import SectionTitle from "@/common/Atoms/Text/SectionTitle";
import handleAlert from "@/common/Molecules/handleAlert";
import StudyForms from "./_components/StudyForms";

export default function page() {
  // const [state, formAction] = useFormState(studyAction, { message: null })
  // const { pending} = useFormStatus()
  async function study(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    try {
      await studyAction(formData);
      handleAlert("success", "스터디가 개설 되었습니다.");
    } catch (error: any) {
      handleAlert("error", error.message);
    }
  }

  return (
    <>
      <SectionTitle size="lg" className="pb-6 border-b border-black">
        스터디 개설하기
      </SectionTitle>

      <div className="pt-14 mb-8">
        <SectionTitle size="md">개설자의 역량을 펼쳐주세요</SectionTitle>
        <span className="text-sm text-label-dimmed">
          당신이 가진 직무 역량과 팁을 공유해주세요
        </span>
      </div>

      <StudyForms />
    </>
  );
}
