// import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { RoomsWrapper } from './style'
import { shallowEqual, useSelector } from 'react-redux'
import RoomItem from '@/components/room-item'

const EntireRooms = memo((props) => {
  /**从redux中获取roomlist数据 */
  const {roomList,totalCount,isLoading} = useSelector((state)=>({
    roomList:state.entire.roomList,
    totalCount:state.entire.totalCount,
    isLoading:state.entire.isLoading
  }),shallowEqual)

  return (
    <RoomsWrapper>
      <h2 className='title'>共{totalCount}多处住所</h2>
      <div className='list'>
        {
          roomList.map(item => {
            return (
              <RoomItem itemData={item} itemWidth="20%" key={item._id}></RoomItem>
            )
          })
        }
      </div>
      { isLoading && <div className='cover'></div>}
    </RoomsWrapper>
  )
})

EntireRooms.propTypes = {}

export default EntireRooms