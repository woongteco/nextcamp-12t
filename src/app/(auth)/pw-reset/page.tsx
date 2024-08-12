import AuthWrap from "../_components/AuthWrap";
import FindAuthWrap from "../_components/FindAuthWrap";
import FindAuthForm from "../_components/FindAuthForm";

export default function PWresetPage() {
  return (
    <AuthWrap>
      <FindAuthWrap title="비밀번호" />
    </AuthWrap>
  );
}
