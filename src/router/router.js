
import HelloMap from '../pages/HelloMap/index'
import Terrain from '../pages/terrain/index'
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
    path: '/Terrain',
    meta: {
      title: '地形地图',
      icon: UserOutlined
    },
    component: Terrain
  }
]