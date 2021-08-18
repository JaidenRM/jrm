import styled from "styled-components";
import { Icon } from "../icon";

interface ContainerProps {
  isVertical?: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: ${({ isVertical }) => (isVertical ? "column" : "row")};
  justify-content: center;
  column-gap: 2rem;
  align-items: center;
  color: ${({ theme }) => theme.colors.text};
`;

export const StyledIcon = styled(Icon)`
  height: ${({ size }) => size};
  width: ${({ size }) => size};
`;
