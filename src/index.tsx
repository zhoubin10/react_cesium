import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// 引入 cesium 样式
import 'cesium/Widgets/widgets.css'
ReactDOM.render(
    <App />,
  document.getElementById('root')
);

serviceWorker.unregister();
