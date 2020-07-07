import React, { useState } from 'react';
import { Layout } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons';
import { Router } from 'react-router-dom';
import { createHashHistory } from "history";
import MenuComponent from '../Menu/index';
import ContentMap from '../Content/index';
import './index.css';
const history = createHashHistory();

const { Header, Sider } = Layout;

const SiderDemo  =() => {
  const [ collapsed, toggle ] = useState(false)
    return (
      <Router history={history}>
        <Layout className="layout">
          <Sider trigger={null} collapsible collapsed={collapsed}>
            <MenuComponent />
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }}>
              {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: () => { toggle(!collapsed) },
              })}
            </Header>
            <ContentMap />
          </Layout>
        </Layout>
      </Router>
    );
}

export default SiderDemo;