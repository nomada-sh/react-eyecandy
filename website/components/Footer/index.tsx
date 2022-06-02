import React from 'react';
import { Layout  } from 'antd';

const { Footer } = Layout;

function App() {
  return (
    <Layout className="layout">
      <Footer style={{ textAlign: 'center' }}>©2022 Footer</Footer>
    </Layout>
  );
}

export default App;
