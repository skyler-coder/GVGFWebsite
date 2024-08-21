import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

function Preloader() {
    const navigate = useNavigate()

    const loaded = () =>{
        setTimeout(() => {
          navigate('/homepage')
        }, 1000);
    }
    

    window.addEventListener('load', loaded)

  return (
    <div>
        <div className="preloader">
          <div className="preloader-body">
            <div className="cssload-container">
              <div className="cssload-speeding-wheel"></div>
                <p>Loading...</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Preloader