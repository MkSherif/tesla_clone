import React from 'react';
import './Section.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

function Section1({ background, title, description, color, moredetail, button1, button2, marginBottom}) {
  React.useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div className='container'>
      <div className='background'>
        <img src={background} alt="Your Image" style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100vh",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-1",
        }}/>
      </div>
      <div className='content'data-aos="fade-up" style={{ color: color }}>
        <div className="itemtext top-in"style={{marginBottom: marginBottom}} >
          <h1 >{title}</h1>
          <p>{description}</p>
          <h6>{moredetail}</h6>
        </div>
        <div className="btn">
        {button1 && <div className="leftbtn">
           {button1}
        </div>}
        {button2 && <div className="rightbtn">
            {button2}
        </div>}
        </div>
      </div>
    </div>
  )
}

export default Section1;
