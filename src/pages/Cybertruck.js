import React from 'react'
import Section from '../components/Section'
import cypertruckbg1 from '../imagesandvideos/cypertruckbg.mp4'
import Imagegrid from '../components/imagegrid/Imagegrid'
import cypertruckbg3 from '../imagesandvideos/cypertruckbg3.png'
import cypertruckbg4 from '../imagesandvideos/cypertruckbg4.png'
import Carousel from '../components/carousel/Carousel'
import Cardetails from '../components/cardetails/Cardetails'
import backgroundimage6 from '../imagesandvideos/background6.png'
import Footer from '../components/footer/Footer'

const CarDetails = [
  {
     title: 'CYPERTRUCK SPECS',
     details: 'Cybertruck will come in three variants: Single Motor Rear-Wheel Drive, Dual Motor All-Wheel Drive, and Tri-Motor All-Wheel Drive.',
     image: 'https://digitalassets.tesla.com/tesla-contents/image/upload/Cybertruck-Specs-Imperial-Desktop-Mobile.png',
     subtitle:'Performance',
     range: 'Range (est.)',
     rangemile: '320 MILES',
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


const items = [
    { heading: 'THEATER ON WHEELS', text: 'MASSIVE 18.5” INFINITY TOUCHSCREEN IN THE FRONT AND 9.4” TOUCHSCREEN IN THE BACK WITH AN ALL-NEW USER INTERFACE.', 
    image: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Cybertruck-Human-Meet-Machine-Carousel-Slide-1-Two-Screens-Desktop.png' },
    { heading: 'CHARGE EVERYTHING', text: 'FAST-CHARGE YOUR PHONE, LAPTOP OR TOOLS FROM THE FRONT SEAT, BACK SEAT OR BED WITH WIRELESS CHARGING, 65W USB-C AND 120V/240V OUTLETS.', 
    image: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Cybertruck-Human-Meet-Machine-Carousel-Slide-3-Charging-Desktop.png' },
    { heading: 'JUST IN CASE', text: 'ALL-TERRAIN TIRES HAVE YOU COVERED IN ANY ENVIRONMENT. BRING A SPARE TIRE FOR WHEN YOU GO WHERE ROADSIDE ASSISTANCE CAN’T.', 
    image: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Cybertruck-Keep-the-Adventure-Going-Carousel-Slide-3-Spare-Desktop.png' },
  ];

  const data =[
    {
      "background" : backgroundimage6,
      'button2' : 'Order Now'
    }
  ]
function Cybertruck() {
  return (
    <div className='hero'>
    <Section backgroundvideo={cypertruckbg1} heading="Cypertruck"   button2='Order Now'
    speed= '11,000 LBS' speed1='TOWING CAPACITY'mi='340 MILES*' mi1= 'EST. RANGE' awd='2.6 SEC' awd1='0-60 MPH' />    
      <Imagegrid  image1={cypertruckbg3} image2={cypertruckbg4} 
      text1='ACCESS A 6’X4’ BED, PLUS EVEN MORE ROOM IN THE FRONT TRUNK, ON THE ROOF AND IN A HIDDEN GEAR LOCKER.' 
      text2='WITH A MAXIMUM PAYLOAD OF 2,500 POUNDS AND 67 CUBIC FEET OF LOCKABLE STORAGE, CYBERTRUCK HAS ALL THE CAPACITY YOU NEED.'
      heading1= 'PACK IT UP' heading2= 'LOAD IT UP'/>
      <Carousel items={items} />
      <Cardetails carDetails={CarDetails} />
      <Footer />
  </div>
  )
}

export default Cybertruck