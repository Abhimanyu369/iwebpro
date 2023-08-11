import Header from '../components/NewPage/Header';
import Footer from '../components/NewPage/Footer';
import BackTop from '../components/NewPage/BackTop';
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import {BACKEND_COMMAN_URL} from "../Api";

const Event = () => {

  const routePath = useLocation();
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June","July", "Aug", "Sept", "Oct", "Nov", "Dec"];
  const [event,setEvent] = useState([]);

  const fetchData = async ()=>{
    try {
      let data = await axios.get(BACKEND_COMMAN_URL+'/api/view_event');
      if(data.status === 200){
        setEvent(data.data.data);
      }
      else{
        setEvent([]);
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
      {event.length !== 0 ? 
        <>
          <div className='event py-5'>
            <div className='container'>
              <div className="section-title">
                <div className="row text-center justify-content-center">
                    <div className="col-lg-7 wow animated fadeInDown">
                        <h6 className="sub-title">EVENTS</h6>
                        <h2 className="title">Lorem Ipsum is <span>simply dummy </span> text event</h2>
                        <p className='mb-0 lead'>There are many variations of passages of Lorem Ipsum available.</p>
                    </div>  
                </div>
              </div>
              <div className="page-event">
                <div className="container">
                  <div className="upcoming-event-list">
                    <ul className="mb-0 ps-0 event-block">
                      {event.map((v)=>{
                        return (
                            <li className="row mb-5" key={v._id}>
                          <>
                              <div className="col-lg-1 col-2 wow animated fadeInLeft">
                                      <div className="month">{monthNames[new Date(v.date).getMonth()]}</div>
                                      <div className="month-date-devider"></div>
                                      <h3 className="date mb-0">{new Date(v.date).getDate()}</h3>
                              </div>
                              <div className="col-lg-5 col-10 wow animated fadeInLeft">
                                <img src={BACKEND_COMMAN_URL+v.img} alt='img' />
                              </div>
                              <div className="col-lg-6 wow animated fadeInRight mt-4 mt-lg-0">
                                <h3 className="title">{v.title}</h3>
                                <div className="time mb-3">
                                    <div className='d-flex'>
                                      <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clock-fill text-dark" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/></svg></span>
                                      <span>
                                        <p className='mb-0 text-dark ms-2'>{monthNames[new Date(v.date).getMonth()]} {new Date(v.date).getDate()}, {new Date(v.date).getFullYear()} at {v.time}</p>
                                      </span>
                                    </div>
                                </div>
                                <p className='mb-4 text-dark'>"{v.desc}"</p>
                                {/* <a className="btn btn-base page-scroll px-sm-5" style={{borderRadius: '5px'}} href="#demo" data-wow-delay='1.2s'>Book Your Entry Pass</a> */}
                              </div>
                          </>
                            </li>
                        )
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      : <div className='container py-5 d-flex align-items-center justify-content-center' style={{height : '800px'}}><h2>Please Wait..</h2></div>}
      <Footer />
      <BackTop />
    </>
  )
}

export default Event;