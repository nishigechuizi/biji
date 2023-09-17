// import PropTypes from 'prop-types'
import React, { memo } from 'react'
import {SectionV3Wrapper} from "./style"
import SectionHeader from '@/components/section-header'
import RoomItem from '@/components/room-item'
import ScrollView from '@/base-ui/scroll-view'
import SectionFooter from '@/components/section-footer'
const HomeSectionV3 = memo((props) => {
  const {infoData} = props
  return (
    <SectionV3Wrapper>
        <SectionHeader title={infoData.title} subtitle={infoData.subtitle}></SectionHeader>
        <div className='room-list'>
            <ScrollView>
                {
                    infoData.list.map(item => {
                        return <RoomItem itemData={item} itemWidth="20%" key={item.id}></RoomItem>
                    })
                }
            </ScrollView>
        </div>
        <SectionFooter name="plus"></SectionFooter>
    </SectionV3Wrapper>
  )
})

HomeSectionV3.propTypes = {}

export default HomeSectionV3