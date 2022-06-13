import { Button, Input, Alert, Typography } from 'antd';
import { useTheme } from '@nomada-sh/react-eyecandy';

const { Paragraph, Title } = Typography;

export function ToggleTheme() {
  const { dark, toggleDark, setThemeChanges, clearThemeChanges } = useTheme();

  return (
    <div>
      <Typography.Paragraph>
        Theme: {dark ? 'dark' : 'light'}
      </Typography.Paragraph>
      <Button
        type="primary"
        onClick={() => {
          toggleDark();
        }}
      >
        Toggle dark theme
      </Button>
      <Button
        onClick={() => {
          clearThemeChanges();
        }}
      >
        Clear theme changes
      </Button>
      <div>
        <label>Primary color </label>
        <input
          type="color"
          onChange={(e) => {
            setThemeChanges({
              primary_color: e.target.value,
            });
          }}
        />
      </div>
      <div>
        <label>Text color </label>
        <input
          type="color"
          onChange={(e) => {
            setThemeChanges({
              text_color: e.target.value,
            });
          }}
        />
      </div>
      <div>
        <label>Body background </label>
        <input
          type="color"
          onChange={(e) => {
            setThemeChanges({
              body_background: e.target.value,
            });
          }}
        />
      </div>
      <Input />
      <Input.Search />
      <Alert
        message="Error"
        description="This is an error message."
        type="error"
        showIcon
      />
      <Alert
        message="Success"
        description="This is a success message."
        type="success"
        showIcon
      />
      <Title level={1}>Title 1</Title>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed hic, quis
        maiores impedit quas a ullam tempora, quisquam provident soluta saepe!
        Assumenda deleniti reiciendis tenetur eaque, vero tempora libero
        blanditiis? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Dolore id quis, blanditiis dolores officia vitae rem qui eos, officiis
        quia voluptate cupiditate voluptatibus iure magnam assumenda illo ex
        corrupti voluptatem!
      </Paragraph>
      <Title level={2}>Title 2</Title>
      <Title level={3}>Title 3</Title>
      <Title level={4}>Title 4</Title>
      <Title level={5}>Title 5</Title>
    </div>
  );
}
