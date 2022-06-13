import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import { ThemeProvider, useTheme } from './ThemeProvider';
import { DefaultTheme } from './DefaultTheme';
import { DarkTheme } from './DarkTheme';
import { modifyLessVars } from './utils/modifyLessVars';
import { themeToLessVars } from './utils/themeToLessVars';
import { composeTheme } from './utils/composeTheme';
import { Theme } from './types';

jest.mock('./utils/modifyLessVars', () => {
  return {
    modifyLessVars: jest.fn(),
  };
});

test('default props', () => {
  jest.clearAllMocks();

  const wrapper = ({ children }: any) => (
    <ThemeProvider>{children}</ThemeProvider>
  );
  const { result } = renderHook(() => useTheme(), { wrapper });

  expect(result.current.dark).toBe(false);
  expect(result.current.themeChanges).toEqual({});
  expect(result.current.baseDefaultTheme).toEqual(DefaultTheme);
  expect(result.current.baseDarkTheme).toEqual(DarkTheme);
  expect(result.current.currentBaseTheme).toEqual(DefaultTheme);
  expect(result.current.setDark).toBeInstanceOf(Function);
  expect(result.current.setThemeChanges).toBeInstanceOf(Function);
  expect(result.current.toggleDark).toBeInstanceOf(Function);
  expect(modifyLessVars).toHaveBeenCalledTimes(1);
  expect(modifyLessVars).toHaveBeenCalledWith(themeToLessVars(DefaultTheme));
});

test('dark prop', () => {
  jest.clearAllMocks();

  const wrapper = ({ children }: any) => (
    <ThemeProvider dark>{children}</ThemeProvider>
  );
  const { result } = renderHook(() => useTheme(), { wrapper });

  expect(result.current.dark).toBe(true);
  expect(result.current.currentBaseTheme).toEqual(DarkTheme);
  expect(modifyLessVars).toHaveBeenCalledTimes(1);
  expect(modifyLessVars).toHaveBeenCalledWith(themeToLessVars(DarkTheme));
});

test('themeChanges prop', () => {
  jest.clearAllMocks();

  const themeChanges: Partial<Theme> = {
    primary_color: 'green',
    body_background: 'black',
  };
  const wrapper = ({ children }: any) => (
    <ThemeProvider themeChanges={themeChanges}>{children}</ThemeProvider>
  );

  const { result } = renderHook(() => useTheme(), { wrapper });

  expect(result.current.themeChanges).toEqual(themeChanges);

  const composedTheme = composeTheme(DefaultTheme, themeChanges);

  expect(modifyLessVars).toHaveBeenCalledTimes(1);
  expect(modifyLessVars).toHaveBeenCalledWith(themeToLessVars(composedTheme));
});

test('setDark, toggleDark', () => {
  jest.clearAllMocks();

  const wrapper = ({ children }: any) => (
    <ThemeProvider>{children}</ThemeProvider>
  );

  const { result } = renderHook(() => useTheme(), { wrapper });

  expect(result.current.dark).toBe(false);
  expect(result.current.currentBaseTheme).toEqual(DefaultTheme);
  expect(modifyLessVars).toHaveBeenCalledTimes(1);
  expect(modifyLessVars).toHaveBeenCalledWith(themeToLessVars(DefaultTheme));

  act(() => {
    result.current.toggleDark();
  });

  expect(result.current.dark).toBe(true);
  expect(result.current.currentBaseTheme).toEqual(DarkTheme);
  expect(modifyLessVars).toHaveBeenCalledTimes(2);
  expect(modifyLessVars).toHaveBeenCalledWith(themeToLessVars(DarkTheme));

  act(() => {
    result.current.setDark(false);
  });

  expect(result.current.dark).toBe(false);
  expect(result.current.currentBaseTheme).toEqual(DefaultTheme);
  expect(modifyLessVars).toHaveBeenCalledTimes(3);
  expect(modifyLessVars).toHaveBeenCalledWith(themeToLessVars(DefaultTheme));
});

test('setThemeChanges', () => {
  jest.clearAllMocks();

  const wrapper = ({ children }: any) => (
    <ThemeProvider>{children}</ThemeProvider>
  );

  const { result } = renderHook(() => useTheme(), { wrapper });
  const themeChanges: Partial<Theme> = {
    primary_color: 'red',
    body_background: 'blue',
  };

  act(() => {
    result.current.setThemeChanges(themeChanges);
  });

  expect(result.current.themeChanges).toEqual(themeChanges);

  const composedTheme = composeTheme(DefaultTheme, themeChanges);

  expect(modifyLessVars).toHaveBeenCalledTimes(2);
  expect(modifyLessVars).toHaveBeenCalledWith(themeToLessVars(composedTheme));
});

test('clearThemeChanges', () => {
  jest.clearAllMocks();

  const wrapper = ({ children }: any) => (
    <ThemeProvider>{children}</ThemeProvider>
  );

  const { result } = renderHook(() => useTheme(), { wrapper });
  const themeChanges: Partial<Theme> = {
    primary_color: 'red',
    body_background: 'blue',
  };

  act(() => {
    result.current.setThemeChanges(themeChanges);
  });

  expect(result.current.themeChanges).toEqual(themeChanges);

  act(() => {
    result.current.clearThemeChanges();
  });

  expect(result.current.themeChanges).toEqual({});

  expect(modifyLessVars).toHaveBeenCalledTimes(3);
  expect(modifyLessVars).toHaveBeenCalledWith(themeToLessVars(DefaultTheme));
});

test('addThemeChanges', () => {
  jest.clearAllMocks();

  const wrapper = ({ children }: any) => (
    <ThemeProvider>{children}</ThemeProvider>
  );

  const { result } = renderHook(() => useTheme(), { wrapper });

  const themeChanges1: Partial<Theme> = {
    primary_color: 'red',
    text_color: 'white',
  };

  const themeChanges2: Partial<Theme> = {
    body_background: 'blue',
    text_color: 'black',
  };

  const combinedThemeChanges = {
    ...themeChanges1,
    ...themeChanges2,
  };

  act(() => {
    result.current.addThemeChanges(themeChanges1);
  });

  expect(result.current.themeChanges).toEqual(themeChanges1);

  act(() => {
    result.current.addThemeChanges(themeChanges2);
  });

  expect(result.current.themeChanges).toEqual(combinedThemeChanges);

  const composedTheme = composeTheme(DefaultTheme, combinedThemeChanges);

  expect(modifyLessVars).toHaveBeenCalledTimes(3);
  expect(modifyLessVars).toHaveBeenCalledWith(themeToLessVars(composedTheme));
});
