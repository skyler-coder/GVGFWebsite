import React from 'react';
import Profile from './Profile';
import ReverseProfile from './ReverseProfile';
import FadeIn from './FadeIn';

function Page() {
  return (
    <div className="min-h-screen flex flex-col" id='outreaches'>
        <header className="bg-gray-200 py-4 px-8">
        <h1 className="text-3xl font-bold">EVANGELISATION: OUTREACHES DONE BY THE MINISTRY</h1>
      </header>
      <FadeIn bodyText={
        <Profile title={"Gospel Football Tournament 2024"} imagesrc={"images/Carousel_Images/FootballTournamentPhotos/PXP-1291.jpg"} text={"The Gospel Football Tornament came about as a result of Evangelising the youths for Christ. The 16 Team tournament was held all through the month of July 2024 in Jos, Plateau State, Nigeria."}/>
      }/>
      <FadeIn bodyText={
        <ReverseProfile title={"God's Alternative to Bloodshed in Nigeria"} imagesrc={"images/God's_Alternative_to_bloodshed/IMG-20220920-WA0016.jpg"} text={"A vision From the Lord About Plateau State When there was a series of crisis in the state Triggered A Prayer Work on the 19th of April 2013, it was also carried out years later in Lagos for Lagos on 19th September 2022. Hoping to have more of these in the coming future"}/>
      }/>
      <FadeIn bodyText={
        <Profile title={"Evangelism by the Prophetic Force"} imagesrc={"images/Carousel_Images/16_team_photos/PXP-9969.jpg"} text={`Prophetic FORCE is a volunteering outreact team of ministers aimed at curbing the state of insecurity in Nigeria by praying prophetically using God's Instructions.`} moreDetails={"Some Prophetic FORCE Ministers at the Gospel Tournament"} SupportHead={"Support us"} text1={"Name: Prophecy Today"} text2={"Bank: Fidelity Bank PLC"} text3={"Account No: 6060285222"} contact={"+2348060772971; +2348173447205; +2347067163747"}/>
      }/>
      </div>
  );
}

export default Page;