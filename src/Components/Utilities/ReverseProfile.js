import React from 'react'

function ReverseProfile({imagesrc, text, title}) {

  return (
    <section className="section-md bg-default bg-neutral-200">
        <div className="container">
          <div className="row justify-content-md-center flex-lg-row-reverse align-items-lg-center justify-content-lg-between row-50">
          <div className="col-md-9 col-lg-5"><img src={imagesrc} alt="img" width="464" height="464" className='rounded-lg'/>
          </div>
            <div className="col-md-9 col-lg-6">
              <h3 className="text-2xl ">{title}</h3>
              <p>{text}</p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default ReverseProfile