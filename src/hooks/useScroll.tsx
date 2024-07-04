import { RefObject, useCallback, useEffect, useState } from "react";
import useDebounce from "./useDebounce";

type State = {
  x: number;
  y: number;
};

export default function useScroll(ref: RefObject<HTMLElement>) {
  if (process.env.NODE_ENV === "development") {
    if (typeof ref !== "object" || typeof ref.current === "undefined") {
      console.error("`useScroll` expects a single ref argument.");
    }
  }

  const [state, setState] = useState<State>({ x: 0, y: 0 });
  const debouncedState = useDebounce<State>(state, 100);

  const handler = useCallback(() => {
    if (ref.current) {
      setState({
        x: Math.round(ref.current.scrollLeft ?? 0),
        y: Math.round(ref.current.scrollTop ?? 0),
      });
    }
  }, [ref]);

  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener("scroll", handler, {
        capture: false,
        passive: true,
      });
    }

    return () => {
      if (ref.current) {
        ref.current.removeEventListener("scroll", handler);
      }
    };
  }, [ref]);

  return [state, debouncedState];
}
