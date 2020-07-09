
import HelloMap from '../pages/HelloMap/index'
import EntityBox from '../pages/EntityBox/index'
import CzmlBox from '../pages/CzmlBox/index'
import DTiles from '../pages/3DTiles/index'
import Material from '../pages/Material/index'
import Tiandt from '../pages/Tiandt/index'
import Camera from '../pages/Camera/index'
import Geojson from '../pages/Geojson/index'
import {
  UserOutlined,
} from '@ant-design/icons';
export default [
  {
    path: '/HelloMap',
    meta: {
      title: 'Hello Map',
      icon: UserOutlined
    },
    component: HelloMap
  },
  {
    path: '/EntityBox',
    meta: {
      title: 'Entity 添加形状',
      icon: UserOutlined
    },
    component: EntityBox
  },
  {
    path: '/CzmlBox',
    meta: {
      title: 'CZML 添加形状',
      icon: UserOutlined
    },
    component: CzmlBox
  },
  {
    path: '/3DTiles',
    meta: {
      title: '3D Tiles 贴地加载',
      icon: UserOutlined
    },
    component: DTiles
  },
  {
    path: '/Material',
    meta: {
      title: '设置材质',
      icon: UserOutlined
    },
    component: Material
  },
  {
    path: '/Tiandt',
    meta: {
      title: '加载天地图',
      icon: UserOutlined
    },
    component: Tiandt
  },
  {
    path: '/Camera',
    meta: {
      title: 'Camera 设置',
      icon: UserOutlined
    },
    component: Camera
  },
  {
    path: '/Geojson',
    meta: {
      title: 'geojson 数据加载',
      icon: UserOutlined
    },
    component: Geojson
  }
]