import Input from "@/common/Molecules/Form/Input";
import Button from "@/common/Atoms/Form/Button";
import ProfileInputArea from "./ProfileInputArea";

export default function FormUpdatePassword() {
  return (
    <form action="">
      <ProfileInputArea>
        <Input.Password
          name="password"
          placeholder="현재 비밀번호를 입력하세요"
        />
        <Input.Password
          name="newPassword"
          placeholder="변경할 비밀번호를 입력하세요"
        />
        <Input.Password
          name="newPasswordCheck"
          placeholder="변경할 비밀번호를 다시 입력하세요"
        />
        <Button
          variation="outline"
          colors={{ bg: "bg-main-600", text: "text-main-600" }}
          className="self-start"
          disabled
        >
          비밀번호 변경
        </Button>
      </ProfileInputArea>
    </form>
  );
}
