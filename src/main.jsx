import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { ThemeConfig } from './themes/themeConfig';
import { ApolloProvider } from '@apollo/client';
import { client } from './config/apollo-client';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <ConfigProvider theme={ThemeConfig}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ConfigProvider>
  </ApolloProvider>
);
