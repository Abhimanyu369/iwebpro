import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {BACKEND_COMMAN_URL} from "../../Api";
import Header from "../NewPage/Header";
import Footer from "../NewPage/Footer";

const Developer = () => {

  const navigate = useNavigate();
  const [err,seterr] = useState('');
  const [suc,setsuc] = useState('');
  const [data,setData] = useState({
    first_name : '',
    last_name : '',
    designation : '',
    email : '',
    framework : '',
    database : '',
    operating_system : '',
    web_server : '',
    programming_language : '',
    browser : '',
    linkedin : '',
    expertise : '',
    experience : '',
    rate : '',
    technology : '',
    availability : ''
  });
  
  const fetchData = async (data)=>{
    let fdata = await axios.post(BACKEND_COMMAN_URL+'/api/add_developer',data);
    if(fdata.status === 200){
      navigate('/active-requirements');
      document.getElementById('email').text = '';
    }
    else{
      navigate('/active-requirements');
    }
  }

  const formSubmit = (e)=>{
    let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}'); 
    if(!data.first_name || data.first_name === ''){
      e.preventDefault(); 
      seterr("First Name Required.");
      setsuc('');
      document.getElementById('first_name').focus();
      return false;
    }
    else if(!data.last_name || data.last_name === ''){
      e.preventDefault(); 
      seterr("Last Name Required.");
      setsuc('');
      document.getElementById('last_name').focus();
      return false;
    }
    else if(!data.designation || data.designation === ''){
      e.preventDefault(); 
      seterr("Designation Required.");
      setsuc('');
      document.getElementById('designation').focus();
      return false;
    }
    else if(!data.expertise || data.expertise === ''){
      e.preventDefault(); 
      seterr("Expertise Required.");
      setsuc('');
      document.getElementById('expertise').focus();
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
    else if(!data.email || data.email === ''){
      e.preventDefault(); 
      seterr("Email Required.");
      setsuc('');
      document.getElementById('email').focus();
      return false;
    }
    else if(!data.technology || data.technology === ''){
      e.preventDefault(); 
      seterr("Technology Required.");
      setsuc('');
      document.getElementById('technology').focus();
      return false;
    }
    else if(!data.framework || data.framework === ''){
      e.preventDefault(); 
      seterr("Framework Required.");
      setsuc('');
      document.getElementById('framework').focus();
      return false;
    }
    else if(!data.programming_language || data.programming_language === ''){
      e.preventDefault(); 
      seterr("Programming Language Required.");
      setsuc('');
      document.getElementById('programming_language').focus();
      return false;
    }
    else if(!data.browser || data.browser === ''){
      e.preventDefault(); 
      seterr("Browser Required.");
      setsuc('');
      document.getElementById('browser').focus();
      return false;
    }
    else if(!data.database || data.database === ''){
      e.preventDefault(); 
      seterr("Database Required.");
      setsuc('');
      document.getElementById('database').focus();
      return false;
    }
    else if(!data.web_server || data.web_server === ''){
      e.preventDefault(); 
      seterr("Web Server Required.");
      setsuc('');
      document.getElementById('web_server').focus();
      return false;
    }
    else if(!data.operating_system || data.operating_system === ''){
      e.preventDefault(); 
      seterr("Operting System Required.");
      setsuc('');
      document.getElementById('operating_system').focus();
      return false;
    }
    else if(!data.linkedin || data.linkedin === ''){
      e.preventDefault(); 
      seterr("LinkedIn Link Required.");
      setsuc('');
      document.getElementById('linkedin').focus();
      return false;
    }
    else if(!data.rate || data.rate === ''){
      e.preventDefault(); 
      seterr("Rate Required.");
      setsuc('');
      document.getElementById('rate').focus();
      return false;
    }
    else if(!data.experience || data.experience === ''){
      e.preventDefault(); 
      seterr("Experience Required.");
      setsuc('');
      document.getElementById('experience').focus();
      return false;
    }
    else if(!data.availability || data.availability === '' ){
      e.preventDefault(); 
      seterr("Availability Required.");
      setsuc('');
      return false;
    }
    else{
      fetchData(data);
      seterr('');
      setsuc("Form Submitted.");
      setData({
        first_name : '',
        last_name : '',
        designation : '',
        email : '',
        framework : '',
        database : '',
        operating_system : '',
        web_server : '',
        programming_language : '',
        browser : '',
        linkedin : '',
        expertise : '',
        experience : '',
        rate : '',
        technology : '',
        availability : ''
      })
      e.preventDefault(); 
    }
  }

  return (
    <>
    <Header />
      <div className="developer py-5">
        <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center">
                <h6 className="sub-title wow fadeInDown" data-wow-delay='0.6s'>Developer Form</h6>
                <h2 style={{letterSpacing:'2px',fontSize:'40px',fontWeight:'900'}} className="wow animated fadeInDown" data-wow-duration="1.5s" data-wow-delay="0.3s">Lorem Ipsum <span className="text-primary">Valued Clients</span></h2>
                <p className="mb-0 wow animated fadeInDown" data-wow-duration="1.5s">Thousands things are on the Thousands way we asked ou Thousands clients. Thousands of people answered of their comments.</p>
              </div>
            </div>
          </div>
          {err ? <p style={{color : 'red'}}>{err}</p> : ''}
          {suc ? <p style={{color : 'green'}}>{suc}</p> : ''}
          <form className="row wow animated fadeInUp" method="post" onSubmit={formSubmit} data-wow-delay='0.3s'>
            <div className="col-lg-4 col-sm-6 single-input-inner style-border">
              <label htmlFor="first_name" className="text-dark developerlabel">First Name</label>
              <input type="text" value={data.first_name} id="first_name" onChange={(e)=> setData({...data,first_name : e.target.value})} name="first_name" className="mb-4 form-control" placeholder="Enter Your First Name"/>
            </div>
            <div className="col-lg-4 col-sm-6 single-input-inner style-border">
              <label htmlFor="last_name" className="text-dark developerlabel">Last Name</label>
              <input type="text" value={data.last_name} id="last_name" onChange={(e)=> setData({...data,last_name : e.target.value})} name="last_name" className="mb-4 form-control" placeholder="Enter Your Last Name"/>
            </div>
            <div className="col-lg-4 col-sm-6 single-input-inner style-border">
              <label htmlFor="designation" className="text-dark developerlabel">Designation</label>
              <input type="text" value={data.designation} id="designation" onChange={(e)=> setData({...data,designation : e.target.value})} name="designation" className="mb-4 form-control" placeholder="Designation"/>
            </div>
            <div className="col-lg-4 col-sm-6 single-input-inner style-border">
              <label htmlFor="expertise" className="text-dark developerlabel">Expertise</label>
              <input type="text" value={data.expertise} id="expertise" onChange={(e)=> setData({...data,expertise : e.target.value})} name="expertise" className="mb-4 form-control" placeholder="Expertise"/>
            </div>
            <div className="col-lg-4 col-sm-6 single-input-inner style-border">
              <label htmlFor="email" className="text-dark developerlabel">Email</label>
              <input type="text" value={data.email} id="email" onChange={(e)=> setData({...data,email : e.target.value})} name="email" className="mb-4 form-control" placeholder="Email"/>
            </div>
            <div className="col-lg-4 col-sm-6 single-input-inner style-border">
              <label htmlFor="technology" className="text-dark developerlabel">Technology</label>
              <input type="text" value={data.technology} id="technology" onChange={(e)=> setData({...data,technology : e.target.value})} name="technology" className="mb-4 form-control" placeholder="Technology"/>
            </div>
            <div className="col-lg-4 col-sm-6 single-input-inner style-border">
              <label htmlFor="framework" className="text-dark developerlabel">Framework</label>
              <input type="text" value={data.framework} id="framework" onChange={(e)=> setData({...data,framework : e.target.value})} name="framework" className="mb-4 form-control" placeholder="Framework"/>
            </div>
            <div className="col-lg-4 col-sm-6 single-input-inner style-border">
              <label htmlFor="programming_language" className="text-dark developerlabel">Programming Language</label>
              <input type="text" value={data.programming_language} id="programming_language" onChange={(e)=> setData({...data,programming_language : e.target.value})} name="programming_language" className="mb-4 form-control" placeholder="Programming Language"/>
            </div>
            <div className="col-lg-4 col-sm-6 single-input-inner style-border">
              <label htmlFor="browser" className="text-dark developerlabel">Browser</label>
              <input type="text" value={data.browser} id="browser" onChange={(e)=> setData({...data,browser : e.target.value})} name="browser" className="mb-4 form-control" placeholder="Browser"/>
            </div>
            <div className="col-lg-4 col-sm-6 single-input-inner style-border">
              <label htmlFor="database" className="text-dark developerlabel">Database</label>
              <input type="text" value={data.database} id="database" onChange={(e)=> setData({...data,database : e.target.value})} name="database" className="mb-4 form-control" placeholder="Database"/>
            </div>
            <div className="col-lg-4 col-sm-6 single-input-inner style-border">
              <label htmlFor="web_server" className="text-dark developerlabel">Web Server</label>
              <input type="text" value={data.web_server} id="web_server" onChange={(e)=> setData({...data,web_server : e.target.value})} name="web_server" className="mb-4 form-control" placeholder="Web Server"/>
            </div>
            <div className="col-lg-4 col-sm-6 single-input-inner style-border">
              <label htmlFor="operating_system" className="text-dark developerlabel">Operating System</label>
              <input type="text" value={data.operating_system} id="operating_system" onChange={(e)=> setData({...data,operating_system : e.target.value})} name="operating_system" className="mb-4 form-control" placeholder="Operating System"/>
            </div>
            <div className="col-lg-4 col-sm-6 single-input-inner style-border">
              <label htmlFor="linkedin" className="text-dark developerlabel">Linkedin URL</label>
              <input type="text" value={data.linkedin} id="linkedin" onChange={(e)=> setData({...data,linkedin : e.target.value})} name="linkedin" className="mb-4 form-control" placeholder="Linkedin URL"/>
            </div>
            <div className="col-lg-4 col-sm-6 single-input-inner style-border">
              <label htmlFor="rate" className="text-dark developerlabel">Rate ($/Month)</label>
              <input type="number" value={data.rate} id="rate" onChange={(e)=> setData({...data,rate : e.target.value})} name="rate" className="mb-4 form-control" placeholder="Rate ($/Month)"/>
            </div>
            <div className="col-lg-4 col-sm-6 single-input-inner style-border">
              <label htmlFor="experience" className="text-dark developerlabel">Years Of Experience</label>
              <input type="number" value={data.experience} id="experience" onChange={(e)=> setData({...data,experience : e.target.value})} name="experience" className="mb-4 form-control" placeholder="Years Of Experience"/>
            </div>
            <div className="col-lg-12">
              <label className="text-dark">Availability</label>
              <div className="d-flex flex-wrap justify-content-between mb-4">
                <div className="d-flex align-items-center"><input type="radio" checked={data.availability === 'Immediately'} value={'Immediately'} id="Immediately" onChange={(e)=> setData({...data,availability : e.target.value})} name="availability" className="me-2 radio" /> <span>Immediately</span></div>
                <div className="d-flex align-items-center"><input type="radio" checked={data.availability === 'Less Than 2 Weeks'} value={'Less Than 2 Weeks'} id="Weeks" onChange={(e)=> setData({...data,availability : e.target.value})} name="availability" className="me-2 radio" /> <span>Less Than 2 Weeks</span></div>
                <div className="d-flex align-items-center"><input type="radio" checked={data.availability === 'More Than 2 Weeks'} value={'More Than 2 Weeks'} id="Weeks" onChange={(e)=> setData({...data,availability : e.target.value})} name="availability" className="me-2 radio" /> <span>More Than 2 Weeks</span></div>
                <div className="d-flex align-items-center"><input type="radio" checked={data.availability === 'Max 4 Weeks'} value={'Max 4 Weeks'} id="Weeks" onChange={(e)=> setData({...data,availability : e.target.value})} name="availability" className="me-2 radio" /> <span>Max 4 Weeks</span></div>
              </div>
            </div>
          <div className="text-center">
            <button type="submit" className="btn btn-base page-scroll px-sm-5 wow animated fadeInUp" data-wow-delay='0.3s' style={{borderRadius: '5px'}} href="#demo">Submit</button>
          </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Developer;