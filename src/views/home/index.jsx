import React, { memo, useEffect } from 'react'
import { HomeWrapper } from "./style.js"
import HomeBanner from './c-cpns/home-banner/index.jsx'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchHomeDataAction } from '@/store/modules/home.js'

import HomeSectionV1 from './home-section-v1/index.jsx'
// import {Button} from '@mui/material';
// import { Button } from 'antd';

const Home = memo(() => {
  /**redux中获取数据 */
  const {goodPriceInfo,highScoreInfo} = useSelector((state)=>({
    goodPriceInfo:state.home.goodPriceInfo,
    highScoreInfo: state.home.highScoreInfo
  }),shallowEqual)

  //异步事件 发起网络请求
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchHomeDataAction("xxxx")) 
  },[dispatch])

  return (
    <HomeWrapper>
      <HomeBanner></HomeBanner>
      <div className='content'>
        {/* <div className='good-price'>
          <SectionHeader title={goodPriceInfo.title}></SectionHeader>
          <SectionRooms roomList={goodPriceInfo}></SectionRooms>  
        </div>        */}
        <HomeSectionV1 infoData={goodPriceInfo}></HomeSectionV1>
        <HomeSectionV1 infoData={highScoreInfo}></HomeSectionV1>
      </div>
      
      {/* <Button variant="text">Text</Button> */}
    </HomeWrapper>
  )
})

export default Home