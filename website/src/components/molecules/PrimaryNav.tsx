import React from 'react';
import {Menu} from 'antd';

export function PrimaryNav() {
  return <Menu
    theme="dark"
    mode="horizontal"
    items={[
      {
        label: 'Nav Item',
        key: '1',
      },
      {
        label: 'Nav Item',
        key: '2',
      },
      {
        label: 'Nav Item',
        key: '3',
      }
    ]}
  />
}
