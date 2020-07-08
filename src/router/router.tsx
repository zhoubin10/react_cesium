
import HelloMap from '../pages/HelloMap/index'
import EntityBox from '../pages/EntityBox/index'
import CzmlBox from '../pages/CzmlBox/index'
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
  }
]