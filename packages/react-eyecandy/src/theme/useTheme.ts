import React from 'react';
import { ThemeContext } from './ThemeProvider';
import { useEffect } from 'react';
import { DarkTheme } from './DarkTheme';
import { DefaultTheme } from './DefaultTheme';
import { themeToLessVars } from './utils/themeToLessVars';

// TODO: Add window.less type
function modifyLessVars(vars: { [key: string]: string }) {
  // @ts-ignore
  if (window.less === undefined)
    throw new Error('useTheme: window.less is undefined');

  // @ts-ignore
  window.less.modifyVars(vars);
}

export function useTheme() {
  const context = React.useContext(ThemeContext);
  const { dark } = context;

  if (!context) throw new Error('useTheme must be used within a ThemeProvider');

  useEffect(() => {
    const vars = themeToLessVars(dark ? DarkTheme : DefaultTheme);
    modifyLessVars(vars);
  }, [dark]);

  return {
    ...context,
    modifyLessVars,
  };
}
