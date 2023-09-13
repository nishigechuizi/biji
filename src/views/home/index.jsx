import React, { memo, useEffect } from 'react'
import { HomeWrapper } from "./style.js"
import HomeBanner from './c-cpns/home-banner/index.jsx'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchHomeDataAction } from '@/store/modules/home.js'

import HomeSectionV1 from './home-section-v1/index.jsx'
import SectionHeader from '@/components/section-header/index.jsx'
import SectionRooms from '@/components/section-rooms/index.jsx'
import SectionTabs from '@/components/section-tabs/index.jsx'
// import {Button} from '@mui/material';
// import { Button } from 'antd';

const Home = memo(() => {
  /**redux中获取数据 */
  const {goodPriceInfo,highScoreInfo,discountInfo} = useSelector((state)=>({
    goodPriceInfo:state.home.goodPriceInfo,
    highScoreInfo: state.home.highScoreInfo,
    discountInfo: state.home.discountInfo
  }),shallowEqual)

  /**数据转换 */
  const tabNames = discountInfo.dest_address?.map((item)=>item.name)

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
        {/* 折扣数据 */}
        <div className='content'>
          <SectionHeader title={discountInfo.title} subtitle={discountInfo.subtitle} ></SectionHeader>
          <SectionTabs tabNames={tabNames}></SectionTabs>
          <SectionRooms roomList={discountInfo.dest_list?.["成都"]} itemWidth="33.33%"></SectionRooms>
        </div>

        <HomeSectionV1 infoData={goodPriceInfo}></HomeSectionV1>
        <HomeSectionV1 infoData={highScoreInfo}></HomeSectionV1>
      </div>
      
      {/* <Button variant="text">Text</Button> */}
    </HomeWrapper>
  )
})

export default Home