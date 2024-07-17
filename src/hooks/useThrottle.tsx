import { useEffect, useRef, useState } from "react";

export default function useThrottle<T>(value: T, delay = 500) {
  const [throttled, setThrottled] = useState<T>(value);
  const timeout = useRef<ReturnType<typeof setTimeout>>();
  const nextValue = useRef(null) as any;
  const hasNextValue = useRef(0) as any;

  useEffect(() => {
    if (!timeout.current) {
      setThrottled(value);
      const timeoutCallback = () => {
        if (hasNextValue.current) {
          hasNextValue.current = false;
          setThrottled(nextValue.current);
          timeout.current = setTimeout(timeoutCallback, delay);
        } else {
          timeout.current = undefined;
        }
      };
      timeout.current = setTimeout(timeoutCallback, delay);
    } else {
      nextValue.current = value;
      hasNextValue.current = true;
    }

    return () => {
      timeout.current && clearTimeout(timeout.current);
    };
  }, [value, delay]);

  return throttled;
}
