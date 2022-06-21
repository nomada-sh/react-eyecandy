import { ThemeProvider } from '@nomada-sh/react-eyecandy';
import { ToggleTheme } from './ToggleTheme';
import 'antd/dist/antd.less';

const themes = {
  default: process.env.PUBLIC_URL + '/css/antd.min.css',
  dark: process.env.PUBLIC_URL + '/css/antd.dark.min.css',
  compact: process.env.PUBLIC_URL + '/css/antd.compact.min.css',
};

export function App() {
  return (
    <ThemeProvider defaultTheme="default" themeMap={themes}>
      <ToggleTheme />
    </ThemeProvider>
  );
}
