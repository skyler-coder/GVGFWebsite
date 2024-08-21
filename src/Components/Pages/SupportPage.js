import React from 'react'
import Box  from '../Utilities/Box'

function SupportPage() {
  return (
    <div className='p-8'>
      <header className='text-3xl text-center'>Support Us On:</header>
      <div id='support' className='sm:p-8 p-0 flex justify-around flex-wrap'>
        <Box header={'Inviting Others'} text2={'Help by inviting someone today to any of our programmes'} detail={"The Harvest is large, but the Workers are few, Please invite someone to the fellowship, everyone is welcomed"} text1={"Join the membership of God's Vineyard Gospel Fellowship"}/>
        <Box body1={`1. SUNDAY SCHOOL MATERIALS`} body2={'2. WALFARE/ HOSPITALITY'} body3={'3. OUR OUTREACHES'} text1={"Name: God's Vineyard Gospel Fellowship"} text2={"Bank: Zenith Bank PLC"} text3={"Account No: 1015736399"}/>
        <Box header={'By Your Prayers'} body1={'Your prayer support is needed'}/>
      </div>
    </div>
  )
}

export default SupportPage