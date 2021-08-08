import React, { useState } from "react";
import noop from "lodash/noop";
import * as S from "./index.styled";

type ModalContextProps = [boolean, ModalHandlers];

interface ModalHandlers {
  setChild: (child: React.ReactNode, show?: boolean) => void;
  toggleDisplay: () => void;
  setDisplay: (isVisible: boolean) => void;
}
const defaultHandlers: ModalHandlers = {
  setChild: noop,
  toggleDisplay: noop,
  setDisplay: noop,
};

const ModalContext = React.createContext<ModalContextProps>([
  false,
  defaultHandlers,
]);

export const ModalProvider: React.FC = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalChild, setModalChild] = useState<React.ReactNode>(<></>);
  const handlers = React.useMemo<ModalHandlers>(() => {
    return {
      setChild: (child, show) => {
        setModalChild(child);
        setShowModal(!!show);
      },
      toggleDisplay: () => {
        setShowModal(prev => !prev);
      },
      setDisplay: isVisible => setShowModal(isVisible),
    };
  }, []);

  const cancelPropagation = (ev: React.MouseEvent<HTMLDivElement>) =>
    ev.stopPropagation();

  return (
    <>
      {showModal && (
        <S.ModalContainer onClick={handlers.toggleDisplay}>
          <S.ModalChildContainer onClick={cancelPropagation}>
            {modalChild}
          </S.ModalChildContainer>
        </S.ModalContainer>
      )}
      <ModalContext.Provider value={[showModal, handlers]}>
        {children}
      </ModalContext.Provider>
    </>
  );
};

export const useModalContext: () => ModalContextProps = () =>
  React.useContext(ModalContext);
