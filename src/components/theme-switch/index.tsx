import React from "react";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { PrimaryButton } from "../shared/buttons.styled";
import * as S from "./index.styled";
import { useDefaultThemeContext } from "../../providers/theme";
import { DARK_THEME } from "../../theme";
import { Icon } from "../icon";

export const ThemeSwitch: React.FC = () => {
  const [theme, themeHandlers] = useDefaultThemeContext();

  return (
    <S.SwitchWrapper>
      <PrimaryButton onClick={themeHandlers.toggleDarkMode}>
        <Icon icon={theme.id === DARK_THEME.id ? faSun : faMoon} size="24px" />
      </PrimaryButton>
    </S.SwitchWrapper>
  );
};
