// import PropTypes from 'prop-types'
import React, { memo } from 'react'
import {PicturesWrapper} from "./style"
import { useSelector } from 'react-redux'

const DetailPictures = memo((props) => {
    const {detailInfo} = useSelector((state) => ({
        detailInfo:state.detail.detailInfo
    }))
  return (
    <PicturesWrapper>
        <div className='top'>
          <div className='left'>
            <div className='item'>
              <img src={detailInfo?.picture_urls?.[0]} alt=''></img>
              <div className='cover'></div>
            </div>
          </div>
          <div className='right'>
            {
              detailInfo?.picture_urls?.slice(1,5).map(item => {
                return (
                  <div className='item' key={item}>
                    <img src={item} alt=''></img>
                    <div className='cover'></div>
                  </div>
                )
              })
            }
          </div>
        </div>
    </PicturesWrapper>
  )
})

DetailPictures.propTypes = {}

export default DetailPictures