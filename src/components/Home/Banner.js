import React from "react";
import Carousel from "react-material-ui-carousel";
import './banner.css'
const data = [
    "https://rukminim1.flixcart.com/flap/1680/280/image/1defb861e409319b.jpg?q=50",
    " https://rukminim1.flixcart.com/flap/1680/280/image/685712c6cefb3c02.jpg?q=50",
    "https://rukminim1.flixcart.com/flap/1680/280/image/8d4150cc4f3f967d.jpg?q=50",
    "https://rukminim1.flixcart.com/flap/1680/280/image/685712c6cefb3c02.jpg?q=50"
]
const Banner = () => {
  return (
    <> 
     {/* carousel is used from material UI. */}
      <Carousel className="carasousel"
      autoPlay={true}
      animation="slide"
      indicators={false}
      navButtonsAlwaysVisible={true}
      cycleNavigation={true}
      navButtonsProps={{
          style: {
              background: "FFFFFF",
              color: "#FFFFFF",
              borderRadius: 0,
              marginTop: -22,
              height: "104px",
          }
      }}
      >
        {
          // just data is iterated to cover all points.
         data.map((imag,i)=>{
            return(
             <>
             <img src={imag} alt="img" key={i}className='banner_img' />
             </>
            )
         })
        }
        
      </Carousel>
      </>
  );
};

export default Banner;
