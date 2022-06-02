import React from 'react';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/lib/table';

interface DataType {
  key: string;
  one: string;
  two: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Table Heading 1',
    dataIndex: 'one',
    key: 'one',
  },
  {
    title: 'Table Heading 2',
    dataIndex: 'two',
    key: 'two',
  },
  {
    title: 'Table Heading 3',
    dataIndex: 'two',
    key: 'two',
  },
  {
    title: 'Table Heading 4',
    dataIndex: 'two',
    key: 'two',
  },
  {
    title: 'Table Heading 5',
    dataIndex: 'two',
    key: 'two',
  },
  {
    title: 'Table Heading 6',
    dataIndex: 'two',
    key: 'two',
  },
];

const data: DataType[] = [
  {
    key: '1',
    one: 'value',
    two: 'value',
  },
  {
    key: '2',
    one: 'value',
    two: 'value',
  },
];

const App: React.FC = () => (
    <Table
        columns={columns}
        dataSource={data}
        pagination={false}
    />
);

export default App;