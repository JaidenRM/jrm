import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

interface IconWrapperProps {
  iconSize: string;
}

export const FAIcon = styled(FontAwesomeIcon)`
  height: 100% !important;
  width: 100% !important;
`;

export const SvgIcon = styled.img`
  height: 100%;
  width: 100%;
`;

export const IconWrapper = styled.a<IconWrapperProps>`
  height: ${({ iconSize: size }) => size};
  width: ${({ iconSize: size }) => size};
`;
