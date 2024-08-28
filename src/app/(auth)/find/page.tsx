import AuthWrap from "../_components/AuthWrap";
import FindAuthWrap from "../_components/FindAuthWrap";

export default function FindPage() {
  return (
    <AuthWrap>
      <FindAuthWrap title="이메일" />
    </AuthWrap>
  );
}
