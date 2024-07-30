"use client";

import TextEditor from "@/common/Atoms/Form/TextEditor";
import LinkButton from "@/common/Atoms/LinkButton";
import Button from "@/common/Atoms/Form/Button";
import GridField from "@/common/Atoms/Form/Field";
import { LabelText } from "@/common/Atoms/Form/Label";
import Input from "@/common/Molecules/Form/Input";
import SelectCategory from "./SelectCategory";
import { communityAction } from "@/lib/action";
import handleAlert from "@/app/(auth)/_components/ErrorAlert";
import { FormEvent, useState } from "react";
import { Session } from "next-auth";
import { useRouter } from "next/navigation";

type Option = {
  readonly label: string;
  readonly value: string;
};

export default function PostForm({ session }: { session: Session }) {
  const [data, setData] = useState<Option | any>({ value: "", label: "" });
  const router = useRouter();

  async function action(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!session) {
      return;
    }

    const formData = new FormData(e.currentTarget);
    const id = session?.user.id;

    if (data) {
      formData.append("categoryValue", data.value);
      formData.append("categoryLabel", data.label);
    }

    try {
      await communityAction(id, formData);
      handleAlert("success", "커뮤니티 작성이 완료되었습니다.");
      router.replace("/post");
    } catch (error) {
      if (error instanceof Error) {
        handleAlert("error", error.message);
      }
    }
  }

  return (
    <>
      <form onSubmit={action} className="mb-100 flex flex-col gap-[30px]">
        <SelectCategory setData={setData} />
        <GridField>
          <LabelText form required>
            글 제목
          </LabelText>
          <Input.Text placeholder="제목을 입력하세요" name="title" required />
        </GridField>
        <GridField>
          <LabelText form required>
            글 내용
          </LabelText>
          <TextEditor
            className="w-full h-[580px]"
            placeholder="글작성에 유의해주세요. 욕설 비방글은 서비스 정지와 같은 불이익을 받으실 수 있습니다"
          />
        </GridField>
        <GridField>
          <LabelText form>관련 스터디 링크</LabelText>
          <Input.Text name="linkedStudyId" />
        </GridField>
        <div className="flex gap-gutter-xl items-center justify-center mt-24">
          <LinkButton
            href="/post"
            variation="outline"
            colors={{ bg: "bg-main-600", text: "text-main-600" }}
            className="w-[278px]"
          >
            작성 취소
          </LinkButton>
          <Button variation="solid" className="w-[278px]">
            작성 완료
          </Button>
        </div>
      </form>
    </>
  );
}
