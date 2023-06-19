import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ConfigProvider } from 'antd';
import { Routes, HashRouter as Router, Route } from 'react-router-dom';
import Json from './components/json';
import Base64 from './components/base64';
import Time from './components/time';
import Encrypt from './components/encrypt';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <ConfigProvider>
    <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/json" element={<Json />} />
            <Route path="/base64" element={<Base64 />} />
            <Route path="/time" element={<Time />} />
            <Route path="/encrypt" element={<Encrypt />} />
          </Route>
        </Routes>
      </Router>
  </ConfigProvider>
);
