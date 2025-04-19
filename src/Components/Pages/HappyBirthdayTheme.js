import React, { useState } from 'react'

function HappyBirthdayTheme() {
  const[hide, setHide] = useState(false)

  const hideTheme = () => {
    setHide(true)
  }

  return (
    <div className='fixed bottom-5 left-5 z-20 bg-white p-2 border-rounded' hidden={hide}>
      <video src='/videos/WhatsApp Video 2025-04-19 at 3.31.15 AM.mp4' className='sm:w-96 w-64 sm:h-64 h-48' muted controls={true}></video>
      <button className='text-right' onClick={hideTheme}>close</button>
    </div>
  )
}

export default HappyBirthdayTheme