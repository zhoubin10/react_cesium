import React from 'react'
import router from './router';
import { Route, Redirect } from 'react-router-dom';
const RouterConfig = () => {
  return (
    <>
      <Route path='/' exact render={()=>(
        <Redirect to='/HelloMap'/>
      )}/>
      {
        router.map((element, index) => {
          return (
            <Route path={ element.path } component={ element.component } key={ index } />
          )
        })
      }
    </>
  )
}
export default RouterConfig;
