import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import { ThemeProvider } from './ThemeProvider';
import { useTheme } from './useTheme';
import { DefaultTheme } from './DefaultTheme';
import { DarkTheme } from './DarkTheme';
import { modifyLessVars } from './utils/modifyLessVars';
import { themeToLessVars } from './utils/themeToLessVars';
import { composeTheme } from './utils/composeTheme';
import { Theme } from './types';

jest.mock('./utils/modifyLessVars', () => {
  return {
    modifyLessVars: jest.fn()
  }
});

test('default values', () => {
  jest.clearAllMocks();

  const wrapper = ({ children }: any) => (
    <ThemeProvider>{children}</ThemeProvider>
  );
  const { result } = renderHook(() => useTheme(), { wrapper });

  expect(result.current.dark).toBe(false);
  expect(result.current.themeChanges).toEqual({});
  expect(result.current.baseDefaultTheme).toEqual(DefaultTheme);
  expect(result.current.baseDarkTheme).toEqual(DarkTheme);
  expect(result.current.composedTheme).toEqual(DefaultTheme);
  expect(result.current.setDark).toBeInstanceOf(Function);
  expect(result.current.setThemeChanges).toBeInstanceOf(Function);
  expect(result.current.toggleDark).toBeInstanceOf(Function);
  expect(modifyLessVars).toHaveBeenCalledTimes(1);
  expect(modifyLessVars).toHaveBeenCalledWith(
    themeToLessVars(DefaultTheme),
  );
});

test('uses default theme', () => {
  jest.clearAllMocks();

  const wrapper = ({ children }: any) => (
    <ThemeProvider>{children}</ThemeProvider>
  );
  const { result } = renderHook(() => useTheme(), { wrapper });

  expect(result.current.dark).toBe(false);
  expect(result.current.composedTheme).toEqual(DefaultTheme);
  expect(modifyLessVars).toHaveBeenCalledTimes(1);
  expect(modifyLessVars).toHaveBeenCalledWith(
    themeToLessVars(DefaultTheme),
  );
});

test('uses dark theme', () => {
  jest.clearAllMocks();

  const wrapper = ({ children }: any) => (
    <ThemeProvider dark>{children}</ThemeProvider>
  );
  const { result } = renderHook(() => useTheme(), { wrapper });

  expect(result.current.dark).toBe(true);
  expect(result.current.composedTheme).toEqual(DarkTheme);
  expect(modifyLessVars).toHaveBeenCalledTimes(1);
  expect(modifyLessVars).toHaveBeenCalledWith(
    themeToLessVars(DarkTheme),
  );
});

test('can toggle theme', () => {
  jest.clearAllMocks();

  const wrapper = ({ children }: any) => (
    <ThemeProvider>{children}</ThemeProvider>
  );

  const { result } = renderHook(() => useTheme(), { wrapper });

  expect(result.current.dark).toBe(false);
  expect(result.current.composedTheme).toEqual(DefaultTheme);
  expect(modifyLessVars).toHaveBeenCalledTimes(1);
  expect(modifyLessVars).toHaveBeenCalledWith(
    themeToLessVars(DefaultTheme),
  );

  act(() => {
    result.current.toggleDark();
  });

  expect(result.current.dark).toBe(true);
  expect(result.current.composedTheme).toEqual(DarkTheme);
  expect(modifyLessVars).toHaveBeenCalledTimes(2);
  expect(modifyLessVars).toHaveBeenCalledWith(
    themeToLessVars(DarkTheme),
  );

  act(() => {
    result.current.setDark(false);
  });

  expect(result.current.dark).toBe(false);
  expect(result.current.composedTheme).toEqual(DefaultTheme);
  expect(modifyLessVars).toHaveBeenCalledTimes(3);
  expect(modifyLessVars).toHaveBeenCalledWith(
    themeToLessVars(DefaultTheme),
  );
});

test('can change theme', () => {
  jest.clearAllMocks();

  const wrapper = ({ children }: any) => (
    <ThemeProvider>{children}</ThemeProvider>
  );

  const { result } = renderHook(() => useTheme(), { wrapper });
  const themeChanges: Partial<Theme> = {
    primary_color: 'red',
    body_background: 'blue',
  }

  act(() => {
    result.current.setThemeChanges(themeChanges);
  })

  expect(result.current.themeChanges).toEqual(themeChanges);

  const composedTheme = composeTheme(DefaultTheme, themeChanges);
  expect(result.current.composedTheme).toEqual(composedTheme);

  expect(modifyLessVars).toHaveBeenCalledTimes(2);
  expect(modifyLessVars).toHaveBeenCalledWith(
    themeToLessVars(composedTheme),
  );
})
