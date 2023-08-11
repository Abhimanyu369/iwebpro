import Header from '../components/NewPage/Header';
import Footer from '../components/NewPage/Footer';
import BackTop from '../components/NewPage/BackTop';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import {BACKEND_COMMAN_URL} from "../Api";

const StartHire = () => {

    const routePath = useLocation();
    const [suc,setsuc] = useState('');
    const [err,seterr] = useState('');
    const [data, setData] = useState(
        {
          company_name: '',
          email : '',
          phone : '',
          desc : '',
          requirement : '',
          tech : '',
          time : '',
          time_type : ''
        }
    );

    const handleSubmit = (e) => {
    let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
      if(!data.company_name || data.company_name === ''){
        e.preventDefault(); 
        seterr("Company Name Required.");
        setsuc('');
        document.getElementById('company_name').focus();
        return false;
      }
      else if(!data.email || data.email === ''){
        e.preventDefault(); 
        seterr("Email Required.");
        setsuc('');
        document.getElementById('email').focus();
        return false;
      }
      if(!regex.test(data.email)){
        e.preventDefault();
        seterr("Invalid Email.");
        setsuc('');
        document.getElementById('email').focus();
        return false;
      }
      else if(!data.phone || data.phone === ''){
        e.preventDefault(); 
        seterr("Phone No. Required.");
        setsuc('');
        document.getElementById('phone').focus();
        return false;
      }
      if(data.phone.length !== 10){
        e.preventDefault();
        seterr("10 Character Required In Phone No.");
        setsuc('');
        document.getElementById('phone').focus();
        return false;
      }
      else if(!data.tech || data.tech === ''){
        e.preventDefault(); 
        seterr("Technology Required.");
        setsuc('');
        document.getElementById('tech').focus();
        return false;
      }
      else if(!data.time_type || data.time_type === ''){
        e.preventDefault(); 
        seterr("Time Type Required.");
        setsuc('');
        document.getElementById('time_type').focus();
        return false;
      }
      else if(!data.desc || data.desc === ''){
        e.preventDefault(); 
        seterr("Description Required.");
        setsuc('');
        document.getElementById('desc').focus();
        return false;
      }
      else if(!data.requirement || data.requirement === ''){
        e.preventDefault(); 
        seterr("Requirement Required.");
        setsuc('');
        document.getElementById('requirement').focus();
        return false;
      }
      else if(!data.time || data.time === ''){
        e.preventDefault(); 
        seterr("Time Required.");
        setsuc('');
        document.getElementById('time').focus();
        return false;
      }
      else{
        e.preventDefault();
        axios.post(BACKEND_COMMAN_URL+'/api/start_hire', data)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        });
        setData({
          company_name: '',
          email : '', 
          phone : '',
          desc : '',
          requirement : '',
          tech : '',
          time : '',
          time_type : ''
        });
        seterr('');
        setsuc("Form Submitted.");
      }
    }

    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value});
    }
    useEffect(()=>{
      window.scrollTo(0, 0);
    },[routePath]);

  return (
    <>
      <Header />
      <div className="contact-area mb-5 pb-5" style={{marginTop:'150px'}}>
        <div className="container">
            <div className="contact-inner-1">
                <img className="top_image_bounce animate-img-1" src="assets/img/banner/2.png" alt="img" />
                <img className="top_image_bounce animate-img-2" src="assets/img/icon/26.png" alt="img" />
                <div className="row">
                    <div className="col-lg-8 wow animated fadeInLeft" data-wow-duration="1.5s" data-wow-delay="0.3s">
                        <img className="w-100" src="assets/img/bg/4.png" alt="img" />
                    </div>
                    <div className="col-lg-4 wow animated fadeInRight" data-wow-duration="1.5s" data-wow-delay="0.3s">
                        <div className="section-title mb-0">
                            <h6 className="sub-title">GET IN TOUCH</h6>
                            <h2 className="title">Lorem <span>Ipsum</span> To Dummy</h2>
                            <p className="content">He undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum.</p>
                            {err ? <p className='error'>{err}</p> : ''}
                            {suc ? <p className='success'>{suc}</p> : ''}
                            <form className="mt-4" onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="single-input-inner style-border">
                                          <input onChange={handleChange} type="text" name="company_name" id='company_name' className="mb-4 form-control" value={data.company_name} placeholder="Name"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="single-input-inner style-border">
                                          <input onChange={handleChange} type="text" name="email" id='email' className="mb-4 form-control" value={data.email} placeholder="Email"/>  
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="single-input-inner style-border">
                                          <input onChange={handleChange} type="number" name="phone" id='phone' className="mb-4 form-control" value={data.phone} placeholder="Phone No."/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="single-input-inner style-border">
                                          <input onChange={handleChange} type="text" name="tech" id='tech' className="mb-4 form-control" value={data.tech} placeholder="Tech Stack"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="single-input-inner style-border">
                                          <select className='form-control mb-4' name="time_type" id='time_type' value={data.time_type} onChange={handleChange}>
                                            <option value="">-- Select Time Type --</option>
                                            <option value='Full Time'>Full Time</option>
                                            <option value='Part Time'>Part Time</option>
                                            <option value='Hourly Basis'>Hourly Basis</option>
                                          </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="single-input-inner style-border">
                                          <input onChange={handleChange} type="text" name="desc" id='desc' className="mb-4 form-control" value={data.desc} placeholder="Short Description"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="single-input-inner style-border">
                                          <input onChange={handleChange} type="text" name="requirement" id='requirement' className="mb-4 form-control" value={data.requirement} placeholder="Requirement"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="single-input-inner style-border">
                                          <input onChange={handleChange} type="number" name="time" id='time' className="mb-4 form-control" value={data.time} placeholder="Period Of Time"/>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                      <button type="submit" className="mx-auto btn btn-base page-scroll px-sm-5 wow animated fadeInUp d-block" data-wow-delay='0.3s' style={{borderRadius: '5px'}}>Submit Now</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <Footer />
      <BackTop />
    </>
  )
}

export default StartHire;