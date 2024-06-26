import Link from "next/link";

export default function Header() {
  return (
    <header>
      <h1>Logo Icon SVG</h1>
      <nav>
        <ul>
          <li>
            <Link href={"/study"}>스터디</Link>
          </li>
          <li>
            <Link href={"/post"}>커뮤니티</Link>
          </li>
        </ul>
      </nav>
      <div className="header-right-zone">
        {/* <Link href={'/login'}>로그인</Link> */}
        <Link href={"/studyroom/create"}>스터디 만들기</Link>
        <div>
          내 프로필 이미지
          <div>!가상! 세로 라인</div>
        </div>
        <div className="my-menu">
          <ul>
            <li>
              <Link href={"/my/pofile"}>svg 내 프로필</Link>
            </li>
            <li>
              <Link href={"/my/study"}>svg 내 스터디</Link>
            </li>
            <li>
              <Link href={"/my/like-study"}>svg 찜 스터디</Link>
            </li>
            <li>
              <Link href={"/post"}>svg 내가 쓴 글</Link>
            </li>
            <li className="logout">
              <button>svg 로그아웃</button>
            </li>
          </ul>
        </div>

        <div>SVG알림 ICON</div>
      </div>
    </header>
  );
}
