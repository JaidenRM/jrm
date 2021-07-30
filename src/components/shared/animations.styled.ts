import { keyframes } from "styled-components";

export const shakeAnim = keyframes`
  0% { transform: rotateZ(0); }
  5% { transform: rotateZ(-20deg); }
  10% { transform: rotateZ(20deg); }
  15% { transform: rotateZ(-20deg); }
  20% { transform: rotateZ(20deg); }
  25% { transform: rotateZ(-20deg); }
  30% { transform: rotateZ(20deg); }
  35% { transform: rotateZ(0); }
  70% { transform: rotateZ(0); }
  75% { transform: rotateZ(-20deg); }
  80% { transform: rotateZ(20deg); }
  85% { transform: rotateZ(-20deg); }
  90% { transform: rotateZ(20deg); }
  95% { transform: rotateZ(-20deg); }
  100% { transform: rotateZ(0); }
`;

export const FlipOverAnim = keyframes`
  50% { transform: rotateY(90deg) rotateX(10deg); }
`;
