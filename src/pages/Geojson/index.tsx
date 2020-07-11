import React, { useEffect } from 'react';
import '../HelloMap/index.css';

const cesium = require('cesium/Cesium')
window.Cesium = cesium;
Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI5ZjEwNzAxNy1hYzAxLTQ3YmUtYTBkMC0wZWIyY2VlNDc2MTIiLCJpZCI6MTcyNzIsInNjb3BlcyI6WyJhc3IiLCJnYyJdLCJpYXQiOjE1NzE4ODMxNTN9.pxvpncJUpu2VOzvYi82pbXkYLxPkFq7tESMTmK4jKeo';
const Geojson = () => {
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
    
    const geojsonOptions: Cesium.GeoJsonDataSource.LoadOptions = {
      // 贴地加载
      clampToGround: true
    }
    const dataSource = Cesium.GeoJsonDataSource.load('./data/simplestyles.geojson', geojsonOptions)
    dataSource.then((dataSource) => {
      if (viewer) {
        const areaEntities = dataSource.entities.values
        areaEntities.forEach(entity => {
          if (Cesium.defined(entity.polygon)) {
            entity.name = entity.properties ? entity.properties.name : ''
          }
        })
        console.log(dataSource.entities.values)
        viewer.dataSources.add(dataSource)
        viewer.zoomTo(dataSource)
      }
    })
    return () => {
      viewer = null
    }
  }, [])
  
  return (
    <div id="mapCon">
      
    </div>
  )
}
export default Geojson;