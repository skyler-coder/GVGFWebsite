import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'react-bootstrap-icons';

function App({ title, id, ImagesPath, bigImage, buttonName }) {
  const [loaded, setLoaded] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const expand = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="w-screen h-auto">
        <div className='w-screen h-16 bg-white fixed p-4 opacity-100 z-10'>
            <Link to={'/gallery'} className='z-10'><ArrowLeft className='w-8 h-8'/></Link>
        </div>
        <div className="h-screen w-full flex justify-center items-center">
                    <img
                    src={bigImage}
                    alt="Large Photo"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }}
                    />
                <div
                className= 'transition-transform duration-1000 absolute left-1/2 text-center transform -translate-x-1/2 -translate-y-1/12 sm:text-3xl text-lg text-white font-bold'
                >
                <div className='bg-neutral-800 rounded-lg p-2'>{title}</div>
                </div>
            </div>
      <div className="h-1/2 w-full p-4 grid grid-cols-2 gap-4">
        {ImagesPath.map((image, index) => (
          <div key={index} className="relative group">
            {image.link ? (
                <Link to={`/${image.link}`}>
                    <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-75"
                    />
                    <div className="absolute bottom-0 left-0 w-full text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div>Visit the Event</div>
                    <div className='w-auto h-auto bg-neutral-900'><p className="text-white text-2xl">{image.teamName}</p></div>
                    </div>
                </Link>
            ) : (
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedImage(image);
                  setExpanded(true);
                }}
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-75"
                />
                <div className="absolute bottom-0 left-0 w-full text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-auto h-auto bg-neutral-900">
                    <p className="text-white text-2xl">{image.teamName}</p>
                  </div>
                </div>
              </a>
            )}
          </div>
        ))}
      </div>
      {expanded && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex justify-center items-center">
          <img
            src={selectedImage.url}
            alt={selectedImage.alt}
            className="max-w-full max-h-full object-contain"
          />
          <button
            className="absolute top-0 right-0 p-4 top-16 z-index-10"
            onClick={() => setExpanded(false)}
          >
            <svg
              xmlns="(link unavailable)"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}

export default App;