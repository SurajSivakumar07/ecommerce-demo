import React from 'react'
import Nav from './Nav'
import "../styles/video.css"

import  bgvideo from "../assests/video.mp4"
import Search from './Search'
import Title from './Title'
export default function Video() {
  return (
    <>
    <div className='videoWrap'>

        <video src={bgvideo}  autoPlay  loop muted/>

        <div className='navcontent' >

                <Nav />

        </div>

        <div className='searchcontent'>
                <Search />
    
        </div>
        <div className='titlehcontent'>
                <Title />
    
        </div>
    </div>
      
    </>
  )
}
