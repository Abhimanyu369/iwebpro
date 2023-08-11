import axios from "axios";
import { useEffect, useState } from "react";
import Sliders from "react-slick";
import {BACKEND_COMMAN_URL} from "../../Api";

const Slider = () => {

  const [client,setClient] = useState([]);

  const fetchData = async ()=>{
    try {
      let data = await axios.get(BACKEND_COMMAN_URL+'/api/view_client');
      if(data.status === 200){
        setClient(data.data.data);
      }
      else{
        setClient([]);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    fetchData();
  },[]);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <>
      <div className="about-area pt-5 pb-5 mt-5 bg-dark">
        <div className="container">
              <Sliders {...settings}>
                {client.map((v)=>{
                  return (
                    <li className="thumb" key={v._id}>
                      <>
                          <img src={BACKEND_COMMAN_URL+v.img} alt="img" className="mx-auto" style={{width:'150px'}} />
                      </>
                    </li>
                  )
                })}
              </Sliders>
        </div>
      </div> 
    </>
  )
}

export default Slider;