import TextEditor from "@/common/Atoms/Form/TextEditor";
import LinkButton from "@/common/Atoms/LinkButton";
import Button from "@/common/Atoms/Form/Button";
import GridField from "@/common/Atoms/Form/Field";
import { LabelText } from "@/common/Atoms/Form/Label";
import Input from "@/common/Molecules/Form/Input";
import SelectCategory from "./_components/SelectCategory";

export default function PostWrite() {
  return (
    <>
      <form action="" className="mt-20 mb-100 flex flex-col gap-[36px]">
        <SelectCategory />
        <GridField>
          <LabelText form required>
            글 제목
          </LabelText>
          <Input.Text placeholder="제목을 입력하세요" required />
        </GridField>
        <GridField>
          <LabelText form required>
            글 내용
          </LabelText>
          <TextEditor
            required
            className="h-[580px]"
            placeholder="글작성에 유의해주세요. 욕설 비방글은 서비스 정지와 같은 불이익을 받으실 수 있습니다"
          />
        </GridField>
        <GridField>
          <LabelText form>관련 스터디 링크</LabelText>
          <Input.Text />
        </GridField>
        <div className="flex gap-gutter-xl items-center justify-center mt-40">
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
