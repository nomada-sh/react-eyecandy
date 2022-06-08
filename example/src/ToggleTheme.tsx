import { Button, Input, Alert, Typography } from 'antd';
import { useTheme } from '@nomada-sh/react-eyecandy';

export function ToggleTheme() {
  const { dark, setDark } = useTheme();

  return (
    <div>
      <Typography.Paragraph>
        Theme: {dark ? 'dark' : 'light'}
      </Typography.Paragraph>
      <Button
        type="primary"
        onClick={() => setDark(!dark)}
      >
        Toggle Theme
      </Button>
      <Input />
      <Alert
        message="Error"
        description="This is an error message about copywriting."
        type="error"
        showIcon
      />
    </div>
  );
}