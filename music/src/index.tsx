import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ConfigProvider } from 'antd';
import { Routes, HashRouter as Router, Route } from 'react-router-dom';
import Content from './components/content';
import buffer from "buffer";

if (typeof window.Buffer === 'undefined') {
    window.Buffer = buffer.Buffer
}

ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
).render(
  <ConfigProvider>
    <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/:id" element={<Content />} />
          </Route>
        </Routes>
      </Router>
  </ConfigProvider>
);
