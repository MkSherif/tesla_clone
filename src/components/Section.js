import React from 'react'
import './Section.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; 


function Section({backgroundvideo, heading, subheading, button1, button2, speed, speed1, mi, mi1, awd, awd1,hp, hp1}) {
  React.useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div className='container'>
         <video autoPlay loop muted
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-1"
        }}
      >
        <source src={backgroundvideo} type="video/mp4" />
      </video>
       <div className="itemtext top-in" data-aos="fade-up"  >
        <h1>
           {heading}
        </h1>
        <p>{subheading}</p>
       </div>
       <div className="speeds top-in" style={{display: 'flex', justifyContent: 'space-between', marginBottom: '20px'}}>
           <div  style={{marginRight: '70px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
               <h2>{speed}</h2>
               <h5>{speed1}</h5>
           </div>
           <div  style={{marginRight: '70px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
               <h2>{mi} </h2>
               <h5>{mi1}</h5>
           </div>
           <div  style={{marginRight: '70px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
               <h2>{awd} </h2>
               <h5>{awd1}</h5>
           </div>
           <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
               <h2>{hp} </h2>
               <h5>{hp1}</h5>
           </div>
       </div>
       <div className="btn" >
       {button1 && <div className="leftbtn ">
           {button1}
        </div>}
        {button2 && <div className="rightbtn">
            {button2}
        </div>}
       </div>
    </div >
  )
}


export default Section