import { Thing } from '@nomada-sh/react-eyecandy'
import '@nomada-sh/react-eyecandy/dist/eyecandy.css';
import { Button } from 'antd';
import React from 'react';

export function App() {
  const [dark, setDark] = React.useState(false);

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          document.documentElement.style.setProperty('--ant-background-color', dark ? '#fff' : '#000');
          setDark(!dark);
        }}
      >
        Toggle Theme
      </Button>
    </div>
  );
}
2