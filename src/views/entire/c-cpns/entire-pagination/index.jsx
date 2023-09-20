// import PropTypes from 'prop-types'
import React, { memo } from 'react'
import {PaginationWrapper} from "./style"
import { Pagination } from '@mui/material'
import { useSelector } from 'react-redux'
const EntirePagination = memo((props) => {
  const {totalCount,currentPage,roomList} = useSelector((state)=>({
    totalCount: state.entire.totalCount,
    currentPage:state.entire.currentPage,
    roomList:state.entire.roomList
  }))

  const totalPage = Math.ceil(totalCount/20)  //向上取整
  const startCount = currentPage*20+1
  const endCount = (currentPage+1)*20

  return (
    <PaginationWrapper>
      {
        !!roomList.length && (
          <div className='info'>
            <Pagination count={totalPage}></Pagination>
            <div className='desc'>
              第{startCount}-{endCount}个房源，共超过{totalCount}个
            </div>
          </div>
         )
      }
    </PaginationWrapper>
  )
})

EntirePagination.propTypes = {}

export default EntirePagination