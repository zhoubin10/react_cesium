import React from 'react'
import { Layout } from 'antd';
import { Switch } from 'react-router-dom';
import RouterConfig from '../../router/index'
const { Content } = Layout;

const ContentMap = () => {
  return (
    <Content
    className="site-layout-background"
    style={{
      margin: '24px 16px',
      padding: 24,
      minHeight: 280,
    }}
  >
    <Switch>
      <RouterConfig />
    </Switch>
  </Content>
  )
}
export default ContentMap;