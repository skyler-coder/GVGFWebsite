import React, { useEffect, useState } from 'react'

function FadeIn({bodyText}) {
    const[addClass, setAddClass] = useState()
    const myRef = React.useRef(null)
    const[distInView, setDistInview] = useState()
    
    useEffect(() => {
        setDistInview(myRef.current.getBoundingClientRect().top -10 - window.innerHeight)
    },)

    function fadeIn() {
        if (distInView < 0) {
            setAddClass(inView)
        } else {
            setAddClass(outOfView)
        }
    }

    window.addEventListener('scroll', fadeIn)

    const inView = {
        opacity: '1',
        paddingTop: '0',
        transition: '0.5s ease-in-out'
    }

    const outOfView = {
        marginTop: '20px',
        opacity: '0'
    }

  return (
    <div className='contain' ref={myRef}>
        <div style={addClass}>
            <div>
                {bodyText}
            </div>
        </div>
    </div>)
}

export default FadeIn