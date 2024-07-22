import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "tailwind.config";
import { useEffect, useState } from "react";

const fullConfig = resolveConfig(tailwindConfig);
const {
  theme: { screens },
} = fullConfig;

// tailwind breakpoints setting by config theme.screens token
// Tailwind 미디어쿼리 사용 방법과 동일하게 동작, 동일하게 사용
export default function useMediaQuery(query: keyof typeof screens): boolean {
  const mediaQuery = `(min-width: ${screens[query]})`;
  const matchQueryList = window.matchMedia(mediaQuery);
  const [isMatch, setMatch] = useState<boolean>(false);
  const onChange = (e: MediaQueryListEvent) => setMatch(e.matches);
  useEffect(() => {
    setMatch(matchQueryList.matches);
    matchQueryList.addEventListener("change", onChange);
    return () => matchQueryList.removeEventListener("change", onChange);
  }, [query]);
  return isMatch;
}
