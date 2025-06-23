import { useCallback, useEffect, useState } from "react";

import useEventListener from "./useEventListener";

const isBrowser = typeof document !== "undefined";

export default function useWindowHeight(): number | null {
  const [windowHeight, setWindowHeight] = useState(0);

  const getWindowHeight = useCallback(() => setWindowHeight(window.innerHeight), []);

  useEffect(() => {
    getWindowHeight();
  }, [getWindowHeight]);

  useEventListener(isBrowser ? window : null, "resize", getWindowHeight);

  return windowHeight;
}
