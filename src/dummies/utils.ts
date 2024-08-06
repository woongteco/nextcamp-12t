/**
 * 데이터 패칭과 같은 비동기 기능의 자리를 대체하기 위해
 * 프로미스를 반환하는 함수.
 * ms가 0인 경우 자동으로 기본값(1000ms)을 설정하기 때문에
 * 1이상의 수를 인자로 전달하여 사용한다.
 * @param {number} ms milliseconds Integer 값 1~
 * @returns Promsie<unknown>
 */
export const delay = (ms?: number) =>
  new Promise((resolve) => setTimeout(resolve, ms || 1000));

/**
 * 특정 날짜가 몇일 혹은 몇달, 몇년 전인지 계산하여 결과 반환
 * @param {string} createdAt 날짜 String
 * @returns {string} (예: 2일 전, 7시간 전)
 */
export function getCreatedBefore(createdAt: string): string {
  const createdTime = Date.parse(createdAt);
  const thisTime = Date.now();
  // second: n/1000, minute: n/1000/60, hour: n/1000/60/60, day: n/1000/60/60/24 ...
  const diff = (thisTime - createdTime) / 1000;
  const times: Array<{
    unit:
      | "year"
      | "quarter"
      | "month"
      | "week"
      | "day"
      | "hour"
      | "minute"
      | "second";
    milliSeconds: number;
  }> = [
    { unit: "year", milliSeconds: 60 * 60 * 24 * 365 },
    { unit: "month", milliSeconds: 60 * 60 * 24 * 30 },
    { unit: "week", milliSeconds: 60 * 60 * 24 * 7 },
    { unit: "day", milliSeconds: 60 * 60 * 24 },
    { unit: "hour", milliSeconds: 60 * 60 },
    { unit: "minute", milliSeconds: 60 },
  ];
  const rtf = new Intl.RelativeTimeFormat("ko", { style: "short" });

  // 년 단위부터 알맞는 단위 찾기
  for (const value of times) {
    const betweenTime = Math.floor(diff / value.milliSeconds);

    // 큰 단위는 0보다 작은 소수 단위 나옴
    if (betweenTime > 0) {
      return rtf.format(betweenTime * -1, value.unit);
    }
  }

  // 모든 단위가 맞지 않을 시
  return "방금 전";
}
