import * as S from "./index.styled"
import map from "lodash/map"
import { NAV_OPTIONS } from "../../utils/constants/nav"
import React from "react"

interface TopbarProps {
  isOpen: boolean
  toggle: () => void
}

export const Topbar: React.FC<TopbarProps> = ({ isOpen, toggle }) => {
  return (
    <S.TopbarContainer isOpen={isOpen}>
      <S.IconWrapper>
        <S.CloseIcon onClick={toggle} />
      </S.IconWrapper>
      <S.TopbarMenuWrapper>
        {map(NAV_OPTIONS, (nav, idx) => (
          <S.TopbarLink to={nav.to} onClick={toggle} key={idx}>
            {nav.name}
          </S.TopbarLink>
        ))}
      </S.TopbarMenuWrapper>
    </S.TopbarContainer>
  )
}
