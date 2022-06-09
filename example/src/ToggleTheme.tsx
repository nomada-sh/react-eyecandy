import { Button, Input, Alert, Typography } from 'antd';
import { useTheme } from '@nomada-sh/react-eyecandy';

export function ToggleTheme() {
  const { dark, setDark, modifyTheme } = useTheme();

  return (
    <div>
      <Typography.Paragraph>
        Theme: {dark ? 'dark' : 'light'}
      </Typography.Paragraph>
      <Button
        type="primary"
        onClick={() => {
          setDark(!dark);
        }}
      >
        Toggle Theme
      </Button>
      <Input />
      <input
        type="color"
        onChange={(e) => {
          modifyTheme({
            primary_color: e.target.value,
          })
        }}
      />
      <Alert
        message="Error"
        description="This is an error message about copywriting."
        type="error"
        showIcon
      />
    </div>
  );
}
