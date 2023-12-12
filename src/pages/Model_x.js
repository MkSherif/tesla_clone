import React from 'react'
import Section1 from '../components/Section1'
import Section from '../components/Section'
import Teslabackground from '../imagesandvideos/Teslabackgroundx.mp4'
import Footer from '../components/footer/Footer';
import models1 from '../imagesandvideos/models1.webm'
import models2 from '../imagesandvideos/models2.webm'
import models3 from '../imagesandvideos/models3.webm'
import models4 from '../imagesandvideos/models4.webm'
import Carouselvideo from '../components/carouselvideo/Carouselvideo'
import Imagegrid from '../components/imagegrid/Imagegrid';
import Cardetail from '../components/cardetails/Cardetails'
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
     title: 'Model X Specs',
     image: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-X-Specs-Desktop_Mobile-Global.jpg',
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


function Model_x() {
  return (
    <div className='hero'>
         <Section backgroundvideo={Teslabackground} heading="Model X" subheading="*" 
          speed='396 mi' speed1='Range (EPA est.)' mi='1.99 s' mi1= '0-60 mph*' awd='200 mph' awd1='Top speed' hp='1,020 hp' hp1= 'Peak Power'
          button2='Order Now' />
         {data.map((item, index) => (
         <Section1 key={index} background={item.background} title={item.title}
          description={item.description} color={item.color} moredetail={item.moredetail} 
          button1={item.button1} button2={item.button2} marginBottom={item.marginBottom}
        />
       ))}
        <Carouselvideo videos={videos}/>
        <Imagegrid  image1='https://digitalassets.tesla.com/tesla-contents/image/upload/h_2300,w_4096,c_fit,f_auto,q_auto:best/MX-Interior-Grid-B-Desktop_LHD' 
       image2= 'https://digitalassets.tesla.com/tesla-contents/image/upload/h_584,w_1040,c_fit,f_auto,q_auto:best/MX-Interior-Grid_C-Desktop'
      text1='Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging.' 
      text2='A 22-speaker, 960-watt audio system with Active Road Noise Reduction offers the best listening experience wherever you are.'
      heading1= 'Stay Connected' heading2= 'Sublime Sound'/>
      <Cardetail carDetails={CarDetails}/>
       <Footer />
    </div>
  )
}

export default Model_x