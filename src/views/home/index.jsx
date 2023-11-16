import React, { memo, useEffect } from 'react'
import { HomeWrapper } from "./style.js"
import HomeBanner from './c-cpns/home-banner/index.jsx'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchHomeDataAction } from '@/store/modules/home.js'

import HomeSectionV1 from './home-section-v1/index.jsx'
import {isEmptyO} from "@/utils/index.js"
import HomeSectionV2 from './home-section-v2/index.jsx'
import HomeLongfor from './c-cpns/home-longfor/index.jsx'
import HomeSectionV3 from './home-section-v3/index.jsx'
import AppHeader from '@/components/app-header/index.jsx'
import { changeHeaderConfigAction } from '@/store/modules/main.js'
// import {Button} from '@mui/material';
// import { Button } from 'antd';

const Home = memo(() => {
  /**redux中获取数据 */
  const {goodPriceInfo,highScoreInfo,discountInfo,recommendInfo,longforInfo,plusInfo} = useSelector((state)=>({
    goodPriceInfo:state.home.goodPriceInfo,
    highScoreInfo: state.home.highScoreInfo,
    discountInfo: state.home.discountInfo,
    recommendInfo: state.home.recommendInfo,
    longforInfo:state.home.longforInfo,
    plusInfo:state.home.plusInfo
  }),shallowEqual)

  

  //异步事件 发起网络请求
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchHomeDataAction("xxxx")) 
    dispatch(changeHeaderConfigAction({isFixed:true}))
  },[dispatch])

  return (
    <HomeWrapper>
      <AppHeader></AppHeader>
      <HomeBanner></HomeBanner>
      <div className='content'>
        {/* <div className='good-price'>
          <SectionHeader title={goodPriceInfo.title}></SectionHeader>
          <SectionRooms roomList={goodPriceInfo}></SectionRooms>  
        </div>        */}
        {/* 折扣数据 */}
        {/* <div className='content'>
          <SectionHeader title={discountInfo.title} subtitle={discountInfo.subtitle} ></SectionHeader>
          <SectionTabs tabNames={tabNames} tabClick={tabClickHandle}></SectionTabs>
          <SectionRooms roomList={discountInfo.dest_list?.[name]} itemWidth="33.33%"></SectionRooms>
        </div> */}
        {isEmptyO(discountInfo) && <HomeSectionV2 infoData={discountInfo}></HomeSectionV2>}
        {isEmptyO(recommendInfo) && <HomeSectionV2 infoData={recommendInfo}></HomeSectionV2>}

        {isEmptyO(longforInfo) && <HomeLongfor infoData={longforInfo}></HomeLongfor>}

        {isEmptyO(discountInfo) && <HomeSectionV1 infoData={goodPriceInfo}></HomeSectionV1>}
        {isEmptyO(discountInfo) && <HomeSectionV1 infoData={highScoreInfo}></HomeSectionV1>}
        {isEmptyO(plusInfo) && <HomeSectionV3 infoData={plusInfo}></HomeSectionV3>}
      </div>
      
      {/* <Button variant="text">Text</Button> */}
    </HomeWrapper>
  )
})

export default Home