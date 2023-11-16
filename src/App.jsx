import React, { memo } from 'react'
import {useRoutes} from 'react-router'
import routes from './router'
// import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'
import useScrollTop from './hooks/useScrollTop'

const App = memo(() => {

  useScrollTop()

  return (
    <div className='app'>
      {/* <AppHeader></AppHeader> */}
      <div className='page'>
        {useRoutes(routes)}
      </div>
      <AppFooter></AppFooter>
    </div>
  )
})

export default App