import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'react-bootstrap-icons'

function Books() {
  return (
    <div>
      <div className='w-screen h-16 bg-white p-4 opacity-100 fixed z-10'>
        <Link to={'/homepage'} className='z-10'><ArrowLeft className='w-8 h-8'/></Link>
      </div>
      <h1 className='text-3xl text-center pt-16'>GOD'S VINEYARD TEACHING MANUALS</h1>
        <div className='w-screen h-auto flex flex-wrap justify-around p-4'>
            <img src='images/church_images/20240815_091609.jpg' className='w-72 h-96 p-8 hover:p-4 duration-300 m-4 shadow-lg' title='Maturing in Christ'/>
            <img src='images/church_images/20240815_091451.jpg' className='w-72 h-96 p-8 hover:p-4 duration-300 m-4 shadow-lg' title="A living Hope"/>
            <img src='images/church_images/20240815_091511.jpg' className='w-72 h-96 p-8 hover:p-4 duration-300 m-4 shadow-lg' title="Heroes Of Faith"/>
            <img src='images/church_images/20240815_091533.jpg' className='w-72 h-96 p-8 hover:p-4 duration-300 m-4 shadow-lg' title="The Vision of Heaven"/>
            <img src='images/church_images/20240815_091550.jpg' className='w-72 h-96 p-8 hover:p-4 duration-300 m-4 shadow-lg' title="Fear Not"/>

        </div>

        <h1 className='text-3xl text-center p-8'>BOOKS AUTHORED BY PASTOR MRS SALEWA DISU</h1>
        <div className='w-screen h-auto flex flex-wrap justify-around p-4'>
            <img src='images/church_images/20240815_094153.jpg' className='w-72 h-96 p-8 hover:p-4 duration-300 m-4 shadow-lg' title='Weapons of our Warfare by Pastor Salewa Disu'/>
            <img src='images/church_images/20240815_094144.jpg' className='w-72 h-96 p-8 hover:p-4 duration-300 m-4 shadow-lg' title='Dreams Revelations and Visions by Pastor Salewa Disu'/>
            <img src='images/church_images/20240815_094129.jpg' className='w-72 h-96 p-8 hover:p-4 duration-300 m-4 shadow-lg' title="It Happened to me too by Pst Mrs Salewa Disu"/>
            <img src='images/church_images/20240815_094104.jpg' className='w-72 h-96 p-8 hover:p-4 duration-300 m-4 shadow-lg' title="God's Audible Words to me"/>
        </div>
        
        <h1 className='text-3xl text-center p-8'>MEDIA</h1>
        <div className='w-screen h-auto flex flex-wrap justify-around p-4'>
            <img src='images/church_images/20240815_091923.jpg' className='w-72 h-96 p-8 hover:p-4 duration-300 m-4 shadow-lg' title="God's Vineyard News"/>
            <img src='images/church_images/20240815_092004.jpg' className='w-72 h-96 p-8 hover:p-4 duration-300 m-4 shadow-lg' title="God's Vineyard News"/>
            <img src='images/church_images/20240815_092115.jpg' className='w-72 h-96 p-8 hover:p-4 duration-300 m-4 shadow-lg' title="God's Vineyard News"/>
            </div>
    </div>
  )
}

export default Books