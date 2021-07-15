import React from "react"
import map from "lodash/map"
import { FaBars } from "react-icons/fa"
import * as S from "./index.styled"
import { NAV_OPTIONS } from "../../utils/constants/nav"

interface NavbarProps {
  toggle: () => void
}

export const Navbar: React.FC<NavbarProps> = ({ toggle }) => {
  return (
    <S.Nav>
      <S.NavContainer>
        <S.NavMobileWrapper>
          <FaBars onClick={toggle} />
        </S.NavMobileWrapper>
        <S.NavMenu>
          {map(NAV_OPTIONS, (opt, idx) => (
            <S.NavMenuItem>
              <S.NavLinks to={opt.to} key={idx}>
                {opt.name}
              </S.NavLinks>
            </S.NavMenuItem>
          ))}
        </S.NavMenu>
      </S.NavContainer>
    </S.Nav>
  )
}
