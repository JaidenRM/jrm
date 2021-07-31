import styled from "styled-components";
import { FlipCard } from "../../flip-card";

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  gap: 2rem 1rem;
`;

export const FlexedFlipCard = styled(FlipCard)`
  flex: 0 0 calc(33% - 1rem);
  min-height: 100%;

  &.flipped-card {
    flex: 100%;
  }
`;

export const FrontCard = styled.div``;

export const BackCard = styled.div``;
