import styled from "styled-components";
import { FlipCard } from "../../flip-card";
import { ReactScrollContainer } from "../../react-scroll-container";

export const ProjectsSection = styled.section``;

export const StyledReactScrollContainer = styled(ReactScrollContainer)`
  min-height: 100vh;
  width: 100%;
  border-radius: 2.5rem;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  gap: 2rem 1rem;
  padding: 1rem 2rem;
`;

export const MainHeader = styled.div`
  font-size: 36px;
  margin: 2rem 0;
  font-weight: bold;
`;

export const Subheader = styled.div`
  font-size: 28px;
  margin: 1rem 0;
  font-weight: bold;
`;

export const Tags = styled.div`
  font-size: 18px;
  margin: 1rem 0;
  font-weight: 600;
  font-style: italic;
`;

export const Body = styled.div``;

export const FlexedFlipCard = styled(FlipCard)`
  flex: 1 1 100%;
  min-height: 100%;

  &.flipped-card {
    flex: 100%;
  }

  ${({ theme }) => `
    @media screen and (min-width: ${theme.media.tablets}) {
      flex: 0 1 calc(50% - 0.5rem);
    }

    @media screen and (min-width: ${theme.media.laptops}) {
      flex: 0 1 calc(33.33% - 0.67rem);
    }
  `}
`;

export const FrontCard = styled.div``;

export const BackCard = styled.div``;
