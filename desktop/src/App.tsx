import React, { FC, useEffect, useState } from 'react';
import { Avatar, Empty, List, Typography } from 'antd';
import './virtual:windi.css';
import { MoreOutlined, UserOutlined } from '@ant-design/icons';
import Header from './components/header';
import { Outlet, Link, useParams } from 'react-router-dom';
import { Data, Paginate } from './types';

const App: FC = () => {
  const {id} = useParams();
  const items = [
    {
      key: 'welcome',
      label: 'welcome',
      value: 'welcome'
    },
    {
      key: 'base64',
      label: 'base64',
      value: 'base64'
    },
    {
      key: 'json',
      label: 'json',
      value: 'json'
    },
    {
      key: 'time',
      label: '时间',
      value: 'time'
    },
    {
      key: 'encrypt',
      label: '加密',
      value: 'encrypt'
    }
  ]

  return (
    <div className='flex h-100vh'>
      <section className="text-gray-50 bg-light-800 bg-opacity-60 w-150px overscroll-y-auto">
        <List
          header={<Header/>}
          dataSource={items}
          renderItem={(item) => (
            <Link to={item.key}>
              <List.Item className="hover:bg-gray-100">
                <div className='self-center'>{item.label}</div>
              </List.Item>
            </Link>
          )}
        />
      </section>
      <section className="flex-auto bg-light-300 bg-opacity-60 flex flex-col">
        <header className='flex h-57px drag border-bottom-1px' style={{borderBottomColor: 'rgba(5,5,5,0.06)'}}>
          <div className='text-24px self-center flex-auto'>开发工具</div>
          <div className='self-center no-drag'><MoreOutlined /></div>
        </header>
        <Outlet />
      </section>
    </div>
  );
}

export default App;
