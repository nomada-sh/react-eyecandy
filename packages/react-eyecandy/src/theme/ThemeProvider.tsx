import React, { useCallback, useState } from 'react';
import { useEffect } from 'react';
import { useMemo } from 'react';
import { DarkTheme } from './DarkTheme';
import { DefaultTheme } from './DefaultTheme';
import { Theme } from './types';
import { composeTheme } from './utils/composeTheme';
import { modifyLessVars } from './utils/modifyLessVars';
import { themeToLessVars } from './utils/themeToLessVars';

export interface ThemeContextValue {
  dark: boolean;
  setDark: (dark: boolean) => void;
  themeChanges: Partial<Theme>;
  setThemeChanges: (themeChanges: Partial<Theme>) => void;
  toggleDark: () => void;
  baseDarkTheme: Partial<Theme>;
  baseDefaultTheme: Partial<Theme>;
  currentBaseTheme: Partial<Theme>;
  composedTheme: Partial<Theme>;
}

export const ThemeContext = React.createContext<ThemeContextValue>({
  dark: false,
  setDark: () => {},
  themeChanges: {},
  setThemeChanges: () => {},
  toggleDark: () => {},
  baseDarkTheme: DarkTheme,
  baseDefaultTheme: DefaultTheme,
  currentBaseTheme: DefaultTheme,
  composedTheme: DefaultTheme,
});

export interface ThemeProviderProps {
  dark?: boolean;
  themeChanges?: Partial<Theme>;
  children: React.ReactNode;
}

export function ThemeProvider({
  children,
  dark: initialDark,
  themeChanges: initialThemeChanges,
}: ThemeProviderProps) {
  const [dark, setDark] = useState(Boolean(initialDark));

  const toggleDark = useCallback(() => setDark(!dark), [dark]);

  const [themeChanges, setThemeChanges] = useState<Partial<Theme>>(
    initialThemeChanges || {}
  );

  const [baseDefaultTheme, setDefaultTheme] = useState<Partial<Theme>>(
    DefaultTheme
  );
  const [baseDarkTheme, setDarkTheme] = useState<Partial<Theme>>(DarkTheme);

  const currentBaseTheme = dark ? baseDarkTheme : baseDefaultTheme;

  const composedTheme = useMemo(
    () => composeTheme(currentBaseTheme, themeChanges),
    [currentBaseTheme, themeChanges]
  );

  useEffect(() => {
    // This is the line that actually modifies the less variables.
    modifyLessVars(themeToLessVars(composedTheme));
  }, [composedTheme]);

  return (
    <ThemeContext.Provider
      value={{
        dark,
        setDark,
        themeChanges,
        setThemeChanges,
        toggleDark,
        baseDefaultTheme,
        baseDarkTheme,
        currentBaseTheme,
        composedTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
