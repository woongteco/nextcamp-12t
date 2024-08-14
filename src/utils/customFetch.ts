type CustomFetchType = (uri: string, init?: RequestInit) => Promise<Response>;
export const cfetch: CustomFetchType = (uri, init) =>
  fetch(process.env.NEXT_PUBLIC_BASE_URL + uri, init);
