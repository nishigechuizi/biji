// import PropTypes from 'prop-types'
import React, { memo, useEffect, useState } from 'react'
import { CSSTransition,SwitchTransition } from "react-transition-group"

import {BrowserWrapper} from "./style"
import IconClose from '@/assets/svg/icon-close'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'

const PictureBrowser = memo((props) => {
  const {pictureUrls,closeClick} = props
  const [currentIndex,setcurrentIndex] = useState(0)
  const [isNext,setIsNext] = useState(true)

  useEffect(()=> {
    document.body.style.overflow = "hidden"
    return () => {
        //return里面写就是退出执行的操作
        document.body.style.overflow = "auto"
    }
  },[])  
  
  /**事件监听的逻辑 */
  function closeBtnClickHandle(){
      if(closeClick) closeClick()
  }

  function controlClickHandle(isNext = true){
    let newIndex = isNext ? currentIndex+1:currentIndex-1
    if(newIndex < 0) newIndex = pictureUrls.length-1
    if(newIndex > pictureUrls.length-1) newIndex=0

    setcurrentIndex(newIndex)
    setIsNext(isNext)
  }

  return (
    <BrowserWrapper isNext={isNext}>
      <div className='top'>
        <div className='close-btn' onClick={closeBtnClickHandle}>
          <IconClose></IconClose>
        </div>
      </div>
      <div className='slider'>
        <div className='control'>
          <div className='btn left' onClick={e=>controlClickHandle(false)}>
            <IconArrowLeft height={77} width="77" ></IconArrowLeft>
          </div>
          <div className='btn right' onClick={e=>controlClickHandle(true)}>
            <IconArrowRight height={77} width="77" ></IconArrowRight>
          </div>
        </div>

        <div className='picture'>
          <SwitchTransition mode='in-out'>
            <CSSTransition 
              key={pictureUrls[currentIndex]}
              classNames="pic"
              timeout={200}
            >
              <img src={pictureUrls[currentIndex]} alt=''></img>
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
      <div className='preview'></div>
    </BrowserWrapper>
  )
})

PictureBrowser.propTypes = {}

export default PictureBrowser