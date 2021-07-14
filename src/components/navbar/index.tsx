import React from "react"
import { FaBars } from "react-icons/fa"
import * as S from "./index.styled"

export const Navbar = () => {
  return (
    <S.Nav>
      <S.NavContainer>
        <S.NavMobileWrapper>
          <FaBars />
        </S.NavMobileWrapper>
        <S.NavMenu>
          <S.NavMenuItem>
            <S.NavLinks to="/option1">Option 1</S.NavLinks>
          </S.NavMenuItem>
          <S.NavMenuItem>
            <S.NavLinks to="/option2">Option 2</S.NavLinks>
          </S.NavMenuItem>
          <S.NavMenuItem>
            <S.NavLinks to="/option3">Option 3</S.NavLinks>
          </S.NavMenuItem>
        </S.NavMenu>
      </S.NavContainer>
    </S.Nav>
  )
}
