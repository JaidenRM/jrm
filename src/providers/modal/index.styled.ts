import styled from "styled-components";
import { hexToRGBA } from "../../utils/hex-to-rgba";

export const ModalContainer = styled.aside`
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  background: ${({ theme }) => hexToRGBA(theme.colors.text, 0.5)};
  z-index: ${({ theme }) => theme.zindex.carousel.fullScreen};
`;

export const ModalChildContainer = styled.div``;
