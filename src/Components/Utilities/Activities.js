import React from 'react'
import FadeIn from "./FadeIn"
const image = "images/church_images/activity.jpeg"
const background = "images/backgrounds/background.jpg"
const image1 = "images/church_images/flyers.jpg"

function Activities() {
  return (
    <div className='w-screen h-auto' id='activities'>
      <FadeIn bodyText={
        <div className='w-screen h-auto flex justify-center p-8' style={{backgroundImage: `url(${background})`}}>
          <img src={image} className='sm:w-7/12 w-screen h-auto'/>
        </div>
      }/>
    </div>
  )
}

export default Activities