import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

function Event({bigImage, title, eventPath}) {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);

  return (
    <div className='w-screen h-auto' >
        <div className="h-auto w-screen">
        <div >
            <Link to={eventPath} className="h-screen w-full flex justify-center items-center">
                <img
                src={bigImage}
                alt="Large Photo"
                className={`${
                    loaded ? 'opacity-100' : 'opacity-0'
                } transition-opacity duration-1000`}
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                }}
                />
            <div
            className={`${
                loaded ? 'translate-y-0' : 'translate-y-24'
            } transition-transform duration-1000 absolute left-1/2 text-center transform -translate-x-1/2 -translate-y-1/2 sm:text-3xl text-lg text-white font-bold`}
            >
            {title}
            </div>
            </Link>
        </div>
        </div>
    </div>
  )
}

export default Event