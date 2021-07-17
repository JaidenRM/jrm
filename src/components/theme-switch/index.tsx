import React from "react";
import { ImSun } from "react-icons/im";
import { FaRegMoon } from "react-icons/fa";
import { PrimaryButton } from "../shared/buttons.styled";
import * as S from "./index.styled";
import { useDefaultThemeContext } from "../../providers/theme";
import { DARK_THEME } from "../../content/theme";

export const ThemeSwitch: React.FC = () => {
  const [theme, themeHandlers] = useDefaultThemeContext();

  return (
    <S.SwitchWrapper>
      <PrimaryButton onClick={themeHandlers.toggleDarkMode}>
        <S.IconWrapper>
          {theme.id === DARK_THEME.id ? <ImSun /> : <FaRegMoon />}
        </S.IconWrapper>
      </PrimaryButton>
    </S.SwitchWrapper>
  );
};
