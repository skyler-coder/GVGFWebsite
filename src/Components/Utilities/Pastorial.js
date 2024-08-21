import React from 'react'
import FadeIn from './FadeIn'

function Pastorial() {
  return (
    <div>
        <div className='bg-gray-200 py-4 px-8'>
        <h1 className='text-3xl font-bold'>PASTORIAL</h1>
        </div>
        <FadeIn bodyText={<img src='images/church_images/WhatsApp Image 2024-08-19 at 15.37.12.jpeg'/>}/>
    </div>
  )
}

export default Pastorial