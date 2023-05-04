import React , { useEffect } from 'react'
import Banner from './Banner'
import Slide from './Slide';
// import { products } from './productdata';
import "./home.css";
import { Divider, responsiveFontSizes } from '@mui/material';
import { getProducts } from '../redux/actions/action';
import{useDispatch,useSelector} from "react-redux";
const Maincomp = () => {

  const { products } = useSelector(state => state.getproductsdata);
  console.log(products);

  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getProducts());
  }, [dispatch])
  console.log(products);
  return (
  <>
    <div className='home_section'style={{backgroundColor: '#7DCBDD'}}>
      <div className="banner_part">
        <Banner/>
      </div>
      <div className="slide_part">
        <div className="left_slide"><Slide title="Deal Of The Day" products={products}/>  </div>
        <div className="right_slide" id="festival" style={{backgroundColor: '#50B1C8',borderRadius:'15px'}} >
          <h4 >Festival Latest Launches</h4>
          <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Jupiter/Launches/T3/DesktopGateway_CategoryCard2x_758X608_T3._SY608_CB639883570_.jpg" alt="rightimg" />
                        {/* <a href="#">See more</a> */}
          </div>
          </div>
          <Slide title="Today's Deal" products={products}/>
          <div className="center_img">
                    <img src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg" alt="" />
                </div>
          <Slide title="Best Seller" products={products}/>
          <Slide title="Up to 80% off" products={products}/>
    </div>
    </>)
}

export default Maincomp;