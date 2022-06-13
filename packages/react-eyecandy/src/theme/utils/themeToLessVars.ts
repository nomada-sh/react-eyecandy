import { Theme } from '../types';

export function themeToLessVars(theme: Partial<Theme>): {
  [key: string]: string;
} {
  const vars: { [key: string]: string } = {};

  Object.entries(theme).forEach(([key, value]) => {
    // Add @ at start
    let newKey = `@${key}`;
    // Replace _ with -
    newKey = newKey.replace(/_/g, '-');

    vars[newKey] = value;
  });

  return vars;
}
