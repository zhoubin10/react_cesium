import React, { useEffect } from 'react'
import './index.css'
const cesium = require('cesium/Cesium')
cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI5ZjEwNzAxNy1hYzAxLTQ3YmUtYTBkMC0wZWIyY2VlNDc2MTIiLCJpZCI6MTcyNzIsInNjb3BlcyI6WyJhc3IiLCJnYyJdLCJpYXQiOjE1NzE4ODMxNTN9.pxvpncJUpu2VOzvYi82pbXkYLxPkFq7tESMTmK4jKeo';
const HelloMap = () => {
  useEffect(() => {
    initMap()
  }, [])
  const initMap =  () => {
    new cesium.Viewer('mapCon')
  }
  return (
    <div id="mapCon">
      
    </div>
  )
}
export default HelloMap;