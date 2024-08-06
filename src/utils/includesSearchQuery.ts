import { choseongIncludes, hangulIncludes } from "es-hangul";

export function includesSearchQuery(from: string, queryKey: string): boolean {
  if (hangulIncludes(from, queryKey) || choseongIncludes(from, queryKey)) {
    console.log({ from, queryKey });
    return true;
  }
  return from.includes(queryKey);
}
