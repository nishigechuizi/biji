import React, { memo, useEffect } from 'react'
import { HomeWrapper } from "./style.js"
import HomeBanner from './c-cpns/home-banner/index.jsx'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchHomeDataAction } from '@/store/modules/home.js'
import SectionHeader from '@/components/section-header/index.jsx'
import SectionRooms from '@/components/section-rooms/index.jsx'
// import {Button} from '@mui/material';
// import { Button } from 'antd';

const Home = memo(() => {
  /**redux中获取数据 */
  const {goodPriceInfo} = useSelector((state)=>({
    goodPriceInfo:state.home.goodPriceInfo
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
        <div className='good-price'>
          <SectionHeader title={goodPriceInfo.title}></SectionHeader>
          <SectionRooms roomList={goodPriceInfo}></SectionRooms>  
        </div>       
      </div>
      
      {/* <Button variant="text">Text</Button> */}
    </HomeWrapper>
  )
})

export default Home