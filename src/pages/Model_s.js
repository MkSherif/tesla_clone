import React from 'react'
import Section1 from '../components/Section1'
import Section from '../components/Section'
import Teslabackground from '../imagesandvideos/Teslabackgrounds.mp4'
import Footer from '../components/footer/Footer'
import ImageGrid from '../components/imagegrid/Imagegrid'
import Carouselvideo from '../components/carouselvideo/Carouselvideo'
import models1 from '../imagesandvideos/models1.webm'
import models2 from '../imagesandvideos/models2.webm'
import models3 from '../imagesandvideos/models3.webm'
import models4 from '../imagesandvideos/models4.webm'
import Cardetails from '../components/cardetails/Cardetails'
import './Home.css'

const data = [
  {
    "background": 'https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Model-S-Interior-Hero-Desktop-LHD',
    "title": "Interior of the Future",
     'marginBottom' : '560px'
  },
];

const videos =[
  {
    url : models1 , description: 'Cinematic Experience: A 17” touchscreen with left-right tilt offers 2200 x 1300 resolution, true colors and exceptional responsiveness for gaming, movies and more.'
  },
  {
    url : models2 , description: 'Yoke Steering: A bold new approach gives you a true connection to Model S, offering better steering feel and unobstructed views of your dash and the road ahead. Tap the brake and Model S automatically selects the correct direction to start your trip.'
  },
  {
    url : models3 , description: 'Perfect Environment: Air vents are hidden throughout the cabin, while tri-zone temperature controls, ventilated seats and HEPA filtration deliver the perfect environment.'
  },
  {
    url : models4 , description: 'Redesigned Second Row: Seating for three adults, with extra legroom, headroom and a stowable armrest with integrated storage and wireless charging.'
  },

]

const CarDetails = [
  {
     title: 'Model S Specs',
     image: 'https://digitalassets.tesla.com/tesla-contents/image/upload/h_3071,w_4096,c_fit,f_auto,q_auto:best/Model-S-Specs-Hero-Desktop-LHD',
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


function Model_s() {
  return (
    <div className='hero'> 
      <Section backgroundvideo={Teslabackground} heading="Model S" subheading="From $71,090*" 
      speed='396 mi' speed1='Range (EPA est.)' mi='1.99 s' mi1= '0-60 mph*' awd='200 mph' awd1='Top speed' hp='1,020 hp' hp1= 'Peak Power'
      button2='Order Now' />
        {data.map((item, index) => (
         <Section1 key={index} background={item.background} title={item.title}
          description={item.description} color={item.color} moredetail={item.moredetail} 
          button1={item.button1} button2={item.button2} marginBottom={item.marginBottom}
        />
       ))}
       <ImageGrid  image1='https://digitalassets.tesla.com/tesla-contents/image/upload/h_584,w_1040,c_fit,f_auto,q_auto:best/MS-Interior-Grid-A-Desktop' 
       image2= 'https://digitalassets.tesla.com/tesla-contents/image/upload/h_584,w_1040,c_fit,f_auto,q_auto:best/MS-Interior-Grid-D-Desktop'
      text1='Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging.' 
      text2='With front and rear trunks and fold-flat seats you can fit your bike without taking the wheel off—and your luggage too. Compare Models'
      heading1= 'Stay Connected' heading2= 'Room for Everything'/>
      <Carouselvideo videos={videos}/>
      <ImageGrid  image1='https://digitalassets.tesla.com/tesla-contents/image/upload/h_1620,w_2880,c_fit,f_auto,q_auto:best/Model-S-Exterior-Grid-A-Desktop-Global' 
       image2= 'https://digitalassets.tesla.com/tesla-contents/image/upload/h_1620,w_2880,c_fit,f_auto,q_auto:best/Model-S-Exterior-Grid-C-Desktop-Global'
      text1='Staggered, performance wheels and tires keep the car planted and help transfer maximum power down to the road.' 
      text2='An iconic silhouette meets refreshed, elegant proportions.'
      heading1= 'Relentless Performance' heading2= 'Refined Styling'/>
      <Cardetails carDetails={CarDetails}/>
       <Footer />
    </div>
  )
}

export default Model_s