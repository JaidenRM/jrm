import React, { useEffect, useState } from "react";
import keys from "lodash/keys";
import some from "lodash/some";
import noop from "lodash/noop";
import { ThemeProvider } from "styled-components";
import { ThemeSchema } from "../../@types/theme";
import { DARK_THEME, LIGHT_THEME } from "../../theme";
import { getFromLS, setToLS } from "../../utils/local-storage";
import { KEYS } from "../../utils/constants/local-storage";
import { GlobalStyles } from "../../theme/global-styles";

type ThemeBank = { [id: string]: ThemeSchema };
type ThemeContextProps = [ThemeSchema, ThemeHandlers];

interface ThemeHandlers {
  setTheme: (theme: ThemeSchema) => void;
  toggleDarkMode: () => void;
  getAvailableThemes: () => ThemeBank;
}
const defaultHandlers: ThemeHandlers = {
  setTheme: noop,
  toggleDarkMode: noop,
  getAvailableThemes: () => ({}),
};

const ThemeContext = React.createContext<ThemeContextProps>([
  LIGHT_THEME,
  defaultHandlers,
]);

export const DefaultThemeProvider: React.FC = ({ children }) => {
  const [themeBank] = useState<ThemeBank>({
    [DARK_THEME.id]: DARK_THEME,
    [LIGHT_THEME.id]: LIGHT_THEME,
  });
  const [theme, setTheme] = useState(LIGHT_THEME);
  const [isThemeLoaded, setIsThemeLoaded] = useState(false);
  const handlers = React.useMemo<ThemeHandlers>(() => {
    return {
      setTheme: newTheme => {
        if (some(keys(themeBank), key => key === newTheme.id)) {
          setTheme(newTheme);
          setToLS(KEYS.THEME, newTheme.id);
        }
      },
      toggleDarkMode: () => {
        const newTheme = theme.id === LIGHT_THEME.id ? DARK_THEME : LIGHT_THEME;
        setTheme(newTheme);
        setToLS(KEYS.THEME, newTheme.id);
      },
      getAvailableThemes: () => themeBank,
    };
  }, [themeBank, theme]);

  useEffect(() => {
    const lsTheme = getFromLS(KEYS.THEME);

    if (lsTheme && some(keys(themeBank), key => key === lsTheme))
      setTheme(themeBank[lsTheme]);

    setIsThemeLoaded(true);
  }, [themeBank]);

  return (
    <>
      {isThemeLoaded && (
        <ThemeContext.Provider value={[theme, handlers]}>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            {children}
          </ThemeProvider>
        </ThemeContext.Provider>
      )}
    </>
  );
};

export const useDefaultThemeContext: () => ThemeContextProps = () =>
  React.useContext(ThemeContext);
