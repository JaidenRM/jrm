import styled from "styled-components";
import { Fade } from "react-awesome-reveal";

export const FadeContainer = styled(Fade)`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.secondary.normal.bg};
`;

export const ChildWrapper = styled.div``;

export const ButtonWrapper = styled.div`
  margin: 2rem 1rem;
  float: right;
  justify-self: flex-end;
  align-self: flex-end;
`;
