type CustomFetchType = (url: string, init?: RequestInit) => Promise<Response>;
export const cfetch: CustomFetchType = (url, init) => {
  return fetch(process.env.NEXT_PUBLIC_BASE_URL + url, init);
};
