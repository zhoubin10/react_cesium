/*
 * @Descripttion: 
 * @Author: jiegiser
 * @Date: 2020-04-09 15:34:34
 * @LastEditors: jiegiser
 * @LastEditTime: 2020-04-10 08:37:44
 */
import React from 'react';
import './App.css';
import { Layout, Menu } from 'antd';
import Viewer from "cesium/Widgets/Viewer/Viewer";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

class App extends React.Component {
  state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  componentDidMount() {
    this.viewer = new Viewer(this.cesiumContainer)
  }
  render() {
    return (
      <Layout className="container">
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <UserOutlined />
              <span>nav 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <VideoCameraOutlined />
              <span>nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <UploadOutlined />
              <span>nav 3</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            <div id="cesiumContainer" ref={ element => this.cesiumContainer = element }></div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default App;
