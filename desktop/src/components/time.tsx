import React, { FC, useEffect, useState } from 'react';
import 'braft-editor/dist/index.css';
import 'braft-extensions/dist/code-highlighter.css';
import { Button, Input, Space, message, DatePicker } from 'antd';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import 'dayjs/locale/zh-cn';
dayjs.extend(utc);
dayjs.locale('zh-cn');

const Time: FC = () => {
  const [localTime, setLocalTime] = useState(dayjs());
  const [stringTime, setStringTime] = useState(dayjs());
  const [stampTime, setStampTime] = useState(dayjs());

  const [messageApi, contextHolder] = message.useMessage();

  setInterval(()=> setLocalTime(dayjs()),100);

  const copy = (text: string) => {
    navigator.clipboard.writeText(text)
    messageApi.success('复制成功', 1000);
  }
  const stamp2time = (e: {target: {value: string}}) => {
    let value = parseInt(e.target.value)
    if(value.toString() === 'NaN') value = 0;
    setStampTime(dayjs.unix(value))
  }
  const string2time = (newTime: any) => {
    newTime && setStringTime(newTime)
  }


  useEffect(()=>{
    setStringTime(dayjs())
    setStringTime(dayjs())
  },[])

  return (
    <div className="flex-auto flex flex-col">
      {contextHolder}
        <div className="flex-auto flex flex-col my-15px" >
          <div className='flex-1'>
            <Space.Compact>
              <Button className="w-120px" disabled>本地时间</Button>
              <Button type="primary" onClick={() => copy(localTime.format('YYYY-MM-DD HH:mm:ss'))}>{localTime.format('YYYY-MM-DD HH:mm:ss')}</Button>
              <Button type="primary" onClick={() => copy(localTime.unix().toString())}>{localTime.unix()}</Button>
              <Button type="primary" onClick={() => copy(`${localTime.unix()}.${localTime.valueOf()%1000}`)}>{localTime.unix()}.{localTime.valueOf()%1000}</Button>
            </Space.Compact>
            <div className='my-15px' />

            <Space.Compact>
              <Button className="w-120px" disabled>转时间戳</Button>
              <DatePicker showTime onChange={string2time} onOk={string2time} defaultValue={stringTime} />
              <Button type="primary" onClick={() => copy(stringTime.unix().toString())}>{stringTime.unix()}</Button>
            </Space.Compact>

            <div className='my-15px' />

            <Space.Compact>
              <Button className="w-120px" disabled>转日期</Button>
              <div><Input placeholder="xxxxxxx" onChange={stamp2time} value={stampTime.unix()} allowClear /></div>
              <Button type="primary" onClick={() => copy(stampTime.unix().toString())}>{stampTime.format('YYYY-MM-DD HH:mm:ss')}</Button>
            </Space.Compact>
          </div>
        </div>
    </div>
  )
};

export default Time;
