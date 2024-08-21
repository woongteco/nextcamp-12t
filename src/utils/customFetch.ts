const dupPattern = /\/{2,}/gi;
const apiPattern = /(http:|https:)+[^\s]+[\w]/gi;
type CustomFetchType = (url: string, init?: RequestInit) => Promise<Response>;
export const cfetch: CustomFetchType = (url, init) => {
  const fullURL = `${process.env.NEXT_PUBLIC_BASE_URL}/${url}`
    .replaceAll(dupPattern, "/")
    .replace(":/", "://");
  if (fullURL.includes(":///") && !apiPattern.test(fullURL)) {
    throw new Error(
      "잘못된 주소입니다. 주소와 환경 변수를 다시 한 번 확인하세요."
    );
  }
  return fetch(fullURL, init);
};
