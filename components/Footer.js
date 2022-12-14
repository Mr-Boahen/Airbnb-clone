import React from 'react'

function Footer() {
  return (
    <div className='grid grid-cols-1  md:grid-cols-4 gap-y-10 px-32 py-14  bg-gray-200 text-gray-600'>
      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>ABOUT</h5>
        <p>How Airbnb works</p>
        <p>New room</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>
      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className="font-bold"> HOST</h5>
        <p>Papa React</p>
        <p>Presents</p>
        <p>Zero to Full stack Hero</p>
        <p>Hundreds of Students</p>
        <p>Join Now</p>
      </div >
      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className="font-bold">SUPPORT</h5>
        <p>Help Center</p>
        <p>Trust & Safety</p>
        <p> Say Hi YouTube</p>
        <p>Easter Eggs</p>
        <p>For the Win</p>

      </div>
      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className="font-bold">COMMUNITY</h5>
        <p>Accessibility</p>
        <p>Join the Clubs</p>
        <p>Make new Friends</p>
        <p>Share the Dream</p>
        <p>Make it happen</p>

      </div>
      <div></div> 
    </div>
  )
}

export default Footer
