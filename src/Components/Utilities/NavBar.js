import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {Activity, BagHeart, Book, FilePerson, Folder, House, Images, Phone, PhoneFill} from 'react-bootstrap-icons'

function NavBar() {
  const[hide, setHide] = useState()
  const[hide1, setHide1] = useState()

  useEffect(() => {
    if(window.screen.availWidth < 650){
      setHide(false)
      setHide1(true)
    }
    else{
      setHide(true)
      setHide1(false)
    }
  },[])
  
  return (
    <div className='w-screen h-24 flex justify-start fixed bg-white justify-between'>
      <a href="#home"><img src="logo/WhatsApp Image 2024-06-21 at 10.39.27 (1).jpeg" alt="" className='w-24 h-24 ml-4 mr-16'/></a>
              <ul className="flex justify-start w-96 pt-8 ml-2">
                <Link to='/aboutus' className='p-2 hover:text-cyan-300'>
                  <div className='flex'>
                    About us
                  </div>
                </Link>
                <Link to='/gallery' className='p-2 hover:text-cyan-300'>
                  <div className='flex'>
                    Gallery
                  </div>
                </Link>
                <Link to="/books" className='p-2 hover:text-cyan-300'>
                    <div className='flex'>
                      Books
                    </div>
                </Link>
              </ul>
    </div>
  )
}

export default NavBar