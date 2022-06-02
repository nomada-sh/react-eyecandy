import React from 'react';
import { Layout, Menu } from 'antd';

const { Header } = Layout;

const App: React.FC = () => (
  <Layout>
    <Header style={{  zIndex: 1, width: '100%' }}>
        <div className="logo" />
        <Menu
            mode="horizontal"
            defaultSelectedKeys={['2']}
            items={new Array(3).fill(null).map((_, index) => ({
                key: String(index + 1),
                label: `Nav Item`,
            }))}
        />
    </Header>
  </Layout>
);

export default App;