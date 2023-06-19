import React, { FC, useEffect, useState } from 'react';
import {Avatar, Button, Empty, List, Space, Table, Tag, Typography} from 'antd';
import './virtual:windi.css';
import Header from './components/header';
import { Outlet, Link, useParams } from 'react-router-dom';
import {WgConfig} from "wireguard-tools";

const App: FC = () => {

  const action = () => {

  }

  interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
    tags: string[];
  }

  // @ts-ignore
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address1',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address2',
    },
    {
      title: 'action',
      key: 'action',
      render: () => (
        <Button onClick={action}>操作</Button>
      )
    }
  ];

  const data: DataType[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];

  return (
    <div className='flex h-100vh bg-opacity-80'>
      <Table columns={columns} dataSource={data} />
    </div>
  );
}

export default App;
