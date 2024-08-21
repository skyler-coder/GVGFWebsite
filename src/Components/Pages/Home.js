import React, { useState, useEffect } from 'react';
const Indexbackground = "images/church_images/PXP-1451.jpg"

function App() {
  const [opacity, setOpacity] = useState(0);
  const [transform, setTransform] = useState('translateY(100px)');

  useEffect(() => {
    const intervalId = setTimeout(() => {
      setOpacity(1);
      setTransform('translateY(0)');
    }, 500); // adjust the delay to your liking
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div id='home'
      className="h-screen flex justify-center items-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${Indexbackground})`,
      }}
    >
      <div className='bg-black h-screen w-screen bg-opacity-60'>
      <p
        className="sm:text-6xl text-2xl text-center font-bold text-white pt-96"
        style={{
          opacity: opacity,
          transform: transform,
          transition: 'all 1s ease-in-out',
        }}
      >
        GOD'S VINEYARD GOSPEL FELLOWSHIP
      </p>
      </div>
    </div>
  );
}

export default App;