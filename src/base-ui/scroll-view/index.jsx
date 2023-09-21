// import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef,useState } from 'react'
import {ViewWrapper} from "./style"
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
const ScrollView = memo((props) => {
  /**定义内部的状态 */
  const [showLeft,setShowLeft] = useState(false)
  const [showRight,setShowRight] = useState(false)
  const [posIndex,setPosIndex] = useState(0)
  const totalDistanceRef = useRef()
  
  /**组件渲染完毕，判断是否显示右侧按钮 */
  const scrollContentRef = useRef()
  useEffect(()=>{
    const scrollWidth = scrollContentRef.current.scrollWidth  //一共可以滚动的宽度
    const clientWidth = scrollContentRef.current.clientWidth  //本身的宽度
    const totalDistance = scrollWidth-clientWidth
    totalDistanceRef.current = totalDistance
    setShowRight(totalDistance>0)

  },[props.children])

  /**事件处理的逻辑 */
//   function leftClickHandle(){
//     const newIndex = posIndex - 1
//     const newEl = scrollContentRef.current.children[newIndex]
//      //就是当前元素到最初始位置的距离 即为offsetLeft
//      console.log(newEl,newEl.offsetLeft);
//      const newOffsetLeft = newEl.offsetLeft
//      //translate 实质上就是将元素的offsetLeft与父元素位置一致
//      scrollContentRef.current.style.transform = `translate(-${newOffsetLeft}px)`
//      setPosIndex(newIndex)
//      //是否继续显示右侧的按钮
//      setShowRight(totalDistanceRef.current>newOffsetLeft)
//      setShowLeft(newOffsetLeft > 0)
//   }
  function controlClickHandle(isRight){
    const newIndex =isRight ? posIndex + 1 :posIndex-1
    const newEl = scrollContentRef.current.children[newIndex]
    //就是当前元素到最初始位置的距离 即为offsetLeft
    // console.log(newEl,newEl.offsetLeft);
    const newOffsetLeft = newEl.offsetLeft
    scrollContentRef.current.style.transform = `translate(-${newOffsetLeft}px)`
    setPosIndex(newIndex)
    //是否继续显示右侧的按钮
    setShowRight(totalDistanceRef.current>newOffsetLeft)
    setShowLeft(newOffsetLeft > 0)
  }

  return (
    <ViewWrapper>
        {showLeft && (
            <div className='control left' onClick={e=>controlClickHandle(false)}>
                <IconArrowLeft></IconArrowLeft>
            </div>
        )}
        {showRight && (
            <div className='control right' onClick={e=>controlClickHandle(true)}>
                <IconArrowRight></IconArrowRight>
            </div>
        )}
        <div className='content'>
            <div className='scroll' ref={scrollContentRef}>
                {props.children}
            </div>
        </div>        
    </ViewWrapper>
  )
})

ScrollView.propTypes = {}

export default ScrollView