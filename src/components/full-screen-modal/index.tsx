import { faTimes, faWindowMinimize } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
      <S.CloseIcon onClick={onClose}>
        <FontAwesomeIcon icon={faTimes} />
      </S.CloseIcon>
      <S.ChildWrapper onClick={toggleStackedElement}>{children}</S.ChildWrapper>
      {stackedElement && showStackedElement && (
        <S.StackedElementContainer>
          <S.StackedElementActions>
            <S.HoveredIcon
              icon={faWindowMinimize}
              onClick={toggleStackedElement}
            />
          </S.StackedElementActions>
          <S.StackedElement>{stackedElement}</S.StackedElement>
        </S.StackedElementContainer>
      )}
    </S.Container>
  );
};
