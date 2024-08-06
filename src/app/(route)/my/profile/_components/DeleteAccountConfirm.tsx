"use client";
import { useState } from "react";
import { signOut } from "next-auth/react";
import Button from "@/common/Atoms/Form/Button";
import Label from "@/common/Atoms/Form/Label";
import Input from "@/common/Molecules/Form/Input";
import handleAlert from "@/common/Molecules/handleAlert";
import { unregisterAction } from "@/lib/actions/authAction";
import useModal from "@/hooks/useModal";

export default function DeleteAccountConfirm({ email }: { email: string }) {
  const [checked, setChecked] = useState<boolean>(false);
  const { Modal, open } = useModal({
    children: (
      <div className="flex flex-col gap-6">
        <p className="text-H3 text-label-normal">정말로 데이터를 삭제할까요?</p>
        <div className="flex items-center justify-center gap-4">
          <Button variation="solid" color="danger" onClick={unregister}>
            계정 삭제
          </Button>
        </div>
      </div>
    ),
    key: "confirm-unregister",
  });

  async function unregister() {
    try {
      const result = await unregisterAction(email);

      if (result.state) {
        signOut({ callbackUrl: "/" });
        handleAlert("success", result.message);
      } else {
        handleAlert("error", result.message);
      }
    } catch (error) {
      console.log(error);
    }
  }

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
        color="danger"
        disabled={!checked}
        onClick={open}
      >
        회원 탈퇴
      </Button>
      {Modal}
    </div>
  );
}
