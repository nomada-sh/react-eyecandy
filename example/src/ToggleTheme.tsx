import {
  useTheme,
  Input,
  Alert,
  Typography,
  Select,
} from '@nomada-sh/react-eyecandy';

const { Paragraph, Title } = Typography;
const { Option } = Select;

export function ToggleTheme() {
  const { themes, switcher, currentTheme } = useTheme();

  return (
    <div
      style={{
        padding: '1rem',
      }}
    >
      <Select
        style={{
          width: '100%',
        }}
        onChange={(theme) => {
          switcher({ theme });
        }}
        value={currentTheme}
      >
        {Object.keys(themes).map((theme) => (
          <Option key={theme} value={theme}>
            {theme[0].toUpperCase() + theme.slice(1)}
          </Option>
        ))}
      </Select>
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
