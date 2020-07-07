import React, { useEffect } from 'react';
import '../HelloMap/index.css';
const Cesium = require('cesium/Cesium');
console.log(111)
Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI5ZjEwNzAxNy1hYzAxLTQ3YmUtYTBkMC0wZWIyY2VlNDc2MTIiLCJpZCI6MTcyNzIsInNjb3BlcyI6WyJhc3IiLCJnYyJdLCJpYXQiOjE1NzE4ODMxNTN9.pxvpncJUpu2VOzvYi82pbXkYLxPkFq7tESMTmK4jKeo';
const EntityBox = () => {
  console.log(111)
  useEffect(() => {
    const viewer = new Cesium.Viewer('mapCon');
    viewer.entities.add({
      name : 'Red box with black outline',
      position: Cesium.Cartesian3.fromDegrees(-107.0, 40.0, 300000.0),
      box : {
        dimensions : new Cesium.Cartesian3(400000.0, 300000.0, 500000.0),
        material : Cesium.Color.RED.withAlpha(0.5),
        outline : true,
        outlineColor : Cesium.Color.BLACK
      }
    });
    viewer.zoomTo(viewer.entities);
  }, [])
  
  return (
    <div id="mapCon">
      
    </div>
  )
}
export default EntityBox;