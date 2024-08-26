import React from 'react'

function ImageExpanded({imageUrl}) {
  return (
    <div>
        <img src={`${imageUrl}`} className='w-3/5 h-auto p-5'/>
    </div>
  )
}

export default ImageExpanded