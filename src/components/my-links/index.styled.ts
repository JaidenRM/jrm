import styled from "styled-components";

interface ContainerProps {
  isVertical?: boolean;
}

interface IconProps {
  size: string;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: ${({ isVertical }) => (isVertical ? "column" : "row")};
  justify-content: center;
  column-gap: 2rem;
  align-items: center;
  color: ${({ theme }) => theme.colors.text};
`;

export const IconLinks = styled.a``;

export const Icon = styled.img<IconProps>`
  height: ${({ size }) => size};
  width: ${({ size }) => size};
`;
