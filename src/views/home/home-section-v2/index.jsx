import PropTypes from 'prop-types'
import React, { memo,useState,useCallback } from 'react'
import {SectionV2Wrapper} from "./style"
import SectionHeader from '@/components/section-header/index.jsx'
import SectionRooms from '@/components/section-rooms/index.jsx'
import SectionTabs from '@/components/section-tabs/index.jsx'
const HomeSectionV2 = memo((props) => {
    const {infoData} = props 
  /**数据转换 */
  const initialName = Object.keys(infoData.dest_list)[0]
  const [name,setName] = useState(initialName)
  const tabNames = infoData.dest_address?.map((item)=>item.name)
  /*性能优化，所以用useCallback，因为传入是函数，每次组件渲染会带着函数更新，进而下面的组件也会重新渲染 */
  const tabClickHandle = useCallback(function(index,name){
    setName(name)
  },[])
  /*要么使用useEffect(()=>{},[])*/

  return (
    <SectionV2Wrapper>
        <SectionHeader title={infoData.title} subtitle={infoData.subtitle} ></SectionHeader>
        <SectionTabs tabNames={tabNames} tabClick={tabClickHandle}></SectionTabs>
        <SectionRooms roomList={infoData.dest_list?.[name]} itemWidth="33.33%"></SectionRooms>
    </SectionV2Wrapper>
  )
})

HomeSectionV2.propTypes = {
    infoData:PropTypes.object
}

export default HomeSectionV2