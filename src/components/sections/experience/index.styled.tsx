import styled from "styled-components";
import { FlipCard } from "../../flip-card";
import { ReactScrollContainer } from "../../react-scroll-container";

interface FlexedFlipCardProps {
  order: number;
}

export const ExperienceSection = styled.section``;

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

export const FlexedFlipCard = styled(FlipCard)<FlexedFlipCardProps>`
  flex: 100%;
  min-height: 100%;
  order: ${({ order }) => order};

  &.flipped-card {
    flex: 100%;
    order: 0;
  }

  ${({ theme }) => `
    @media screen and (min-width: ${theme.media.tablets}) {
      flex: 0 1 50%;
    }

    @media screen and (min-width: ${theme.media.laptops}) {
      flex: 0 1 33%;
    }
  `}
`;

export const FrontCard = styled.div``;

export const BackCard = styled.div``;
