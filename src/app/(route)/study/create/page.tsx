import SectionTitle from "@/common/Atoms/Text/SectionTitle";
import LinkButton from "@/common/Atoms/LinkButton";
import Button from "@/common/Atoms/Form/Button";
import Thumbnail from "@/common/Atoms/Image/Thumbnail";
import { DefaultThumbnailImg } from "@public/images";
import Image from "next/image";
import ImageInputWithButton from "@/common/Molecules/Form/ImageInputWithButton";
import { studyAction } from "@/lib/action";
import { FormEvent } from "react";
import handleAlert from "@/app/(auth)/_components/ErrorAlert";
import StudyForms from "./_components/StudyForms";
import { getSession } from "@/auth";
import GridField from "@/common/Atoms/Form/Field";
import { LabelText } from "@/common/Atoms/Form/Label";
import Input from "@/common/Molecules/Form/Input";
import { AdditionIcon } from "@/common/Atoms/Image/Icon";
import ButtonCheck from "@/common/Molecules/Form/ButtonCheck";
import TextEditor from "@/common/Atoms/Form/TextEditor";

export default function page() {
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
      <form action={studyAction} className="flex flex-col gap-[36px] mt-14">
        <div className="mb-8">
          <SectionTitle size="md">개설자의 역량을 펼쳐주세요</SectionTitle>
          <span className="text-sm text-label-dimmed">
            당신이 가진 직무 역량과 팁을 공유해주세요
          </span>
        </div>
        <GridField>
          <LabelText form required>
            스터디 제목
          </LabelText>
          <Input.Text placeholder="제목을 입력하세요." required />
        </GridField>
        <GridField>
          <LabelText form required>
            썸네일 이미지
          </LabelText>
          <div className="flex flex-col">
            <div className="flex items-start gap-8">
              <div>
                <input type="file" accept="image/*" hidden />
                <button className="flex items-center justify-center flex-col gap-2 w-[280px] h-[180px] border rounded-ten border-[#e2e2e4] bg-[#f7f7f8] text-label-dimmed">
                  <AdditionIcon color="#828285" />
                  <span>이미지 불러오기</span>
                </button>
              </div>
              <div className="">
                <Image
                  className="w-[280px] h-[180px] rounded-ten"
                  src={DefaultThumbnailImg}
                  alt="썸네일 이미지"
                  width={280}
                  height={180}
                />
                <span className="re">기본 제공 이미지</span>
              </div>
            </div>
            <span className="text-primary-normal text-sm">
              *썸네일 사이즈는 280x180 px를 권장합니다.
            </span>
          </div>
        </GridField>
        <GridField>
          <LabelText form required>
            스터디 카테고리
          </LabelText>
          <div className="flex gap-3">
            <Input.Select placeholder="직무 카테고리" />
            <Input.Select placeholder="목표 카테고리" />
          </div>
        </GridField>
        <GridField>
          <LabelText form required>
            스터디 태그
          </LabelText>
          <Input.Text placeholder="키워드 태그" />
        </GridField>
        <GridField>
          <LabelText form required>
            모집 인원
          </LabelText>
          <div className="flex items-center gap-3">
            <Input.Number
              min={1}
              maxLength={3}
              required
              placeholder="선택"
              className="w-32"
            />
            <span>명</span>
          </div>
        </GridField>
        <GridField>
          <LabelText form required>
            모집 기간
          </LabelText>
          <Input.DateRange id="recruitmentPeriod" />
        </GridField>
        <GridField>
          <LabelText form required>
            스터디 기간
          </LabelText>
          <Input.DateRange id="studyPeriod" />
        </GridField>
        <GridField>
          <LabelText form required>
            참가 비용
          </LabelText>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <Input.Number
                // onInput={(e) => {
                //   if (e.currentTarget.value.length > e.currentTarget.maxLength)
                //     e.currentTarget.value = e.currentTarget.value.slice(
                //       0,
                //       e.currentTarget.maxLength
                //     );
                // }}
                required
                placeholder="0"
                className="w-32"
              />
              <span>원</span>
            </div>
            <ButtonCheck>
              <ButtonCheck.Radio name="free" id="free" label="참가비 무료" />
            </ButtonCheck>
          </div>
        </GridField>
        <GridField>
          <LabelText form required>
            스터디 방식
          </LabelText>
          <div className="flex flex-col gap-6">
            <ButtonCheck>
              <ButtonCheck.Radio
                name="locationStatus"
                id="statusOnline"
                label="온라인"
                defaultChecked
              />
              <ButtonCheck.Radio
                name="locationStatus"
                id="statusOffline"
                label="오프라인"
              />
            </ButtonCheck>
            <div className="flex items-center gap-3">
              <Input.Text
                className="w-[380px]"
                placeholder="주소를 입력해주세요."
              />
              <ButtonCheck>
                <ButtonCheck.Radio name="place" id="place" label="장소 미정" />
              </ButtonCheck>
            </div>
          </div>
        </GridField>
        <GridField>
          <LabelText form required>
            스터디 소개
          </LabelText>
          <TextEditor
            className="h-[450px]"
            placeholder="스터디 소개, 스터디 규칙 등을 상세히 작성해 주세요."
          />
        </GridField>
        <GridField>
          <LabelText form>스터디 규칙</LabelText>
          <div className="flex items-center gap-4">
            <Input.Text
              className="flex-1"
              placeholder="스터디 규칙을 정해주세요."
            />
            <button>
              <AdditionIcon color="#000" />
            </button>
          </div>
        </GridField>
        <GridField>
          <LabelText form>세부 커리큘럼</LabelText>
          <div className="flex items-center gap-4">
            <Input.Text
              className="flex-1"
              placeholder="세부적인 커리큘럼을 정해주세요."
            />
            <button>
              <AdditionIcon color="#000" />
            </button>
          </div>
        </GridField>

        <div className="flex gap-gutter-xl items-center justify-center mt-24">
          <LinkButton
            href="/study"
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
