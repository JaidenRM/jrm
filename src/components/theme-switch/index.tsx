import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { PrimaryButton } from "../shared/buttons.styled";
import * as S from "./index.styled";
import { useDefaultThemeContext } from "../../providers/theme";
import { DARK_THEME } from "../../theme";

export const ThemeSwitch: React.FC = () => {
  const [theme, themeHandlers] = useDefaultThemeContext();

  return (
    <S.SwitchWrapper>
      <PrimaryButton onClick={themeHandlers.toggleDarkMode}>
        <S.IconWrapper>
          <FontAwesomeIcon icon={theme.id === DARK_THEME.id ? faSun : faMoon} />
        </S.IconWrapper>
      </PrimaryButton>
    </S.SwitchWrapper>
  );
};
