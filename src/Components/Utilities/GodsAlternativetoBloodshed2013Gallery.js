import React, {useState, useEffect} from 'react';
import images from "../Utilities/ImageDirectories/Gods_Alternative_to_Bloodshed_2013.json"

function App({title, id}) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div >
        <div className="h-auto w-screen" id={id}>
        <div className="h-screen w-full flex justify-center items-center ">
            <img
            src="images/God's_Alternative_to_bloodshed/20240817_200524 (1).jpg"
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
            } transition-transform duration-1000 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:text-3xl text-center text-xl text-white font-bold`}
            >
            {title}
            </div>
        </div>
        <div className="h-1/2 w-full p-4 grid grid-cols-2 gap-4">
            {images.map((image, index) => (
            <div key={index} className="relative group">
                <img
                src={image.url}
                className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-75"
                />
                <div className="absolute bottom-0 left-0 w-full text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                </div>
            </div>
            ))}
        </div>
        </div>
    </div>
  );
}

export default App;
