import React, { useEffect } from 'react';
import '../HelloMap/index.css';

const cesium = require('cesium/Cesium')
window.Cesium = cesium;
Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI5ZjEwNzAxNy1hYzAxLTQ3YmUtYTBkMC0wZWIyY2VlNDc2MTIiLCJpZCI6MTcyNzIsInNjb3BlcyI6WyJhc3IiLCJnYyJdLCJpYXQiOjE1NzE4ODMxNTN9.pxvpncJUpu2VOzvYi82pbXkYLxPkFq7tESMTmK4jKeo';
const Camera = () => {
  useEffect(() => {
    let viewer: Cesium.Viewer | null = new Cesium.Viewer('mapCon', {
      shouldAnimate: true, // 设置影像图列表
      geocoder: false, // 是否显示地名查找控件
      shadows: false,
      animation: false, // 是否显示动画控件
      fullscreenButton: false, // 全屏
      vrButton: false, // vr 按钮
      homeButton: false, // home 按钮
      infoBox: false, // 是否显示点击要素之后显示的信息
      sceneModePicker: false,// 是否显示投影方式控件
      selectionIndicator: false,
      timeline: false, // 是否显示时间线控件
      navigationHelpButton: false, // 是否显示帮助信息控件
      baseLayerPicker: false, // 是否显示图层选择控件
      // 获取或设置可用于地形选择的 ProviderViewModel 实例数组。
      terrainProviderViewModels: []
    });
    const TDU_Key = "a89df02c93e5474e9ebeb81a32fcb487"
    const TDT_VEC_W = "http://{s}.tianditu.gov.cn/vec_w/wmts?service=wmts&request=GetTile&version=1.0.0" +
    "&LAYER=vec&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}" +
    "&style=default&format=tiles&tk=" + TDU_Key;
    const TDT_CVA_W = "http://{s}.tianditu.gov.cn/cva_w/wmts?service=wmts&request=GetTile&version=1.0.0" +
    "&LAYER=cva&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}" +
    "&style=default.jpg&tk=" + TDU_Key;
    let vec = new Cesium.WebMapTileServiceImageryProvider({
      url: TDT_VEC_W ,
      layer: "vec_w",
      style: "default",
      format: "tiles",
      tileMatrixSetID: "GoogleMapsCompatible",
      subdomains: ["t0", "t1", "t2", "t3", "t4", "t5", "t6", "t7"],
      minimumLevel: 0,
      maximumLevel: 18,
    })
    viewer.imageryLayers.addImageryProvider(vec)
    let vec_w = new Cesium.WebMapTileServiceImageryProvider({
      url: TDT_CVA_W ,
      layer: "cva_w",
      style: "default",
      format: "tiles",
      tileMatrixSetID: "GoogleMapsCompatible",
      subdomains: ["t0", "t1", "t2", "t3", "t4", "t5", "t6", "t7"],
      minimumLevel: 0,
      maximumLevel: 18,
    })
    viewer.imageryLayers.addImageryProvider(vec_w)
    // cesium 有三种方式进行操作 camera
    // 第一种 setView
    // Cartesian3
    // viewer.camera.setView({
    //   // 设置位置
    //   destination: Cesium.Cartesian3.fromDegrees(103.40, 36, 15000),
    //   orientation : {
    //     heading: Cesium.Math.toRadians(80),
    //     pitch: Cesium.Math.toRadians(-40),
    //     roll: 0
    //   }
    // })
    // rectangle 方式
    // viewer.camera.setView({
    //   // 设置位置
    //   destination: Cesium.Rectangle.fromDegrees(0, 20, 10, 30),
    //   orientation : {
    //     heading: Cesium.Math.toRadians(20),
    //     pitch: Cesium.Math.toRadians(-90),
    //     roll: 0
    //   }
    // })
    // 第二种：flyto
    viewer.camera.flyTo({
      destination: Cesium.Cartesian3.fromDegrees(103.40, 36, 15000),
      orientation: {
        heading: Cesium.Math.toRadians(-0),
        pitch: Cesium.Math.toRadians(-40),
        roll: 0
      },
      // 设置飞行持续时间，默认会根据距离来计算
      duration: 5,
      complete: () => {
        // 到达位置后执行的回调函数
      },
      cancel: () => {
        // 如果取消飞行则会调用此函数
      },
      // 飞起来时调整俯仰角达到垂直朝下看效果，越高度超过1000米，修改俯仰角朝正下
      pitchAdjustHeight: -90,
      // 相机最大飞行高度
      maximumHeight: 5000,
      // 地球上2点之间总是有两种方式。此选项会迫使摄像机选择飞行方向必须经过该经度上飞行
      flyOverLongitude: 100
    })
    // 第三种 lookAt
    // const center = Cesium.Cartesian3.fromDegrees(103.40, 36)
    // const heading = Cesium.Math.toRadians(50)
    // const pitch = Cesium.Math.toRadians(-20)
    // const range = 5000
    // viewer.camera.lookAt(center, new Cesium.HeadingPitchRange(heading, pitch, range))
    return () => {
      viewer = null
    }
  }, [])
  
  return (
    <div id="mapCon">
      
    </div>
  )
}
export default Camera;