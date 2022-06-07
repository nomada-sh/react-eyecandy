import { ThemeSwitcherProvider } from 'react-css-theme-switcher';
import { ToggleTheme } from './ToggleTheme';

const themes = {
  light: `${process.env.PUBLIC_URL}/css/theme-light.css`,
  dark: `${process.env.PUBLIC_URL}/css/theme-dark.css`,
};

export function App() {
  return (
    <ThemeSwitcherProvider
      themeMap={themes}
      defaultTheme="light"
    >
      <ToggleTheme />
    </ThemeSwitcherProvider>
  );
}
