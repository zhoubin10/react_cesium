import React from 'react';
import router from '../../router/router';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
const MenuComponent = () => {
  return (
    <>
    <div className="logo">jiegiser</div>
    <Menu theme="dark" mode="inline" defaultSelectedKeys={['0']}>
      {
        router.map((element, index) => {
          console.log(element, index)
          return (
            <Menu.Item key={ index } icon={ <element.meta.icon/> }>
              <Link to={ element.path }>
                { element.meta.title }
              </Link>  
            </Menu.Item>
          )
        })
      }
    </Menu>
    </>
  )
}
export default MenuComponent;