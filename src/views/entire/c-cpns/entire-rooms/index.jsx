// import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { RoomsWrapper } from './style'
import { useSelector } from 'react-redux'
import RoomItem from '@/components/room-item'

const EntireRooms = memo((props) => {
  /**从redux中获取roomlist数据 */
  const {roomList,totalCount} = useSelector((state)=>({
    roomList:state.entire.roomList,
    totalCount:state.entire.totalCount
  }))

  return (
    <RoomsWrapper>
      <h2 className='title'>共{totalCount}多处住所</h2>
      <div className='list'>
        {
          roomList.map(item => {
            return (
              <RoomItem itemData={item} itemWidth="20%" key={item.id}></RoomItem>
            )
          })
        }
      </div>
      
    </RoomsWrapper>
  )
})

EntireRooms.propTypes = {}

export default EntireRooms