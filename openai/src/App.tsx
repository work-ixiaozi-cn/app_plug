import React, { FC, useEffect, useState } from 'react';
import './App.css';
import { Avatar, Empty, List, Typography } from 'antd';
import './virtual:windi.css';
import { MoreOutlined, UserOutlined } from '@ant-design/icons';
import Header from './components/header';
import { Outlet, Link, useParams } from 'react-router-dom';
import { Data, Paginate } from './types';

const App: FC = () => {
  const {id} = useParams();
  const [paginate, setPaginate] = useState<Paginate<Data>>({page: 1, page_size: 15, page_count: 1, data: []});
  useEffect(()=>{
    window.electron.db.paginate("abc").then((res: Paginate<Data>)=>{
      console.log(res);
      setPaginate(res)
    })
  },[])
  
  return (
    <div className='flex h-100vh'>
      <section className="text-gray-50 bg-light-800 bg-opacity-60 w-250px overscroll-y-auto">
        <List
          header={<Header/>}
          dataSource={paginate.data}
          renderItem={(item) => (
            <Link to={item.uuid}>
              <List.Item
                className="!flex gap-x-5px hover:bg-gray-100"
              >
                <Avatar size={32} icon={<UserOutlined />} />
                <Typography.Text>{item.uuid}-{item.value}</Typography.Text>
              </List.Item>
            </Link>
          )}
        />
      </section>
      <section className="flex-auto bg-light-300 bg-opacity-60 flex flex-col">
        <header className='flex'>
          <div className='text-32px self-center'>xxxxxxxxx</div>
          <div className='flex-auto drag'></div>
          <div><MoreOutlined /></div>
        </header>
        {id ? <Outlet /> : <div className='self-center flex'><Empty className='self-center' /></div>}
      </section>
    </div>
  );
}

export default App;
