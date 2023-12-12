import React from 'react'
import Section from '../components/Section'
import './Home.css'
import Section1 from '../components/Section1'
import Teslabackground from '../imagesandvideos/Teslabackground.mp4'
import background2 from '../imagesandvideos/background2.png'
import background3 from '../imagesandvideos/background3.png'
import background4 from '../imagesandvideos/background4.png'
import background6 from '../imagesandvideos/background6.png'
import Teslabackground1 from '../imagesandvideos/backgroundvideobg.mp4'
import Footer from '../components/footer/Footer'

const data = [
  {
    "background": background2,
    "title": "Model 3",
    "description": "Lease starting at $429/mo*",
    'button1': 'Order Now',
    'button2': 'Demo Drive',
  },
  {
    "background": background3,
    "title": "Model X",
    "description": "From $68,590*",
    "moredetail": "After Federal Tax Credit & Est. Gas Savings",
    "color": 'black',
    'button1': 'Order Now',
    'button2': 'Demo Drive',
  },
  {
    "background": background4,
    "title": "Model S",
    "description": "From $71,090*",
    "moredetail": "After Est. Gas Savings",
    "color": 'black',
    'button1': 'Order Now',
    'button2': 'Demo Drive',
  },
  {
    "background": background6,
    'button1': 'Order Now',
    'button2': 'Demo Drive',
  },
];

function Home() {
  return (
    <div className='hero'>
         <Section backgroundvideo={Teslabackground} heading="Model Y" subheading="Lease starting at $399/mo*" button1='Order Now' button2='Demo Drive' />
       {data.map((item, index) => (
         <Section1 key={index} background={item.background} title={item.title} description={item.description} color={item.color} moredetail={item.moredetail} button1={item.button1} button2={item.button2} />
       ))}
       <Section backgroundvideo={Teslabackground1} heading="Experience Tesla" subheading="Schedule a Demo Drive Today" button2='Demo Drive'/>
       <Footer />
    </div>
  )
}

export default Home
