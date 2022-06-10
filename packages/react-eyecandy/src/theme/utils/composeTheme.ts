import { Theme } from '../types';

export function composeTheme(
  baseTheme: Partial<Theme>,
  themeChanges: Partial<Theme> = {}
): Partial<Theme> {
  return {
    ...baseTheme,
    ...themeChanges,
  };
}
