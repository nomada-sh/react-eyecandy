import React from 'react';
import { Theme } from './types';

export interface ThemeContextValue {
  dark: boolean;
  setDark: (dark: boolean) => void;
  themeChanges: Partial<Theme>;
  setThemeChanges: (themeChanges: Partial<Theme>) => void;
}

export const ThemeContext = React.createContext<ThemeContextValue>({
  dark: false,
  setDark: () => {},
  themeChanges: {},
  setThemeChanges: () => {},
});

export interface ThemeProviderProps {
  dark?: boolean;
  theme?: Partial<Theme>;
  children: React.ReactNode;
}

export function ThemeProvider({
  children,
  dark: initialDark,
  theme: initialThemeChanges,
}: ThemeProviderProps) {
  const [dark, setDark] = React.useState(Boolean(initialDark));

  const [themeChanges, setThemeChanges] = React.useState<Partial<Theme>>(
    initialThemeChanges || {}
  );

  return (
    <ThemeContext.Provider
      value={{ dark, setDark, themeChanges, setThemeChanges }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
