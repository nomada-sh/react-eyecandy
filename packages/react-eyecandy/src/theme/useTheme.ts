import { useCallback, useContext } from 'react';
import { ThemeContext } from './ThemeProvider';
import { DarkTheme } from './DarkTheme';
import { DefaultTheme } from './DefaultTheme';
import { themeToLessVars } from './utils/themeToLessVars';
import { Theme } from './types';

/**
 * // TODO: Describe
 * @returns
 */
export function useTheme() {
  const ctx = useContext(ThemeContext);

  if (!ctx) throw new Error('useTheme must be used within a ThemeProvider');

  const setDark = useCallback(
    /**
     * // TODO: Describe
     * @param dark
     */
    (dark: boolean) => {
      composeTheme(dark ? DarkTheme : DefaultTheme, ctx.themeChanges);
      ctx.setDark(dark);
    },
    [ctx.setDark, ctx.themeChanges]
  );

  const modifyTheme = useCallback(
    /**
     * // TODO: Describe
     * @param themeChanges
     */
    (themeChanges: Partial<Theme>) => {
      composeTheme(ctx.dark ? DarkTheme : DefaultTheme, themeChanges);
      ctx.setThemeChanges(themeChanges);
    },
    [ctx.setThemeChanges, ctx.dark]
  );

  const toggleDark = useCallback(
    /**
     * // TODO: Describe
     */
    () => setDark(!ctx.dark),
    [setDark, ctx.dark]
  );

  return {
    dark: ctx.dark,
    setDark,
    toggleDark,
    modifyTheme,
  };
}

/**
 * // TODO: Describe
 * @param baseTheme
 * @param themeChanges
 */
function composeTheme(
  baseTheme: Partial<Theme>,
  themeChanges: Partial<Theme> = {}
) {
  const vars = themeToLessVars({
    ...baseTheme,
    ...themeChanges,
  });
  modifyLessVars(vars);
}

/**
 * // TODO: Describe
 * @param vars
 */
function modifyLessVars(vars: { [key: string]: string }) {
  // TODO: Add window.less type and remove ts-ignore
  // @ts-ignore
  if (window.less === undefined)
    console.warn('useTheme: window.less is undefined');
  // @ts-ignore
  else window.less.modifyVars(vars);
}
