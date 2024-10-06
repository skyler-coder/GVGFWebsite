import './App.css';
import Preloader from './Components/Utilities/Preloader';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Components/Pages/Home/HomePage'
import Gallery from './Components/Pages/Gallery';
import TournamentPhotos from './Components/Utilities/TournamentPhotos'
import images from './Components/Utilities/ImageDirectories/16TeamsPhotos.json'
import Books from './Components/Utilities/Books';
import FadeIn from './Components/Utilities/FadeIn';
import Footer from './Components/Pages/Footer';
import AboutUs from './Components/Pages/AboutUs';
import GallerySpace from "./Components/Utilities/GallerySpace"
import tournament2024 from "./Components/Utilities/ImageDirectories/16TeamsPhotos.json"
import alternativetobloodshed from "./Components/Utilities/ImageDirectories/Gods_Alternative_to_Bloodshed.json"
import weaponsofourwarfare from "./Components/Utilities/ImageDirectories/WeaponsOfOurWarfare.json"

function App() {
  let imageIds = [];
  for (let i = 0; i < images.length; i++) {
    imageIds.push(images[i].link);
  }

  return (
    <div className='w-screen h-auto'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/gallery" element={<Gallery />} />
            {imageIds.map((link, index) => (
              <Route key={index} path={`/${link}`} element={<TournamentPhotos />} />
            ))}
            <Route path='/books' element={<Books/>}/>
            <Route path='/aboutus' element={<AboutUs/>}/>
            <Route path='/tournament2024' element={<GallerySpace ImagesPath={tournament2024} bigImage={"images/Carousel_Images/16_team_photos/PXP-9969.jpg"} title={"God's Vineyard Gospel Tournament 2024"} id={"tournament"}/>}/>
            <Route path='/GodsAlternativetoBloodshed' element={<GallerySpace title={"God's Alternative to Bloodshed in Nigeria"} id={"GodsAlternativetoBloodshed"} ImagesPath={alternativetobloodshed} bigImage={"images/God's_Alternative_to_bloodshed/20240817_200524 (1).jpg"}/>}/>
            <Route path='/weaponsofourwarfare' element={<GallerySpace title={"Weapons Of Our Warfare"} id={"WeaponsOfOurWarfare"} ImagesPath={weaponsofourwarfare} bigImage={"images/WeaponsOfOurWarfare/WhatsApp Image 2024-08-21 at 07.59.19.jpeg"}/>}/>
            <Route path={``}/>
          </Routes>
      <FadeIn bodyText={
        <Footer/>
      }/>
      </BrowserRouter>
    </div>
  );
}

export default App;
