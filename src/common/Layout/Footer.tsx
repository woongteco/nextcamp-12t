import Container from "./Container";

export default function Footer() {
  return (
    <footer>
      <Container>
        {/* sns md:추가 */}
        <ul className="f-sns">
          <li>
            <svg>Instar</svg>
          </li>
          <li>
            <svg>LinkedIn</svg>
          </li>
          <li>
            <svg>X</svg>
          </li>
          <li>
            <svg>Facebook</svg>
          </li>
        </ul>
        <div className="footer-left">
          <h1 className="f-logo">f-logo (Link)</h1>
        </div>
        {/* footer center md에서 제거 */}
        <div className="footer-center">
          <div className="f-sitemap">
            <ul>
              <li>
                <strong>Sitemap</strong>
              </li>
              <li>
                <span>인사이트</span>
              </li>
              <li>
                <span>파트너</span>
              </li>
              <li>
                <span>기업 교육</span>
              </li>
            </ul>
          </div>
          <div className="f-notice">
            <ul>
              <li>
                <strong>Notice</strong>
              </li>
              <li>
                <span>이벤트</span>
              </li>
              <li>
                <span>공지사항</span>
              </li>
            </ul>
          </div>
          <div className="f-company">
            <ul>
              <li>
                <strong>Company</strong>
              </li>
              <li>
                <span>고객센터</span>
              </li>
              <li>
                <span>이용약관</span>
              </li>
              <li>
                <span>개인정보처리방침</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-right">
          {/* sns md:제거 */}
          <ul className="f-sns">
            <li>
              <svg>Instar</svg>
            </li>
            <li>
              <svg>LinkedIn</svg>
            </li>
            <li>
              <svg>X</svg>
            </li>
            <li>
              <svg>Facebook</svg>
            </li>
          </ul>
          <div className="footer-right-bottom">
            <div className="information">
              <span>고객센터 : 0000-0000</span>
              <span>월~금(공휴일제외) 09:00~18:00</span>
            </div>
            <div className="business-information">
              <span>(주)웅진씽크빅 대표이사 : 이봉주</span>
              <span>
                경기도 파주시 회동길 20 (우)10881 사업자 번호 : 141-81-09131
              </span>
            </div>
            {/* 모바일 open : start */}
            <ul className="mb-company">
              <li>
                <strong>Company</strong>
              </li>
              <li>
                <span>고객센터</span>
              </li>
              <li>
                <span>이용약관</span>
              </li>
              <li>
                <span>개인정보처리방침</span>
              </li>
            </ul>
            {/* 모바일 open : end */}
            <div className="copyright-contain">
              <span className="line"></span>
              <p>Copyright © 2024 (주)데이원컴퍼니. All rights reserved.</p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
