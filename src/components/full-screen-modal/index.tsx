import { faTimes, faWindowMinimize } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import * as S from "./index.styled";

interface FullScreenModalProps {
  onClose: () => void;
  stackedElement?: React.ReactChild;
}

export const FullScreenModal: React.FC<FullScreenModalProps> = ({
  onClose,
  stackedElement,
  children,
}) => {
  const [showStackedElement, setShowStackedElement] = useState(true);
  const toggleStackedElement = () => setShowStackedElement(prev => !prev);

  return (
    <S.Container>
      <S.CloseIconWrapper onClick={onClose}>
        <S.CloseIcon icon={faTimes} />
      </S.CloseIconWrapper>
      <S.ChildWrapper onClick={toggleStackedElement}>{children}</S.ChildWrapper>
      {stackedElement && showStackedElement && (
        <S.StackedElementContainer>
          <S.StackedElementActions>
            <S.IconWrapper onClick={toggleStackedElement}>
              <S.HoveredIcon icon={faWindowMinimize} size="2rem" />
            </S.IconWrapper>
          </S.StackedElementActions>
          <S.StackedElement>
            <S.StackedElementHeader>r/Softwaregore</S.StackedElementHeader>
            {stackedElement}
          </S.StackedElement>
        </S.StackedElementContainer>
      )}
    </S.Container>
  );
};
