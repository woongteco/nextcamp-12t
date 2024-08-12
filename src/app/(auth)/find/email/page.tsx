"use client";

import useFindEmail from "@/store/useFindEmail";
import AuthWrap from "../../_components/AuthWrap";

export default function page() {
  const { userEmail } = useFindEmail();

  console.log(userEmail);

  return (
    <>
      <AuthWrap>
        {userEmail ? (
          <div>해당 정보로 가입된 이메일은 {userEmail} 입니다.</div>
        ) : (
          <div>이메일 정보가 없습니다.</div>
        )}
      </AuthWrap>
    </>
  );
}
