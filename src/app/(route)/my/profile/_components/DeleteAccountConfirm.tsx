"use client";
import Button from "@/common/Atoms/Form/Button";
import Label from "@/common/Atoms/Form/Label";
import Input from "@/common/Molecules/Form/Input";
import { useState } from "react";

export default function DeleteAccountConfirm() {
  const [checked, setChecked] = useState<boolean>(false);
  return (
    <div>
      <div className="flex flex-row gap-2 items-start mb-4">
        <Input.Checkbox
          id="agreeDeleteAccount"
          className="my-[2px]"
          onChange={() => setChecked((prev) => !prev)}
        />
        <Label
          htmlFor="agreeDeleteAccount"
          className="text-body-400 text-label-dimmed select-none"
        >
          버튼을 클릭하면 계정이 영구적으로 삭제되는 것을 이해했습니다.
          <br />
          계정을 삭제한 후에 해당 계정을 복구할 수 없습니다.
        </Label>
      </div>
      <Button
        variation="outline"
        colors={{ bg: "bg-status-danger", text: "text-status-danger" }}
        className="border-status-danger"
        disabled={!checked}
      >
        회원 탈퇴
      </Button>
    </div>
  );
}
