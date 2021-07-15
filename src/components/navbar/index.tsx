import React, { useState } from "react"
import map from "lodash/map"
import { FaBars } from "react-icons/fa"
import * as S from "./index.styled"
import { NAV_OPTIONS } from "../../utils/constants/nav"
import { useEffect } from "react"

interface NavbarProps {
  toggle: () => void
}

export const Navbar: React.FC<NavbarProps> = ({ toggle }) => {
  const [isNavScrolling, setIsNavScrolling] = useState(false)

  const onScrollHandler = () => void setIsNavScrolling(window.scrollY >= 80)

  useEffect(() => {
    window.addEventListener("scroll", onScrollHandler)

    return () => window.removeEventListener("scroll", onScrollHandler)
  }, [])

  return (
    <S.Nav isNavScrolling={isNavScrolling}>
      <S.NavContainer>
        <S.NavMobileWrapper>
          <FaBars onClick={toggle} />
        </S.NavMobileWrapper>
        <S.NavMenu>
          {map(NAV_OPTIONS, (opt, idx) => (
            <S.NavMenuItem>
              <S.NavLinks to={opt.to} key={idx} duration={500} smooth spy>
                {opt.name}
              </S.NavLinks>
            </S.NavMenuItem>
          ))}
        </S.NavMenu>
      </S.NavContainer>
    </S.Nav>
  )
}
