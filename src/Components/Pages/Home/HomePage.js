import React from 'react'
import NavBar from '../../Utilities/NavBar'
import Home from '../Home'
import FadeIn from '../../Utilities/FadeIn'
import SupportPage from '../SupportPage'
import Outreaches from '../../Utilities/Outreaches'
import Activities from '../../Utilities/Activities'
import Pastorial from '../../Utilities/Pastorial'
import HappyBirthdayTheme from '../HappyBirthdayTheme'

function HomePage() {
  return (
    <div>
        <div className="page">
          <header className="page-header">
            <NavBar/>
          </header>
           <Home/>
           <HappyBirthdayTheme/>
           <Pastorial/>
          <Outreaches/>
          <Activities/>
          <FadeIn bodyText={<SupportPage/>}/>
        </div>
    </div>
  )
}

export default HomePage