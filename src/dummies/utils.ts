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
