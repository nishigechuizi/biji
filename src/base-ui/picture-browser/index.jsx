// import PropTypes from 'prop-types'
import React, { memo, useEffect } from 'react'
import {BrowserWrapper} from "./style"

const PictureBrowser = memo((props) => {

  useEffect(()=> {
    document.body.style.overflow = "hidden"
    return () => {
        //return里面写就是退出执行的操作
        document.body.style.overflow = "auto"
    }
  },[])  

  return (
    <BrowserWrapper>PictureBrowser</BrowserWrapper>
  )
})

PictureBrowser.propTypes = {}

export default PictureBrowser