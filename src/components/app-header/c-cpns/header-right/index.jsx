import React, { memo,useState,useEffect } from 'react'
import {RightWrapper} from "./style"
import IconGlobal from "@/assets/svg/icon_global"
import IconMenu from "@/assets/svg/icon_menu"
import IconAvatar from "@/assets/svg/icon_avatar"

const HeaderRight = memo(() => {
  const [showPanel,setShowPanel] = useState(false)

  /**副作用代码 */
  useEffect(()=> {
    //界面点其他地方，隐藏panel
    function windwHandleClick(){
      setShowPanel(false)
    }

    window.addEventListener("click",windwHandleClick,true) 
    // 为啥选true，因为点击会冒泡，造成又true，又false，导致没变化
    // 填true，就是为了捕获，防止冒泡

    return () => {
      window.removeEventListener("click",windwHandleClick,true)
    }
  },[])

  /**事件处理函数  */
  function profileClickHandle(){
    setShowPanel(true)
  }

  return (
    <RightWrapper>
      <div className='btns'>
        <span className='btn'>登录</span>
        <span className='btn'>注册</span>
        <span className='btn'>
          <IconGlobal></IconGlobal>
        </span>
      </div>

      <div className='profile' onClick={profileClickHandle}>
        <IconMenu></IconMenu>
        <IconAvatar></IconAvatar>

        { showPanel && (<div className='panel'>
          <div className='top'>
            <div className='item register'>注销</div>
            <div className='item login'>登录</div>
          </div>
          <div className='bottom'>
            <div className='item'>出租房源</div>
            <div className='item'>开展体验</div>
            <div className='item'>帮助</div>
          </div>
        </div>)
        }
      </div>
    </RightWrapper>
  )
})

export default HeaderRight