import { ThemeProvider } from '@nomada-sh/react-eyecandy';
import { ToggleTheme } from './ToggleTheme';

export function App() {
  return (
    <ThemeProvider>
      <ToggleTheme />
    </ThemeProvider>
  );
}
