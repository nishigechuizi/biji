import React, { memo } from 'react'
import {LeftWrapper} from "./style"
import IconLogo from '@/assets/svg/icon_logo'


const HeaderLeft = memo(() => {
  return (
    <LeftWrapper>
      {/* <img className="i9if2t0 i1mla2as i1cqnm0r dir dir-ltr" style={{display:"block",height:"32px"}} aria-hidden="true" alt="" elementtiming="LCP-target" src="https://z1.muscache.cn/pictures/carson/carson-1679478687466-5517d573/original/acf9627c-88c2-420c-a4ad-c2da40626afa.png" data-original-uri="https://z1.muscache.cn/pictures/carson/carson-1679478687466-5517d573/original/acf9627c-88c2-420c-a4ad-c2da40626afa.png"></img> */}
      <div className='logo'>
        <IconLogo/>
      </div>
    </LeftWrapper>
  )
})

export default HeaderLeft