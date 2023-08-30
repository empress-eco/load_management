import 'antd/dist/reset.css'
import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.VITE_BASE_NAME ?? 'parlo'}>
    <App/>
    </BrowserRouter>
  </React.StrictMode>,
)