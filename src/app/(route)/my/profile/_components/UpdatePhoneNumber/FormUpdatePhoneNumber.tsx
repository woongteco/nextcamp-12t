import Input from "@/common/Molecules/Form/Input";
import ProfileInputArea from "../ProfileInputArea";
import Button from "@/common/Atoms/Form/Button";

export default function FormUpdatePhoneNumber({
  defaultValue = "",
}: {
  defaultValue?: string;
}) {
  return (
    <>
      <ProfileInputArea>
        <div className="flex gap-4 items-center">
          <Input.Text
            name="phone"
            placeholder="핸드폰 번호를 입력하세요"
            className="w-full"
            defaultValue={defaultValue}
            readOnly
          />
          {/* <Button
            variation="outline"
          >
            인증하기
          </Button> */}
        </div>
      </ProfileInputArea>
    </>
  );
}
