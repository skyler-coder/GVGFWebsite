import React from 'react'

function Box({header, body1, body2, body3, detail, text1, text2, text3}) {

  return (
    <div className='w-96 h-96 bg-cyan-400 hover:text-white hover:bg-cyan-900 shadow-lg rounded-2xl p-8 m-3 border-neutral-200 border-2'>
        <header className='text-3xl'>
          {header}
        </header>
        <div className='pt-4'>
          <p>{body1}</p>
          <p>{body2}</p>
          <p>{body3}</p>
          <p>{text1}</p>
          <p>{text2}</p>
          <p>{text3}</p>
        </div>
    </div>
  )
}

export default Box