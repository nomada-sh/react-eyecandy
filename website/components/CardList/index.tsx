import React, { useState, useEffect } from 'react';
import { Card, Row, Col } from 'antd';

import cover from '../../assets/400x300.png';

const { Meta } = Card;

interface Props {
  size: number
}

const App: React.FC = ({ size = 1 }: Props) => {

  const [data, setData] = useState<number[]>([]);

  function setInfo() {
    let count = 1;
    const list = [];
    while(count <= size) {
      list.push(count);
      count++;
    }
    setData(list);
  }

  useEffect(setInfo, [size]);

  return (
    <Row gutter={[16, 16]} justify="center" align="middle">
      {
        data.map(key => (
          <Col xs={24} md={12} key={key}>
            <Card
              hoverable
              style={{ width: 400 }}
              cover={<img alt="cover" src={cover} />}
            >
              <Meta
                  title="Card Title"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />
            </Card>
          </Col>
        ))
      }
    </Row>
  );
};

export default App;