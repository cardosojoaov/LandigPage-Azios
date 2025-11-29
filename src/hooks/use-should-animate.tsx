import { useReducedMotion } from "framer-motion";
import { useIsMobile } from "./use-mobile";

export function useShouldAnimate() {
  const reduced = useReducedMotion();
  const isMobile = useIsMobile();
  return !reduced && !isMobile;
}

export default useShouldAnimate;
