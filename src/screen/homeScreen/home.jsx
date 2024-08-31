import React from 'react'
import CursorProvider from '../../component/providers/cursorProvider'
import { About, Brand, Find, Head, List, Team } from '../../component/index'
import Feature from '../../component/feature/feature'
import Testimony from '../../component/testimonial/testimony'
import Blog from '../../component/blog/blog'
import Follow from '../../component/follow/follow'

export default function Home() {
  return (
    <CursorProvider>
    <div className="App">
      <Head/>
      <Brand/>
      <About/>
      <Find/>
      <Team/>
      <List/>
      <Feature/>
      <Testimony/>
      <Blog/>
      <Follow/>
    </div>
  </CursorProvider>
  )
}
