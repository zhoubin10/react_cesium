/*
 * @Descripttion: 
 * @Author: jiegiser
 * @Date: 2020-04-09 15:34:34
 * @LastEditors: jiegiser
 * @LastEditTime: 2020-04-10 08:28:13
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css';
import 'cesium/Widgets/widgets.css'
ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();