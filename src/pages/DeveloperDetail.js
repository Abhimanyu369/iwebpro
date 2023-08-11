import Header from '../components/NewPage/Header';
import Footer from '../components/NewPage/Footer';
import BackTop from '../components/NewPage/BackTop';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {BACKEND_COMMAN_URL} from "../Api";

const DeveloperDetail = () => {

    const routePath = useLocation();
    const url = new URLSearchParams(window.location.search);
    const id = url.get('id');
    const navigate = useNavigate();
    
    const [dev,setDev] = useState({});
    const [features,setFeatures] = useState([]);
    const [skills,setSkills] = useState([]);

    const fetchData = async ()=>{
      try {
        let data = await axios.get(BACKEND_COMMAN_URL+'/api/view_developer_one_detail?id='+id);
        if(data.status === 200){
          setDev(data.data.data);
          setFeatures(data.data.data.features);
          setSkills(data.data.data.skills);
        }
        else{
          setDev([]);
        }
      } catch (error) {
        console.log(error);
      }
    }

    if(id){
        fetchData();
    }
    else{
        navigate('/');
    }
  
    useEffect(() => {
        fetchData();
        window.scrollTo(0, 0);
    },[routePath]);

  return (
    <>
        <Header />
        {dev.img ?
                <>
                    <div className="breadcrumb-area bg-cover" style={{backgroundImage: `url('./assets/img/bg/7.png')`}}>
                        <div className="container">
                            <div className="breadcrumb-inner">
                                <div className="row justify-content-center">
                                    <div className="col-lg-6">
                                        <h2 className="page-title wow animated fadeInLeft">{dev.title}</h2>
                                    </div>
                                    <div className="col-lg-6 text-lg-end wow animated fadeInRight">
                                        <ul className="page-list">
                                            <li><Link to="/">Home</Link></li>
                                            <li>-</li>
                                            <li>{dev.title}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="blog-area py-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 wow animated fadeInLeft">
                                    <div className="blog-details-page-content">
                                        <div className="single-blog-inner mb-0">
                                            <div className="thumb">
                                                <img src={BACKEND_COMMAN_URL+dev.img} alt="img"/>
                                            </div>
                                            <div className="details">
                                                <h4 className='mb-4'>{dev.title}</h4>
                                                <p>{dev.desc}</p>
                                                <h4 className='mb-4'>{dev.title} Features</h4>
                                                <ul className="single-list-inner style-check style-heading style-check mb-3">
                                                    {features.map((v)=>{
                                                        if(v !== ''){
                                                            return (
                                                                <li key={v}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path></svg> {v}</li>
                                                            )
                                                        }
                                                    })}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>  
                                <div className="col-lg-4 col-12 wow animated fadeInRight">
                                    <div className="td-sidebar">
                                        <div className="widget widget_catagory">
                                            <h4 className="widget-title">Catagory</h4>                                 
                                            <ul className="catagory-items">
                                                {skills.map((v)=>{
                                                    return (
                                                        <li key={v}><span>{v}</span></li>
                                                    )
                                                })}
                                            </ul>
                                        </div>
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

export default DeveloperDetail;