import Header from '../components/NewPage/Header';
import Footer from '../components/NewPage/Footer';
import BackTop from '../components/NewPage/BackTop';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from "axios";
import { BACKEND_COMMAN_URL } from "../Api"

const Reviews = () => {

  const routePath = useLocation();
  const [review,setReview] = useState([]);

  const fetchData = async ()=>{
    try {
      let data = await axios.get(BACKEND_COMMAN_URL+'/api/view_review');
      if(data.status === 200){
        setReview(data.data.data);
      }
      else{
        setReview([]);
      }
    } catch (error) {
      console.log(error);
    }
  }
  
  useEffect(() => {
    fetchData();
    window.scrollTo(0, 0);
  },[routePath]);

  return (
    <>
      <Header />
      {review.length !== 0 ? 
        <div className="reviews py-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="section-title text-center">
                  <h6 className="sub-title wow animated fadeInDown" data-wow-delay='0.6s'>Reviews</h6>
                  <h2 style={{letterSpacing:'2px',fontSize:'40px',fontWeight:'900'}} className="wow animated fadeInDown" data-wow-duration="1.5s" data-wow-delay="0.3s">Lorem From Ipsum <span className="text-primary">Our Dummy Clients</span></h2>
                  <p className="mb-0 wow animated fadeInDown" data-wow-duration="1.5s">Better things are on the way <span className="text-dark" style={{fontWeight:'900'}}>"Has fo What r the b etter si nce you m oved to S upersou rcing?”</span>Thousands things are on the Thousands way we asked ou Thousands clients. </p>
                </div>
              </div>
            </div>
            <div className="videos">
              <ul className="row align-items-center mb-0 ps-0">
                {review.map((v)=>{
                  return (
                    <li key={v._id} className="col-lg-3 col-md-4 col-6 wow animated fadeInUp">
                      <>
                        <Link to={v.link} target="_blank">
                          <div className="video-inner mb-4 position-relative">
                            <img src={BACKEND_COMMAN_URL+v.img} alt="img" className="img-fluid"/>
                            <div className="video-content position-absolute top-0 p-2 d-flex justify-content-between align-items-start flex-column h-100 w-100">
                              <img src="/assets/img/youtube-play.svg" alt="img" className="img-fluid"/>
                              <div style={{lineHeight : '15px'}}>
                                <h6 className="text-white mb-0">{v.name}</h6>
                                <small className="text-white mb-0">{v.designation}</small>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </>
                    </li>
                  )
                })}
              </ul>
            </div>
            <div className="feedbacks pt-5">
              <ul className="feedback-box ps-0 mb-0">
                {review.map((v)=>{
                    return (
                      <li className="feedback-inner mb-sm-5 mb-4 d-grid wow animated fadeInUp" key={v._id}>
                          <>
                              <p className="text-dark">{v.desc}</p>
                              <h6>{v.name}, {v.designation}</h6>
                          </>
                      </li>
                    )
                  })}
              </ul>
            </div>
          </div>
        </div>
      : <div className='container py-5 d-flex align-items-center justify-content-center' style={{height : '800px'}} ><h2>Please Wait..</h2></div>}
      <Footer />
      <BackTop />
    </>
  )
}

export default Reviews;