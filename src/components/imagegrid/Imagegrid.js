import React from 'react'
import './ImageGrid.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 


function Imagegrid({ image1, image2, heading1, text1, heading2, text2 }) {
    React.useEffect(() => {
        AOS.init({
          duration: 2000,
        });
      }, []);
  return (
    <div className="grid-container">
      <div
        className="grid-item image-grid-img " data-aos="fade-up"
        style={{ backgroundImage: `url(${image1})` }}
      ></div>
      <div className="grid-item grid-item-text" data-aos="fade-up">
        <h1>{heading1}</h1>
            {text1}
      </div>
      <div className="grid-item grid-item-text" data-aos="fade-up">
        <h1>{heading2}</h1>
             {text2}
      </div>
      <div
        className="grid-item image-grid-img " data-aos="fade-up"
        style={{ backgroundImage: `url(${image2})` }}
      ></div>
    </div>
  )
}

export default Imagegrid;
