import map from "lodash/map";
import React from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as S from "./index.styled";
import { NAV_OPTIONS } from "../../utils/constants/nav";

interface TopbarProps {
  isOpen: boolean;
  toggle: () => void;
}

export const Topbar: React.FC<TopbarProps> = ({ isOpen, toggle }) => {
  return (
    <S.TopbarContainer isOpen={isOpen}>
      <S.IconWrapper onClick={toggle}>
        <FontAwesomeIcon icon={faTimes} />
      </S.IconWrapper>
      <S.TopbarMenuWrapper>
        {map(NAV_OPTIONS, (nav, idx) => (
          <S.TopbarLink to={nav.to} onClick={toggle} key={idx}>
            {nav.name}
          </S.TopbarLink>
        ))}
      </S.TopbarMenuWrapper>
    </S.TopbarContainer>
  );
};
