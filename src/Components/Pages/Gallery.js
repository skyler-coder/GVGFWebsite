import React, { useEffect } from 'react'
import { ArrowLeft } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'
import Event from '../Utilities/Event'

function Gallery() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className=''>
      <div className='w-screen h-16 bg-white fixed p-4 opacity-100 z-10'>
        <Link to={'/homepage'} className='z-10'><ArrowLeft className='w-8 h-8'/></Link>
      </div>
        <Event bigImage="images/Carousel_Images/16_team_photos/PXP-9969.jpg" title={"God's Vineyard Gospel Tornament"} eventPath={"/tournament2024"}/>
        <Event bigImage="images/God's_Alternative_to_bloodshed/20240817_200524 (1).jpg" title={"God's Alternative to Bloodshed in Nigeria"} eventPath={"/GodsAlternativetoBloodshed"}/>
        <Event bigImage={"images/WeaponsOfOurWarfare/WhatsApp Image 2024-08-21 at 07.59.19.jpeg"} title={"Weapons Of Our Warfare"} eventPath={"/weaponsofourwarfare"}/>
    </div>
  )
}

export default Gallery