import React from 'react';
import { Layout, Typography } from 'antd';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const App: React.FC = () => (
  <Layout>
    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
      <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
        <Title>Title ipsum dolor sit (39 characters)</Title>
        <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Paragraph>
        <Paragraph>
            {`{{> @partial-block}}`}
        </Paragraph>
      </div>
    </Content>
  </Layout>
);

export default App;