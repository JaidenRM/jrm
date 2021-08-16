import React, { useState, useEffect, useCallback } from "react";
import map from "lodash/map";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import * as S from "./index.styled";
import { NAV_OPTIONS } from "../../utils/constants/nav";
import { ThemeSwitch } from "../theme-switch";
import { Icon } from "../icon";

interface NavbarProps {
  toggle: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ toggle }) => {
  const [isNavScrolling, setIsNavScrolling] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [isMouseInNav, setIsMouseInNav] = useState(false);
  const [scrollTimerId, setScrollTimerId] = useState<NodeJS.Timer | undefined>(
    undefined
  );

  const onScrollHandler = useCallback(() => {
    setIsNavVisible(true);

    if (window.scrollY >= 80) {
      setIsNavScrolling(true);
      if (!isMouseInNav)
        setScrollTimerId(setTimeout(() => setIsNavVisible(false), 3000));
    } else {
      if (scrollTimerId) clearTimeout(scrollTimerId);
      setIsNavScrolling(false);
    }
  }, [scrollTimerId, isMouseInNav]);

  const onMouseEnterHandler = useCallback(() => {
    setIsMouseInNav(true);
    if (scrollTimerId) clearTimeout(scrollTimerId);
  }, [scrollTimerId]);

  const onMouseLeaveHandler = useCallback(() => setIsMouseInNav(false), []);

  useEffect(() => {
    window.addEventListener("scroll", onScrollHandler, { passive: true });

    return () => {
      if (scrollTimerId) clearTimeout(scrollTimerId);
      window.removeEventListener("scroll", onScrollHandler);
    };
  }, [onScrollHandler, scrollTimerId]);

  return (
    <S.Nav
      isScrolling={isNavScrolling}
      isVisible={isNavVisible}
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
    >
      <S.NavContainer>
        <S.NavLeftWrapper>
          <ThemeSwitch />
        </S.NavLeftWrapper>
        <S.NavMenu>
          {map(NAV_OPTIONS, (opt, idx) => (
            <S.NavMenuItem key={idx}>
              <S.NavLinks
                to={opt.to}
                key={idx}
                duration={500}
                offset={-80}
                smooth
                spy
              >
                {opt.name}
              </S.NavLinks>
            </S.NavMenuItem>
          ))}
        </S.NavMenu>
        <S.NavRightWrapper />
        <S.NavMobileWrapper onClick={toggle}>
          <Icon icon={faBars} />
        </S.NavMobileWrapper>
      </S.NavContainer>
    </S.Nav>
  );
};
