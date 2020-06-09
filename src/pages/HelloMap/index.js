import React, { useEffect, useRef } from 'react'
import * as cesium from "cesium/Cesium"
import './index.css'
cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI5ZjEwNzAxNy1hYzAxLTQ3YmUtYTBkMC0wZWIyY2VlNDc2MTIiLCJpZCI6MTcyNzIsInNjb3BlcyI6WyJhc3IiLCJnYyJdLCJpYXQiOjE1NzE4ODMxNTN9.pxvpncJUpu2VOzvYi82pbXkYLxPkFq7tESMTmK4jKeo';
const HelloMap = (props) => {
  const ref = useRef()
  useEffect(() => {
    initMap()
  }, [])
  const initMap =  () => {
    new cesium.Viewer(ref.current)
  }
  return (
    <div id="mapCon" ref ={ ref }>
      
    </div>
  )
}
export default HelloMap;