import { ThemeSwitcherProvider } from 'react-css-theme-switcher';
import { ToggleTheme } from './ToggleTheme';

const themes = {
  light: 'theme-light.css',
  dark: 'theme-dark.css',
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
2
