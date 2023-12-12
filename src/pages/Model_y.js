import React from 'react'
import Section from '../components/Section'
import Footer from '../components/footer/Footer'
import background from '../imagesandvideos/backgroundvideobg.mp4'
import Carouselimage from '../components/carouselimage/Carouselimage'
import Section1 from '../components/Section1'
import Imagegrid from '../components/imagegrid/Imagegrid'
import CarDetail from '../components/cardetails/Cardetails'
import './Home.css'

const slidesData = [
  {
    image: 'https://digitalassets.tesla.com/tesla-contents/image/upload/h_1080,w_1920,c_fit,f_auto,q_auto:best/Model-Y-Utility-B-Desktop-LHD-NA',
    caption: 'Room for up to seven with optional third row'
  },
  {
    image: 'https://digitalassets.tesla.com/tesla-contents/image/upload/h_1080,w_1920,c_fit,f_auto,q_auto:best/Model-Y-Utility-Hero-Desktop-LHD',
    caption: 'Versatile seating and storage for cargo and passengers'
  },
];

const data = [
  {
    "background": 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-Y-Interior-Hero-Desktop-LHD.jpg',
  },
];

const CarDetails = [
  {
     title: 'Model Y Specs',
     image: 'https://digitalassets.tesla.com/tesla-contents/image/upload/h_1285,w_1800,c_fit,f_auto,q_auto:best/Model-Y-Specs-Hero-Desktop-LHD',
     subtitle:'Performance',
     range: 'Range (est.)',
     rangemile: '396 mi',
     rangeplus: 'Range (+Range Extender)',
     range_mile: '440+ MILES',
     accel: 'Acceleration',
     accelmph:'2.6 SEC 0-60 MPH',
     drive:'Drive',
     drivetype:'ALL-WHEEL DRIVE',
     speed:'Top Speed',
     speedmph:'130 MPH',
     towing: 'Towing',
     lbs: '11,000 LBS',

     subtitle1: 'Dimensions',
     range1: 'Weight',
     rangemile1: '6,843 LBS',
     rangeplus1: 'Cargo',
     range_mile1:'120.9 CU FT',
     accel1: 'Wheels',
     accelmph1: '20"',
     drive1: 'Seating',
     drivetype1: '5 ADULTS',
     speed1: 'Displays',
     speedmph1: '18.5" CENTER TOUCHSCREEN 9.5" REAR TOUCHSCREEN',

     subtitle2: 'Charging',
     range2: 'Supercharging Max / payment Type',
     rangemile2: '250KW MAX; PAY PER USE',
     rangeplus2: 'Charging speed',
     range_mile2:'UP TO 128 MILES ADDED IN 15 MINUTES',

     subtitle3: 'warranty',
     range3: 'Basic Vehicle',
     rangemile3: '4 YEARS OR 50,000 MI, WHICHEVER COMES FIRST',
     rangeplus3: 'Battery & Drive Unit',
     range_mile3:'8 YEARS OR 150,000 MI, WHICHEVER COMES FIRST',
    },
 ];

function Model_y() {
  return (
    <div className='hero'>
         <Section backgroundvideo={background} heading="Model Y" subheading="*" 
          speed='396 mi' speed1='Range (EPA est.)' mi='1.99 s' mi1= '0-60 mph*' awd='200 mph' awd1='Top speed' hp='1,020 hp' hp1= 'Peak Power'
          button2='Order Now' />
          <Carouselimage slides={slidesData}/>
          {data.map((item, index) => (
         <Section1 key={index} background={item.background} title={item.title}
          description={item.description} color={item.color} moredetail={item.moredetail} 
          button1={item.button1} button2={item.button2} marginBottom={item.marginBottom}
        />
       ))}
       <Imagegrid image1= 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-Y-Interior-GlassRoof-Desktop-LHD.jpg'
       heading1= 'Panoramic Views, Quiet Ride'
       text1= 'Our all-glass roof makes the cabin feel open and airy, complete with extra headroom and unobstructed views of land and sky. Layers of acoustic glass provide a quiet ride as well as protection from glare, heat and UV rays—even on hot days.'
       />
       <CarDetail carDetails={CarDetails}/>
        <Footer />
    </div>
  )
}

export default Model_y