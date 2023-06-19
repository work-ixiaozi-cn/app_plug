import React, { FC, useState } from 'react';
import 'braft-editor/dist/index.css';
import 'braft-extensions/dist/code-highlighter.css';
import { Input, Radio, Upload, UploadProps } from 'antd';
import { InboxOutlined } from '@ant-design/icons';


const Base64: FC = () => {
  const [toggle, setToggle] = useState('stringEncode');
  const [stringEncodeValue, setStringEncodeValue] = useState("")
  const [stringDecodeValue, setStringDecodeValue] = useState("")
  const [fileDecodeValue, setfileDecodeValue] = useState("")
  const fileProps: UploadProps = {
    beforeUpload(file){
      const reader = new FileReader()
      reader.readAsDataURL(file);
      // data:${file.type};base64,
      reader.onload = () => {
        setfileDecodeValue(`${btoa(reader.result as string)}`)
      }
      return false;
    },
  }

  return (
    <div className="flex-auto flex flex-col">
      <div className="m-15px">
        <Radio.Group value={toggle} onChange={(e) => setToggle(e.target.value)}>
          <Radio.Button value="stringEncode">字符串编码</Radio.Button>
          <Radio.Button value="stringDecode">字符串解码</Radio.Button>
          <Radio.Button value="fileEncode">文件编码</Radio.Button>
          <Radio.Button value="fileDecode">文件解码</Radio.Button>
        </Radio.Group>
      </div>
      {toggle === 'stringEncode' && (
        <div className="flex-auto flex flex-col my-5px" >
          <div className='flex-1'>
            <Input.TextArea
              className='!h-full !w-full !resize-none hover:border-none rounded-none focus:shadow-none'
              placeholder="字符串转Base64"
              onChange={(e: {currentTarget: {value: string}})=>setStringEncodeValue(btoa(e.currentTarget.value))}
              />
          </div>
          <div className='flex-1'>
            <Input.TextArea value={stringEncodeValue} className='!h-full !w-full !resize-none hover:border-none rounded-none focus:shadow-none' placeholder="maxLength is 6" disabled />
          </div>
        </div>
      ) }

      {toggle === 'stringDecode' && (
        <div className="flex-auto flex flex-col my-5px" >
          <div className='flex-1'>
            <Input.TextArea
              className='!h-full !w-full !resize-none hover:border-none rounded-none focus:shadow-none'
              placeholder="字符串转Base64"
              onChange={(e: {currentTarget: {value: string}})=> {
                let v = "";
                try{v = atob(e.currentTarget.value)}catch(e){}
                setStringDecodeValue(v)
              }}
              />
          </div>
          <div className='flex-1'>
            <Input.TextArea value={stringDecodeValue} className='!h-full !w-full !resize-none hover:border-none rounded-none focus:shadow-none' placeholder="maxLength is 6" disabled />
          </div>
        </div>
      ) }

      {toggle === 'fileEncode' && (
        <div className="flex-auto flex flex-col my-5px" >
          <div className='flex-1'>
            <Upload.Dragger {...fileProps}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">Click or drag file to this area to upload</p>
              <p className="ant-upload-hint">
                Support for a single or bulk upload. Strictly prohibited from uploading company data or other
                banned files.
              </p>
            </Upload.Dragger>
          </div>
          <div className='flex-1'>
            <Input.TextArea value={fileDecodeValue} className='!h-full !w-full !resize-none hover:border-none rounded-none focus:shadow-none' placeholder="maxLength is 6" disabled />
          </div>
        </div>
      ) }

      {toggle === 'fileDecode' && (
        <div className="flex-auto flex flex-col my-5px" >
          <div className='flex-1'>
            <Input.TextArea
              className='!h-full !w-full !resize-none hover:border-none rounded-none focus:shadow-none'
              placeholder="字符串转Base64"
              onChange={async (e: {currentTarget: {value: string}})=> {
                const raw = atob(e.currentTarget.value)
                const buffer = new Uint8Array(raw.length);
                for (let i = 0; i < raw.length; i++) {
                  buffer[i] = raw.charCodeAt(i);
                }
                console.log(buffer.toString())
                const match = raw.match(/^data:([^;]+);/);
                if(match) {
                  var blob = new Blob([buffer], {type: match[1]});
                const handle = await showSaveFilePicker({
                  suggestedName: 'download',
                });
                // Write the blob to the file.
                const writable = await handle.createWritable();
                await writable.write(blob);
                await writable.close();
                return;
                  // console.log({blob});
                  // // // 创建 URL 对象
                  // var url = URL.createObjectURL(blob);
                  // console.log({url});
                  // // // 创建 a 元素
                  // var a = document.createElement("a");

                  // // // 设置 a 元素的 href 和 download 属性
                  // a.href = url;
                  // a.download = "download";

                  // // // 模拟点击 a 元素
                  // a.click();
                  // // // 释放 URL 对象
                  // URL.revokeObjectURL(url);
                }

              }}
              />
          </div>
        </div>
      ) }

    </div>
  )
};

export default Base64;
