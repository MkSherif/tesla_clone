import React from 'react';
import './Cardetail.css';

const CarDetail = ({ carDetails }) => {
  const sectionContent = carDetails.map((car, index) => (
    <div className="car-details-section" key={index}>
      <div className="car-details-card" data-aos="fade-up">
        <img src={car.image} alt={car.title} data-aos="fade-up" />
        <h2 className='title'>{car.title}</h2>
        <h3>{car.details}</h3>
        <div className="car-details-performance">
          <h3 className='titlesub'>{car.subtitle}</h3>
          <div className="performance-details"  style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap'}}>
          <div  >
               <h4>{car.range}</h4>
               <h5>{car.rangemile}</h5>
           </div>
           <div  >
               <h4>{car.rangeplus}</h4>
               <h5>{car.range_mile}</h5>
           </div>
           <div  >
               <h4>{car.accel}</h4>
               <h5>{car.accelmph}</h5>
           </div>
           <div>
               <h4>{car.drive}</h4>
               <h5>{car.drivetype}</h5>
           </div>
           <div>
               <h4>{car.speed}</h4>
               <h5>{car.speedmph}</h5>
           </div>
           <div>
               <h4>{car.towing}</h4>
               <h5>{car.lbs}</h5>
           </div>
           </div>
       </div>
        <div className="car-details-performance">
          <h3 className='titlesub'>{car.subtitle1}</h3>
          <div className="performance-details"  style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap'}}>
          <div  >
               <h4>{car.range1}</h4>
               <h5>{car.rangemile1}</h5>
           </div>
           <div  >
               <h4>{car.rangeplus1}</h4>
               <h5>{car.range_mile1}</h5>
           </div>
           <div  >
               <h4>{car.accel1}</h4>
               <h5>{car.accelmph1}</h5>
           </div>
           <div>
               <h4>{car.drive1}</h4>
               <h5>{car.drivetype1}</h5>
           </div>
           <div>
               <h4>{car.speed1}</h4>
               <h5>{car.speedmph1}</h5>
           </div>
           <div>
               <h4>{car.towing1}</h4>
               <h5>{car.lbs1}</h5>
           </div>
           </div>
       </div>
       <div className="car-details-performance">
          <h3 className='titlesub'>{car.subtitle2}</h3>
          <div className="performance-details"  style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap'}}>
          <div  >
               <h4>{car.range2}</h4>
               <h5>{car.rangemile2}</h5>
           </div>
           <div  >
               <h4>{car.rangeplus2}</h4>
               <h5>{car.range_mile2}</h5>
           </div>
           <div  >
               <h4>{car.accel2}</h4>
               <h5>{car.accelmph2}</h5>
           </div>
           </div  >
           </div>
       <div className="car-details-performance">
          <h3 className='titlesub'>{car.subtitle3}</h3>
          <div className="performance-details"  style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap',  borderBottom: '1px solid grey', paddingBottom: '15px'}}>
          <div  >
               <h4>{car.range3}</h4>
               <h5>{car.rangemile3}</h5>
           </div>
           <div  >
               <h4>{car.rangeplus3}</h4>
               <h5>{car.range_mile3}</h5>
           </div>
           <div className='link'>
               <h4>{car.accel3}</h4>
           </div>
           </div  >
           </div>
      </div>
      </div>
  ));

  return (
    <div className="car-details-container">
      {sectionContent}
    </div>
  );
};

export default CarDetail;
