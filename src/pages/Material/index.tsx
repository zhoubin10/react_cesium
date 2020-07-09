import React, { useEffect } from 'react';
import '../HelloMap/index.css';
const cesium = require('cesium/Cesium');
window.Cesium = cesium;

Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI5ZjEwNzAxNy1hYzAxLTQ3YmUtYTBkMC0wZWIyY2VlNDc2MTIiLCJpZCI6MTcyNzIsInNjb3BlcyI6WyJhc3IiLCJnYyJdLCJpYXQiOjE1NzE4ODMxNTN9.pxvpncJUpu2VOzvYi82pbXkYLxPkFq7tESMTmK4jKeo';
const Material = () => {
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
    // 显示帧数
    viewer.scene.debugShowFramesPerSecond = true
    // 构造时赋材质
    viewer.entities.add({
      position: Cesium.Cartesian3.fromDegrees(-103.0, 40.0),
      ellipse: {
        semiMinorAxis: 250000.0,
        semiMajorAxis: 400000.0,
        // 可以设置不同的 MaterialProprtey
        // material: Cesium.Color.BLUE.withAlpha(0.5)
        material: new Cesium.ImageMaterialProperty({
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTIxGeNkcRPD4pI0LY1qcMgQvjPYSjHv8V1SQ&usqp=CAU',
          repeat: new Cesium.Cartesian2(4, 4)
        })
      }
    })
    viewer.entities.add({
      polyline: { 
        positions: Cesium.Cartesian3.fromDegreesArray([-98.0, 40, -98.1, 42]),
        width: 5,
        material: new Cesium.PolylineGlowMaterialProperty({
          glowPower: 0.2,
          color: Cesium.Color.ORANGE,
        })
      }
    })
    viewer.zoomTo(viewer.entities);
    return () => {
      viewer = null
    }
  }, [])
  
  return (
    <div id="mapCon">
      
    </div>
  )
}
export default Material;