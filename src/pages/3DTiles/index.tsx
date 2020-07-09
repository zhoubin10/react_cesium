import React, { useEffect, useState } from 'react';
import { Slider, InputNumber, Row, Col } from 'antd';
import '../HelloMap/index.css';
const cesium = require('cesium/Cesium');
window.Cesium = cesium;

Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI5ZjEwNzAxNy1hYzAxLTQ3YmUtYTBkMC0wZWIyY2VlNDc2MTIiLCJpZCI6MTcyNzIsInNjb3BlcyI6WyJhc3IiLCJnYyJdLCJpYXQiOjE1NzE4ODMxNTN9.pxvpncJUpu2VOzvYi82pbXkYLxPkFq7tESMTmK4jKeo';
const EntityBox = () => {
  const [height, setHeight] = useState(0)
  const [tilests, setTilests] = useState<Cesium.Cesium3DTileset>()
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
    const tilest = new Cesium.Cesium3DTileset({
      url: '/data/tileset.json'
    })
    setTilests(tilest)
    tilest.readyPromise.then(tilest => {
      if (viewer) {
        viewer.scene.primitives.add(tilest)
        viewer.zoomTo(
          tilest,
          new Cesium.HeadingPitchRange(0.0, -0.5, tilest.boundingSphere.radius * 2.0)
        )
      }
    })
    viewer.zoomTo(viewer.entities);
    return () => {
      viewer = null
    }
  }, [])

  useEffect(() => {
    if (tilests) {
      const cartographic = Cesium.Cartographic.fromCartesian(
        tilests.boundingSphere.center
      );
      const surface = Cesium.Cartesian3.fromRadians(
        cartographic.longitude,
        cartographic.latitude,
        0.0
      );
      const offset = Cesium.Cartesian3.fromRadians(
        cartographic.longitude,
        cartographic.latitude,
        height
      );
      var translation = Cesium.Cartesian3.subtract(
        offset,
        surface,
        new Cesium.Cartesian3()
      )
      tilests.modelMatrix = Cesium.Matrix4.fromTranslation(translation)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [height])
  function handleOnput (value: any) {
    setHeight(() => {
      return Number(value)
    })
  }
  return (
    <div id="mapCon">
      <Row style={{
        width: '40%',
        marginBottom: '20px'
      }}>
        <span style={{marginRight: '10px'}}>高度: </span>   
        <Col span={6}>
          <Slider
            min={1}
            max={200}
            onChange={handleOnput}
            tooltipVisible
            value={typeof height === 'number' ? height : 0}
          />
        </Col>
        <Col span={4}>
          <InputNumber
            min={1}
            max={200}
            style={{ margin: '0 16px' }}
            value={height}
            onChange={handleOnput}
          />
        </Col>
      </Row>
    </div>
  )
}
export default EntityBox;