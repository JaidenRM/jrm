import styled from "styled-components";
import { FlipCard } from "../../flip-card";

interface FlexedFlipCardProps {
  order: number;
}

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  gap: 2rem 1rem;
`;

export const FlexedFlipCard = styled(FlipCard)<FlexedFlipCardProps>`
  flex: 1 0 calc(33% - 1rem);
  min-height: 100%;
  order: ${({ order }) => order};

  &.flipped-card {
    flex: 100%;
    order: 0;
  }
`;

export const FrontCard = styled.div``;

export const BackCard = styled.div``;
