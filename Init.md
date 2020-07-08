## 基于 react + Typescript + cesium 的项目

### 搭建开发环境

1. 使用 create-react-app --typesctipt react-cesium 初始化项目；
2. 安装 cesium 以及 copy-webpack-plugin 插件：npm install cesium copy-webpack-plugin --save
2. 打开 react 配置文件，执行命令：yarn run eject；如果遇到不能打开你可以先提交项目代码，再试。
3. 添加 Cesium module name

打开 config 文件夹下的 webpack.config.js 文件，修改内容：
```js
module.exports = function (webpackEnv) {
    ...
    return {
        ...
        resolve: {
          alias: {
            cesium: path.resolve(__dirname, '../node_modules/cesium/Source')
          },
        }
    }
}
```
4. 拷贝 cesium 静态资源文件

```js
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = function (webpackEnv) {
    ...
    return {
        ...
        resolve: {
            alias: {
                // Cesium module name
                cesium: path.resolve(__dirname, '../node_modules/cesium/Source')
            }
        },
        plugins: [
            ...
              // Copy Cesium Assets, Widgets, and Workers to a static directory
              new CopyWebpackPlugin({
                patterns: [
                  { from: path.join('node_modules/cesium/Source', '../Build/Cesium/Workers'), to: 'Workers' },
                  { from: path.join('node_modules/cesium/Source', 'Assets'), to: 'Assets' },
                  { from: path.join('node_modules/cesium/Source', 'Widgets'), to: 'Widgets' }
                ]
              }),
              // Define relative base path in cesium for loading assets
              new webpack.DefinePlugin({
                CESIUM_BASE_URL: JSON.stringify('')
            })
        ]
    }
}

```
5. 引入 cesium 样式文件
在项目入口文件引入样式：
src/index.tsx
```js
// 引入 cesium 样式
import 'cesium/Widgets/widgets.css'
```
### 配置类型注释

这里我没找到更好的方法，我是直接将安装了 cesium 中的 Cesium.d.ts 直接修改使用；打开 node_module 中的 cesium/Sourve/Cesium.d.ts 文件，复制到 src/lib 文件夹中（我自己新建的 lib 文件夹）；修改如下：

```js
// 将 'cesium' 修改为 Cesium，其他不变
declare module Cesium {
  ...
}
```

### 使用

这样就可以愉快的写代码了！

```js
import React, { useEffect } from 'react'
const cesium = require('cesium/Cesium')
window.Cesium = cesium;
Cesium.Ion.defaultAccessToken = 'you_key';
const HelloMap = () => {
  useEffect(() => {
    initMap()
  }, [])
  const initMap =  () => {
    new Cesium.Viewer('mapCon')
  }
  return (
    <div id="mapCon">
      
    </div>
  )
}
export default HelloMap;
```