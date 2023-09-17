import PropTypes from 'prop-types'
import React, { memo } from 'react'
import {LongforWrapper} from "./style"
import SectionHeader from '@/components/section-header'
import ScrollView from '@/base-ui/scroll-view'
import LongforItem from '@/components/longfor-item'
const HomeLongfor = memo((props) => {
    const { infoData } = props
  return (
    <LongforWrapper>
        <SectionHeader title={infoData.title} subtitle={infoData.subtitle}></SectionHeader>
        <ScrollView>
            <div className='longfor-list'>
                {
                    infoData.list.map(item=> {
                        return <LongforItem itemData={item} key={item.city} ></LongforItem>
                    })
                }
            </div>   
        </ScrollView>
    </LongforWrapper>
  )
})

HomeLongfor.propTypes = {
    infoData : PropTypes.object
}

export default HomeLongfor