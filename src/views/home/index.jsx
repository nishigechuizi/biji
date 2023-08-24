import React, { memo } from 'react'
import { HomeWrapper } from "./style.js"
import HomeBanner from './c-cpns/home-banner/index.jsx'

const Home = memo(() => {
  return (
    <HomeWrapper>
      <HomeBanner></HomeBanner>
    </HomeWrapper>
  )
})

export default Home