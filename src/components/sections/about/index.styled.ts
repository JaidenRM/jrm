import styled from "styled-components";
import { ReactScrollContainer } from "../../react-scroll-container";
import { PrimaryButton } from "../../shared/buttons.styled";

export const Section = styled.section``;

export const StyledReactScrollContainer = styled(ReactScrollContainer)`
  min-height: 100vh;
  width: 100%;
  border-radius: 2.5rem;
`;

export const Container = styled.div`
  padding: 1rem 2rem;

  ${({ theme }) => `
    @media screen and (min-width: ${theme.media.laptops}) {
      padding: 2rem 4rem;
    }
  `}
`;

export const MainHeader = styled.h1`
  font-size: 40px;

  ${({ theme }) => `
    @media screen and (min-width: ${theme.media.tablets}) {
      font-size: 48px;
    }
  `}
`;

export const Footer = styled.div``;

export const Body = styled.div``;

export const BodyParagraph = styled.p``;

export const Link = styled.a``;

export const TechnologyList = styled.ul`
  columns: 2;
`;

export const ShowcaseButton = styled(PrimaryButton)`
  margin: auto;
  margin-top: 2rem;

  ${({ theme }) => `
    @media screen and (min-width: ${theme.media.phones}) {
      margin: 0;
      margin-top: 2rem;
    }
  `}
`;

export const TechnologyListItem = styled.li``;
