import React from 'react'
import { Link } from 'react-router-dom'

const background = 'images/backgrounds/image1.jpeg'

function Profile({imagesrc, text, title, attachement, moreDetails, SupportHead, text1, text2, text3, contact}) {
  return (
    <section className="section-md bg-default" style={{backgroundImage: `url(${background})`, backgroundSize: 'cover'}}>
        <div className="container h-auto">
          <div className="row justify-content-md-center flex-lg-row-reverse align-items-lg-center justify-content-lg-between row-50">
            <div className="col-md-9 col-lg-6">
              <h3 className="text-2xl">{title}</h3>
              <p>{text}</p>
              <p className='text-xl'>{SupportHead}</p>
              <p>{text1}</p>
              <p>{text2}</p>
              <p>{text3}</p>
              <p>{contact}</p>
            </div>
            <div className="col-md-9 col-lg-5"><img src={imagesrc} alt="image" width="464" height="464" className='rounded-lg'/><p className=''>{moreDetails}</p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Profile