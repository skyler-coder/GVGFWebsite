import React, {useState, useEffect} from 'react';
import images from '../Utilities/ImageDirectories/TeamImageDirectory/Teams.json'
import { Link, Route } from 'react-router-dom';
import { ArrowLeft } from 'react-bootstrap-icons';
import { useLocation } from 'react-router-dom';
import TournamentPhotos from '../Utilities/TournamentPhotos'
import BigImages from '../Utilities/ImageDirectories/16TeamsPhotos.json'
import LazyLoad from 'react-lazy-load';

function App({title}) {
    const Currentlocation = useLocation().pathname
    const [loaded, setLoaded] = useState(false);
    const [smallImageStyle, setSmallImageStyle] = useState({width: "100%",height: "100vh", backgroundSize: "cover"})

  let newImage = {}
  let newImageArray = []

  for(let i = 0; images.length > i; i++){
    if(images[i].team.includes(Currentlocation)){
        newImage = images[i]
        newImageArray.push(newImage)
    }
  }

  let newBigImage = {}
  let newBigImageArray = []
  for(let i = 0; BigImages.length > i; i++){
    if(BigImages[i].path.includes(Currentlocation)){
        newBigImage = BigImages[i]
        newBigImageArray.push(newBigImage)
    }
  }

  useEffect(() => {
    setLoaded(true);
  }, []);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='w-screen h-auto'>
        
        <div className='w-screen h-16 bg-white fixed p-4 opacity-100 z-10'>
            <Link to={'/gallery'} className='z-10'><ArrowLeft className='w-8 h-8'/></Link>
        </div>
        <div className="h-auto w-screen">
        <div className="h-screen w-full flex justify-center items-center">
            <img
            src={newBigImageArray[0].url}
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
            } transition-transform duration-1000 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:text-3xl text-xl text-white font-bold bg-black p-2 rounded-lg`}
            >
            {newBigImageArray[0].teamName}
            </div>
        </div>
        <div className="h-1/2 sm:w-full w-screen p-4 grid sm:grid-cols-2 gap-4">
            {newImageArray.map((image, index) => (
            <div key={index} className="relative group">
                <LazyLoad>
                <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-75"
                    style={smallImageStyle}
                    />
                </LazyLoad>
                <div className="absolute bottom-0 left-0 w-full text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className='w-auto h-auto bg-neutral-900'><p className="text-white text-2xl">{image.teamName}</p></div>
                </div>
            </div>
            ))}
        </div>
        </div>
    </div>
  );
}

export default App;
