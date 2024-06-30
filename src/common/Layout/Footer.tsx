import Link from "next/link";
import Container from "./Container";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  XIcon,
} from "../../../public/icons";
// import { FLogo } from "../../../public/images";
import Image from "next/image";
import { FLogo } from "../../../public/images";

export default function Footer() {
  return (
    <footer className="flex h-[25rem] mt-100 py-20 bg-label-normal">
      <Container>
        {/* sns md:추가 */}
        <div className="flex justify-between text-line-alt text-[12px]">
          <ul className="hidden">
            <li>
              <Link
                href={
                  "https://www.instagram.com/udemykorea/?utm_medium=copy_link"
                }
              >
                <Image src={InstagramIcon} alt="instagram icon" />
              </Link>
            </li>
            <li>
              <Link href={"https://www.linkedin.com/company/udemy"}>
                <Image src={LinkedinIcon} alt="linkedin icon" />
              </Link>
            </li>
            <li>
              <Link href={"https://x.com/udemy?mx=2"}>
                <Image src={XIcon} alt="x.com icon" />
              </Link>
            </li>
            <li>
              <Link href={"https://www.facebook.com/udemykr"}>
                <Image src={FacebookIcon} alt="facebook icon" />
              </Link>
            </li>
          </ul>
          <div className="footer-left">
            <h1 className="f-logo w-60">
              <Link href={"/"}>
                <Image src={FLogo} alt="footer logo" />
              </Link>
            </h1>
          </div>
          {/* footer center md에서 제거 */}
          <div className="flex gap-10">
            <ul className="flex flex-col gap-2">
              <li className="first:mb-3">
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
            <ul className="flex flex-col gap-2">
              <li className="first:mb-3">
                <strong>Notice</strong>
              </li>
              <li>
                <span>이벤트</span>
              </li>
              <li>
                <span>공지사항</span>
              </li>
            </ul>
            <ul className="flex flex-col gap-2">
              <li className="first:mb-3">
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
          <div className="flex flex-col items-end text-right">
            {/* sns md:제거 */}
            <ul className="flex items-center gap-8 pb-4 border-b border-line-alt border-solid">
              <li>
                <Link
                  href={
                    "https://www.instagram.com/udemykorea/?utm_medium=copy_link"
                  }
                >
                  <Image width={24} src={InstagramIcon} alt="instagram icon" />
                </Link>
              </li>
              <li>
                <Link href={"https://www.linkedin.com/company/udemy"}>
                  <Image width={20} src={LinkedinIcon} alt="linkedin icon" />
                </Link>
              </li>
              <li>
                <Link href={"https://x.com/udemy?mx=2"}>
                  <Image width={24} src={XIcon} alt="x.com icon" />
                </Link>
              </li>
              <li>
                <Link href={"https://www.facebook.com/udemykr"}>
                  <Image width={18} src={FacebookIcon} alt="facebook icon" />
                </Link>
              </li>
            </ul>
            <div className="flex flex-col gap-5 mt-4">
              <div>
                <span className="block">고객센터 : 0000-0000</span>
                <span>월~금(공휴일제외) 09:00~18:00</span>
              </div>
              <div>
                <span>(주)웅진씽크빅 대표이사 : 이봉주</span>
                <p>
                  경기도 파주시 회동길 20 (우)10881 사업자 번호 : 141-81-09131
                </p>
              </div>
              {/* 모바일 open : start */}
              <ul className="flex justify-end gap-5">
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
              <p className="pt-1 border-t border-line-alt border-solid">
                Copyright © 2024 (주)데이원컴퍼니. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
