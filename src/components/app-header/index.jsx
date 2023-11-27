import React, { memo, useRef, useState } from 'react'
import { HeaderWrapper,SearchAreaWrapper } from "./style"
import HeaderLeft from './c-cpns/header-left'
import HeaderCenter from './c-cpns/header-center'
import HeaderRight from './c-cpns/header-right'
import { shallowEqual,useSelector } from 'react-redux'
import classNames from 'classnames'
import useScrollPosition from "@/hooks/useScrollPosition"
import { ThemeProvider } from 'styled-components'
const AppHeader = memo(() => {
  /**定义组件内部的状态 */
  const [isSearch,setIsSearch] = useState(false)

  /** 从redux中获取数据 */
  const { headerConfig } = useSelector((state) => ({
    headerConfig: state.main.headerConfig
  }), shallowEqual)
  const {isFixed,topAlpha} = headerConfig 

  //监听滚动
  const { scrollY } = useScrollPosition()
  const prevY = useRef(0)
  // 在正常情况下，搜索框没有弹出来，不断记录值
  if(!isSearch) prevY.current = scrollY
  //在弹出时，滚动的距离大于之前记录的距离的30
  if(isSearch && Math.abs(scrollY-prevY.current)>30) setIsSearch(false) 

  
  /** 透明度的逻辑 */
  const isAlpha = topAlpha && scrollY === 0

  return (
    <ThemeProvider theme={{isAlpha}}>
      <HeaderWrapper isAlpha={isAlpha} className={classNames({fixed:isFixed})}>
        <div className='content'>
          <div className='top'>
            <HeaderLeft></HeaderLeft>
            <HeaderCenter isSearch={isAlpha || isSearch} searchBarClick={e => setIsSearch(true)}></HeaderCenter>
            <HeaderRight></HeaderRight>
          </div>
          <SearchAreaWrapper isSearch={isAlpha || isSearch}></SearchAreaWrapper>
        </div>
        {isSearch && <div className='cover' onClick={e=> setIsSearch(false)}></div>}
      </HeaderWrapper>
    </ThemeProvider>
  )
})

export default AppHeader