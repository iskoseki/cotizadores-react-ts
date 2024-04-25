import { useEffect } from "react";

const useSmoothScroll = (ref) => {
  useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [ref]);
};

export default useSmoothScroll;
