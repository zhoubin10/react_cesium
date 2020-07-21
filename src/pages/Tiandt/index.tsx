import React, { useEffect } from 'react'
import '../HelloMap/index.css'
const cesium = require('cesium/Cesium')
window.Cesium = cesium;
Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI5ZjEwNzAxNy1hYzAxLTQ3YmUtYTBkMC0wZWIyY2VlNDc2MTIiLCJpZCI6MTcyNzIsInNjb3BlcyI6WyJhc3IiLCJnYyJdLCJpYXQiOjE1NzE4ODMxNTN9.pxvpncJUpu2VOzvYi82pbXkYLxPkFq7tESMTmK4jKeo';
const HelloMap = () => {
  // 天地图申请的密钥
  const TDU_Key = "a89df02c93e5474e9ebeb81a32fcb487"
  useEffect(() => {
    initMap()
    // eslint-disable-next-line
  }, [])
  const initMap =  () => {
    new Cesium.Viewer('mapCon', {
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
      baseLayerPicker: true, // 是否显示图层选择控件
      // 获取或设置可用于图像选择的 ProviderViewModel 实例数组。
      imageryProviderViewModels: getImageryProviderArr(),
      // 获取或设置可用于地形选择的 ProviderViewModel 实例数组。
      terrainProviderViewModels: []
    })
  }
  function getImageryProviderArr() {
    // 在线天地图影像服务地址(墨卡托投影)
    const TDT_IMG_W = "http://{s}.tianditu.gov.cn/img_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=img&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default&format=tiles&tk=" + TDU_Key;
    const TDT_CVA_W = "http://{s}.tianditu.gov.cn/cva_w/wmts?service=wmts&request=GetTile&version=1.0.0" +
    "&LAYER=cva&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}" +
    "&style=default.jpg&tk=" + TDU_Key;
    // 在线天地图矢量地图服务(墨卡托投影) 
    const TDT_VEC_W = "http://{s}.tianditu.gov.cn/vec_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=vec&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default&format=tiles&tk=" + TDU_Key;
    // 在线天地图影像中文标记服务(墨卡托投影)  
    const TDT_CIA_W = "http://{s}.tianditu.gov.cn/cia_w/wmts?service=wmts&request=GetTile&version=1.0.0" +
    "&LAYER=cia&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}" +
    "&style=default.jpg&tk=" + TDU_Key
    return [
      new Cesium.ProviderViewModel({
        // 图层的名称。
        name:'天地图影像',
        // 显示项目被隐藏的工具提示
        tooltip:'天地图影像',
        // 代表图层的图标
        iconUrl:'http://lbs.tianditu.gov.cn/images/ele_c.jpg',
        // 一个函数或命令，用于创建一个或多个提供程序，这些提供程序将在选择此项目时添加到地球仪中。
        creationFunction: function() {
          return [
            new Cesium.WebMapTileServiceImageryProvider({
              url: TDT_IMG_W,
              layer: "img_w",
              style: "default",
              format: "tiles",
              tileMatrixSetID: "GoogleMapsCompatible",
              subdomains: ["t0", "t1", "t2", "t3", "t4", "t5", "t6", "t7"],
              minimumLevel: 0,
              maximumLevel: 18,
            }),
            new Cesium.WebMapTileServiceImageryProvider({
              url: TDT_CIA_W,
              layer: "cia_w",	
              style: "default",
              format: "tiles",
              tileMatrixSetID: "GoogleMapsCompatible",
              subdomains: ["t0", "t1", "t2", "t3", "t4", "t5", "t6", "t7"],
              minimumLevel: 0,
              maximumLevel: 18,
            })
          ]
        }
      }),
      new Cesium.ProviderViewModel({
        // 图层的名称
        name:'天地图矢量',
        // 显示项目被隐藏的工具提示
        tooltip:'天地图矢量',
        // 代表图层的图标
        iconUrl:'http://lbs.tianditu.gov.cn/images/vec_c.png',
        // 一个函数或命令，用于创建一个或多个提供程序，这些提供程序将在选择此项目时添加到地球仪中
        creationFunction: function() {
          return [
            new Cesium.WebMapTileServiceImageryProvider({
              url: TDT_VEC_W,
              layer: "vec_w",
              style: "default",
              format: "tiles",
              tileMatrixSetID: "GoogleMapsCompatible",
              subdomains: ["t0", "t1", "t2", "t3", "t4", "t5", "t6", "t7"],
              minimumLevel: 0,
              maximumLevel: 18,
            }),
            new Cesium.WebMapTileServiceImageryProvider({
              url: TDT_CVA_W,
              layer: "cva_w",
              style: "default",
              format: "tiles",
              tileMatrixSetID: "GoogleMapsCompatible",
              subdomains: ["t0", "t1", "t2", "t3", "t4", "t5", "t6", "t7"],
              minimumLevel: 0,
              maximumLevel: 18
            })
          ]
        }
      })
    ]
  }
  return (
    <div id="mapCon">
      
    </div>
  )
}
export default HelloMap;