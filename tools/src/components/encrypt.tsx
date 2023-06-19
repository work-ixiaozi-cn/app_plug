import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import 'braft-editor/dist/index.css';
import 'braft-extensions/dist/code-highlighter.css';


const Encrypt: FC = () => {
  // if ('serviceWorker' in navigator) {
  //   window.addEventListener('load', () => {
  //     navigator.serviceWorker.register('/sw.js?v=' + new Date().valueOf(), {scope: '/'})
  //       .then((registration: ServiceWorkerRegistration)=>{
  //         console.log('注册成功：', registration)
  //         if (registration.installing) {
  //           console.log("正在安装 Service worker");
  //         } else if (registration.waiting) {
  //           console.log("已安装 Service worker installed");
  //         } else if (registration.active) {
  //           console.log("激活 Service worker");
  //         }
  //       })
  //       .catch((err) => {
  //         console.log('Service Worker registration failed', err)
  //       })
  //   })
  // }
  // setTimeout(() => {
  //   fetch('https://api.xygeng.cn/one').then(async res => {
  //     console.log(await res.json())
  //   })
  // }, 3000)

  return (
    <div className="flex-auto flex flex-col">
      <div className="flex-auto mx-5px mt-20px">
        json
      </div>
      <div>
      json
      </div>
    </div>
  )
};

export default Encrypt;
