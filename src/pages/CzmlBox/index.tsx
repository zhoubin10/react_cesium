import React, { useEffect } from 'react';
import '../HelloMap/index.css';
import zsml from '../../data/zsml.json'

const cesium = require('cesium/Cesium')
window.Cesium = cesium;
Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI5ZjEwNzAxNy1hYzAxLTQ3YmUtYTBkMC0wZWIyY2VlNDc2MTIiLCJpZCI6MTcyNzIsInNjb3BlcyI6WyJhc3IiLCJnYyJdLCJpYXQiOjE1NzE4ODMxNTN9.pxvpncJUpu2VOzvYi82pbXkYLxPkFq7tESMTmK4jKeo';
const EntityBox = () => {
  useEffect(() => {
    let viewer: Cesium.Viewer | null = new Cesium.Viewer('mapCon', {
      shouldAnimate: true, // 设置影像图列表
      geocoder: false, // 右上角查询按钮
      shadows: false,
      terrainProviderViewModels: [],// 设置地形图列表
      animation: false, // 动画小窗口
      baseLayerPicker: false, // 图层选择器
      fullscreenButton: false, // 全屏
      vrButton: false, // vr 按钮
      homeButton: false, // home 按钮
      infoBox: false,
      sceneModePicker: false,// 2D,2.5D,3D 切换
      selectionIndicator: false,
      timeline: false, // 时间轴
      navigationHelpButton: false, // 帮助按钮
    });
    const dataSourcePromise = Cesium.CzmlDataSource.load(zsml)
    viewer.dataSources.add(dataSourcePromise)
    viewer.zoomTo(dataSourcePromise);
    return () => {
      viewer = null
    }
  }, [])
  
  return (
    <div id="mapCon">
      
    </div>
  )
}
export default EntityBox;