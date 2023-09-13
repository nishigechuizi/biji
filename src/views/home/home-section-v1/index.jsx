import PropTypes from 'prop-types'
import React, { memo } from 'react'
import {SectionV1Wrapper} from "./style"
import SectionHeader from '@/components/section-header/index.jsx'
import SectionRooms from '@/components/section-rooms/index.jsx'
const HomeSectionV1 = memo((props) => {
    const {infoData} = props
  return (
    <SectionV1Wrapper>
          <SectionHeader title={infoData.title} subtitle={infoData.subtitle}></SectionHeader>
          <SectionRooms roomList={infoData.list} itemWidth="25%"></SectionRooms>  
    </SectionV1Wrapper>
  )
})

HomeSectionV1.propTypes = {
    infoData:PropTypes.object
}

export default HomeSectionV1