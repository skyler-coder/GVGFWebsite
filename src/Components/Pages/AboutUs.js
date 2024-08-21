import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'react-bootstrap-icons';
import { useEffect } from 'react';
const image = "images/church_images/20240817_124141.jpg"

function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className='w-screen h-16 bg-white fixed p-4 opacity-100 z-10'>
        <Link to={'/homepage'} className='z-10'><ArrowLeft className='w-8 h-8'/></Link>
      </div>
        {/* Image Section */}
        <div className='pt-16'>
          <div className="container mx-auto p-4 pt-6">
          <div className="flex justify-center mb-8">
            <img
              src={image}
              alt="About Us Image"
              className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 rounded-lg shadow-lg"
            />
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <p className="text-lg">
              God's Vineyard Gospel Fellowship was registered by the Corporate Affairs in Nigeria in April 2018. It is a Pentecostal Church that was brought about to preach the word of God, win and nuture souls for the Kingdom of God. It was Founded by Late Pastor Kayode Disu and his wife, Pastor Mrs Salewa Disu in November 1996. The Ministry has been able to touch lives in various capacities, e.g Pastorial, Prophecies and Evangelism(Outreaches). 
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">Aims and Objectives</h2>
            <ul className="list-disc pl-8">
              <p>The aims and objectives of the Ministry are:</p>
              <li className="mb-2">To preach the Gospel of Our Lord Jesus Christ.</li>
              <li className="mb-2">To preach the good news about redemption through Our Lord Jesus Christ.</li>
              <li className="mb-2">To equip Christians for works of service, encouraging spiritual growth and helping them to recognise and develop their God-Given gifts through the teachings of the Bible, the Ministry of the Holy Spirit and worship.</li>
              <li className="mb-2">To train and ordain Ministers of the gospel for the purpose of spreading the gospel. To provide instructions and fellowship for believers, seeking to build them up to the measure of the stature of the fullness of Christ (Eph 4:13).</li>
              <li className="mb-2">To glorify the Lord Jesus Christ-The Head of the Church.</li>
              <li className="mb-2">To proclaim the Gospel of the Lord Jesus Christ as revealed in the scriptures and to encourage and support the proclamation of the Gospel in accordarice with Matthew 28:18-20 to the ends of the earth.</li>
            </ul>
          </div>
        </div>
        </div>
    </div>
  );
}

export default AboutUs;