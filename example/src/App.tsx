import { ThemeProvider } from '@nomada-sh/react-eyecandy';
import { ToggleTheme } from './ToggleTheme';
import 'antd/dist/antd.css';

export function App() {
  return (
    <ThemeProvider>
      <ToggleTheme />
    </ThemeProvider>
  );
}
