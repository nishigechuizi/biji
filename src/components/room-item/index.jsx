import PropTypes from 'prop-types'
import React, { memo, useRef } from 'react'
import {ItemWrapper} from "./style"
import {Rating} from '@mui/material';
//轮播图
import { Carousel } from 'antd';
import IconArrowLeft from '@/assets/svg/icon-arrow-left';
import IconArrowRight from '@/assets/svg/icon-arrow-right';

const RoomItem = memo((props) => {
    const {itemData,itemWidth="25%"} = props
    const silderRef = useRef()
    /**事件处理逻辑 */
    function controlClickHandle(isRight = true){
      // 上一个 下一个
      isRight ? silderRef.current.next() : silderRef.current.prev()
    }
  return (
    <ItemWrapper 
      $verifyColor={itemData?.verify_info?.text_color||"#39576a"}
      itemWidth={itemWidth}>
      <div className='inner'>
        {/* <div className='cover'>
          <img src={itemData.picture_url} alt=''></img>
        </div> */}
        <div className='slider'>
          <div className='control'>
            <div className='btn left' onClick={e => controlClickHandle(false)}>
              <IconArrowLeft width="30" height="30" ></IconArrowLeft>
            </div>
            <div className='btn right' onClick={e => controlClickHandle(true)}>
              <IconArrowRight width="30" height="30" ></IconArrowRight>
            </div>
          </div>
          <Carousel dots={false} ref={silderRef}>
            {
              itemData?.picture_urls?.map((item,index) => {
                return (
                  <div className='cover' key={index}>
                    <img src={item} alt=''></img>
                  </div>
                )
              })
            }
          </Carousel>
        </div>
        <div className='desc'>
          {itemData.verify_info.messages.join(".")}
        </div>
        <div className='name'>{itemData.name}</div>
        <div className='price'>${itemData.price}/晚</div>

        <div className='bottom'>
          <Rating value={itemData?.star_rating ?? 5} precision={0.1} readOnly sx={{fontSize:"18px",color:"#00848A"}}></Rating>
          <span className='count'>{itemData?.reviews_count}</span>
          {
            itemData?.bottom_info && <span className='extra'>· {itemData?.bottom_info?.content}</span>
          }
        </div>
      </div>
    </ItemWrapper>
  )
})

RoomItem.propTypes = {
    itemData:PropTypes.object
}

export default RoomItem