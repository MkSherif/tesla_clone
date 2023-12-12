import React from 'react'
import Section from '../components/Section'
import Teslabackground2 from '../imagesandvideos/model_3.mp4'
import Imagegrid from '../components/imagegrid/Imagegrid';
import Footer from '../components/footer/Footer';
import model3bg1 from '../imagesandvideos/model3bg1.png'
import model3bg2 from '../imagesandvideos/model3bg2.png'
import Carouselimage from '../components/carouselimage/Carouselimage'
import Section1 from '../components/Section1'
import Carousel from '../components/carousel/Carousel';
import Cardetails from '../components/cardetails/Cardetails'
import './Home.css'


const slidesData = [
  {
    image: 'https://digitalassets.tesla.com/tesla-contents/image/upload/h_1153,w_2688,c_fit,f_auto,q_auto:best/Model-3-Interior-Carousel-Slide-1-Desktop-LHD',
    caption: '15-Inch Touchscreen: A minimal interior aesthetic—with all controls accessible on the central 15-inch touchscreen and the steering wheel.'
  },
  {
    image: 'https://digitalassets.tesla.com/tesla-contents/image/upload/h_1153,w_2688,c_fit,f_auto,q_auto:best/Model-3-Interior-Carousel-Slide-2-Desktop-LHD',
    caption: 'Spacious Cabin: The forward-designed instrument panel provides even more legroom in the front, for a spacious passenger cabin.'
  },
  {
    image: 'https://digitalassets.tesla.com/tesla-contents/image/upload/h_1153,w_2688,c_fit,f_auto,q_auto:best/Model-3-Interior-Carousel-Slide-3-Desktop-LHD',
    caption: 'Storage and Charging: The premium center console is modern and efficient, with plenty of covered storage and charging for two smartphones.'
  },
  {
    image: 'https://digitalassets.tesla.com/tesla-contents/image/upload/h_1153,w_2688,c_fit,f_auto,q_auto:best/Model-3-Interior-Carousel-Slide-4-Desktop-Global',
    caption: 'Max Legroom: The back seat is very comfortable—with maximum legroom and beautiful views through the all-glass roof.'
  },
];

const itemdata = [
  { heading: 'Gaming and Streaming',
    text: ' In-car gaming, streaming and radio via Premium Connectivity.',
    image: 'https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Model-3-Better-Over-Time-Carousel-Slide-1-Desktop-LHD',
  },
  { heading: 'Real-Time Navigation',
    image: 'https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Model-3-Better-Over-Time-Carousel-Slide-2-Desktop-LHD',
    text: ' Smart routing that automatically adjusts to real-time traffic conditions.',
  },
  { heading: 'Custom Drive Settings',
    image: 'https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Model-3-Better-Over-Time-Carousel-Slide-3-Desktop-LHD',
    text: ' Adjustable drive settings and cabin controls.',
  },
  { heading: 'Climate Control',
    image: 'https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Model-3-Better-Over-Time-Carousel-Slide-4-Desktop-LHD',
    text: ' Control air flow from the dashboard, in one or two directions.',
  },
];

const CarDetail = [
  {
     title: 'Model 3 Specs',
     details: '',
     image: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-3-Specs-Performance-Imperial.png',
     subtitle:'Drive',
     range: 'Battery',
     rangemile: 'Long Range',
     rangeplus: 'Range (EPA est.)',
     range_mile: '315 mi',
     accel: 'Acceleration',
     accelmph:'3.1s 0-60 mph With rollout subtracted',
     drive:'Drive',
     drivetype:'Dual Motor All-Wheel Drive',

     subtitle1: 'Dimensions',
     range1: 'Weight',
     rangemile1: '4,048 LBS',
     rangeplus1: 'Cargo',
     range_mile1:'23 CU FT',
     accel1: 'Wheels',
     accelmph1: '20"',
     drive1: 'Seating',
     drivetype1: '5 ADULTS',
     speed1: 'Displays',
     speedmph1: '15" CENTER TOUCHSCREEN',
     towing1: 'Ground Clearance',
     lbs1:'5.5"',

     subtitle2: 'Charging',
     range2: 'Supercharging Max / payment Type',
     rangemile2: '250KW MAX; PAY PER USE',
     rangeplus2: 'Charging speed',
     range_mile2:'UP TO 147 MILES ADDED IN 15 MINUTES',
     

     subtitle3: 'warranty',
     range3: 'Basic Vehicle',
     rangemile3: '4 YEARS OR 50,000 MI, WHICHEVER COMES FIRST',
     rangeplus3: 'Battery & Drive Unit',
     range_mile3:'8 YEARS OR 120,000 MI, WHICHEVER COMES FIRST',
     accel3: 'See Details',
    },
 ];

const data = [
  {
    "background": 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-3-Performance-Hero-Desktop-LHD.jpg',
    'title': 'Quick Acceleration',
    'description': 'Accelerate from 0-60 mph† in as little as 3.1 seconds with an optional Performance upgrade—featuring Dual Motor AWD, upgraded brakes and more. Chat with a Tesla Advisor to learn more about Model 3.',
    'button2': 'ORDER SOON',
    'color': 'black',
    'moredetail': 'After Est. Gas Savings'
    
  },
];

function Model_3() {
  return (
       <div className='hero'>
         <Section backgroundvideo={Teslabackground2} heading="Model 3" subheading="Lease starting at $329/mo*" button1='Explore Inventory' button2='Custom Order'
         speed= ' 3.1s' speed1='0-60 mph'mi='333 mi' mi1= 'Range (EPA est.)' awd='AWD' awd1='Dual Motor' />          
         <Imagegrid image1={model3bg1} image2={model3bg2} 
      text1='Safety is the most important part of every Tesla. We design our vehicles to exceed safety standards.' 
      text2='The inside of Model 3 is unlike any other vehicle with unrivaled technology, premium materials and plenty of legroom.'
      heading1= 'Safety-First Design' heading2= 'Built Around the Driver'/>
         <Carouselimage slides={slidesData}/>
         {data.map((item, index) => (
         <Section1 key={index} background={item.background} title={item.title} description={item.description} color={item.color} moredetail={item.moredetail} button1={item.button1} button2={item.button2} />
       ))}
       <Carousel items={itemdata}/>
       <Cardetails carDetails={CarDetail}/>
         <Footer />
       </div>
  )
}

export default Model_3