import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

function Event({bigImage, title, eventPath, buttonName}) {

  return (
    <div className='w-screen h-auto' >
        <div className="h-auto w-screen">
        <div >
            <div className="h-screen w-full flex justify-center items-center">
                    <img
                    src={bigImage}
                    alt="Large Photo"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }}
                    />
            <div
            className= 'transition-transform duration-1000 absolute left-1/2 text-center transform -translate-x-1/2 -translate-y-1/12 sm:text-3xl text-lg text-white font-bold'
            >
            <div className='bg-neutral-800 rounded-lg p-2 shadow-sm'>{title}</div>
            <br/>
            <Link to={eventPath}>
                <div>
                    <button className='border-0 bg-green-400 p-2 rounded-lg'>{buttonName}</button>
                </div>
            </Link>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Event