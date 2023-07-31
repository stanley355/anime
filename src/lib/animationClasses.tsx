import { css } from "@emotion/css";

const animateToVisibleKeyframes = css`@keyframes animateToVisible {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}`;
export const animateToVisible = css`animation: animateToVisible 2s linear; ${animateToVisibleKeyframes}`;