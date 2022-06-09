import React from 'react';

export interface ThemeContextValue {
  dark: boolean;
  setDark: (dark: boolean) => void;
}

export const ThemeContext = React.createContext<ThemeContextValue>({
  dark: false,
  setDark: () => {},
});

export interface ThemeProviderProps {
  dark?: boolean;
  children: React.ReactNode;
}

export function ThemeProvider({
  children,
  dark: initialDark,
}: ThemeProviderProps) {
  const [dark, setDark] = React.useState(Boolean(initialDark));

  return (
    <ThemeContext.Provider value={{ dark, setDark }}>
      {children}
    </ThemeContext.Provider>
  );
}
