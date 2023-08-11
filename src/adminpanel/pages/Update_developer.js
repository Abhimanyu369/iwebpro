import React, { useEffect } from 'react';
import Header from '../../adminpanel/component/Header';
import Footer from '../../adminpanel/component/Footer';
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {BACKEND_COMMAN_URL} from "../../Api";

const Update_developer = () => {

  const url = new URLSearchParams(window.location.search);
  const id = url.get('id');
  const navigate = useNavigate();
  const [err,seterr] = useState('');
  const [suc,setsuc] = useState('');
  const [data,setData] = useState({
    full_name : '',
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
    let Fdata = await axios.put(BACKEND_COMMAN_URL+'/api/editDeveloper/'+id,data);
    if(Fdata.status === 200){
      navigate('/view_developer');
    }
    else{
      navigate('/add_developer');
    }
  }

  const fetchData2 = async ()=>{
    const data = await axios.get(`${BACKEND_COMMAN_URL}/api/singleDeveloper/${id}`);
    if(data.status === 200){
      let fdata = data.data.data;
      setData({
        full_name : fdata.full_name,
        designation : fdata.designation,
        email : fdata.email,
        framework : fdata.framework,
        database : fdata.database,
        operating_system : fdata.operating_system,
        web_server : fdata.web_server,
        programming_language : fdata.programming_language,
        browser : fdata.browser,
        linkedin : fdata.linkedin,
        expertise : fdata.expertise,
        experience : fdata.experience,
        rate : fdata.rate,
        technology : fdata.technology,
        availability : fdata.availability
      });
    }
  }

  const formSubmit = (e)=>{
    let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    if(!data.full_name || data.full_name === ''){
      e.preventDefault(); 
      seterr("Full Name Required.");
      setsuc('');
      document.getElementById('full_name').focus();
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

  useEffect(()=>{
    fetchData2();
  },[]);

  return (
    <><Header />
        <div className="container">
    <form  method="post" className="col-8 position-absolute d-flex flex-wrap" onSubmit={formSubmit} style={{marginTop: '130px', marginLeft: '180px', top: 0}}>
     <div className="col-12">
      <h2 className="mb-4" style={{letterSpacing: '3px', fontWeight: 600}}>Edit Developer </h2>
      {err ? <p style={{color : 'red'}}>{err}</p> : ''}
      {suc ? <p style={{color : 'green'}}>{suc}</p> : ''}
     </div>
      <div className="col-4 px-3 mb-4">
        <label>Enter Full Name:-</label>
        <input className="form-control" type="text" name="full_name" value={data.full_name} onChange={(e)=> setData({...data,full_name : e.target.value})} placeholder="Full Name" />
      </div><br />
      <div className="col-4 px-3 mb-4">
        <label>Designation:-</label>
        <input type="text" name="designation" className="form-control" value={data.designation} onChange={(e)=> setData({...data,designation : e.target.value})}  placeholder="Designation"/>
      </div><br />
      <div className="col-4 px-3 mb-4">
        <label>Expertise:-</label>
        <input type="text" name="expertise" className="form-control" value={data.expertise} onChange={(e)=> setData({...data,expertise : e.target.value})} placeholder="Expertise"/>
      </div><br />
      <div className="col-4 px-3 mb-4">
        <label>Enter Email :-</label>
        <input className="form-control" type="email" name="email" value={data.email} onChange={(e)=> setData({...data,email : e.target.value})} placeholder="Email" />
      </div><br />
      <div className="col-4 px-3 mb-4">
        <label>Enter Rate :-</label>
        <input className="form-control" type="number" min={1} name="rate" value={data.rate} onChange={(e)=> setData({...data,rate : e.target.value})} placeholder="Rate" />
      </div><br />
      <div className="col-4 px-3 mb-4">
        <label>Technology:-</label>
        <input type="text" name="technology" className="form-control" value={data.technology} onChange={(e)=> setData({...data,technology : e.target.value})} placeholder="Technology"/>
      </div><br />
      <div className="col-4 px-3 mb-4">
        <label>Framework:-</label>
        <input type="text" name="framework" className="form-control" value={data.framework} onChange={(e)=> setData({...data,framework : e.target.value})} placeholder="Framework"/>
      </div><br />
      <div className="col-4 px-3 mb-4">
        <label>Programming Language:-</label>
        <input type="text" name="programming_language" className="form-control" value={data.programming_language} onChange={(e)=> setData({...data,programming_language : e.target.value})} placeholder="Programming Language"/>
      </div><br />
      <div className="col-4 px-3 mb-4">
        <label>Browser:-</label>
        <input type="text" name="browser" className="form-control" value={data.browser} onChange={(e)=> setData({...data,browser : e.target.value})} placeholder="Browser"/>
      </div><br />
      <div className="col-4 px-3 mb-4">
        <label>Database:-</label>
        <input type="text" name="database" className="form-control" value={data.database} onChange={(e)=> setData({...data,database : e.target.value})} placeholder="Database" />
      </div><br />
      <div className="col-4 px-3 mb-4">
        <label>Web Server:-</label>
        <input type="text" name="web_server" className="form-control" value={data.web_server} onChange={(e)=> setData({...data,web_server : e.target.value})} placeholder="Web Server" />
      </div><br />
      <div className="col-4 px-3 mb-4">
        <label>Operating System:-</label>
        <input type="text" name="operating_system" className="form-control" value={data.operating_system} onChange={(e)=> setData({...data,operating_system : e.target.value})} placeholder="Operating System" />
      </div><br />
      <div className="col-6 px-3 mb-4">
        <label>Enter Experience :-</label>
        <input className="form-control" type="number" name="experience" value={data.experience} onChange={(e)=> setData({...data,experience : e.target.value})} placeholder="Experience" />
      </div><br />
      <div className="col-6 px-3 mb-4" id="tec">
        <label>Enter Linkedin URL :-</label>
        <input className="form-control mb-3" type="text" name="linkedin"  value={data.linkedin} onChange={(e)=> setData({...data,linkedin : e.target.value})} placeholder="Linkedin URL" />
      </div>
      <div className="col-12 px-3" id="tec">
        <label>Choose Availability :-</label>
       <div className="d-flex flex-wrap justify-content-between mb-3">
        <div style={{fontSize: '16px'}}><input className="me-2" type="radio" checked={data.availability === 'Immediately'} name="availability" onChange={(e)=> setData({...data,availability : e.target.value})} value="Immediately" />Immediately</div>
        <div style={{fontSize: '16px'}}><input className="me-2" type="radio" checked={data.availability === 'Less Than 2 Weeks'} name="availability" onChange={(e)=> setData({...data,availability : e.target.value})} value="Less Than 2 Weeks" />Less Than 2 Weeks</div>
        <div style={{fontSize: '16px'}}><input className="me-2" type="radio" checked={data.availability === 'More Than 2 Weeks'} name="availability" onChange={(e)=> setData({...data,availability : e.target.value})} value="More Than 2 Weeks" />More Than 2 Weeks</div>
        <div style={{fontSize: '16px'}}><input className="me-2" type="radio" checked={data.availability === 'Max 4 Weeks'} name="availability" onChange={(e)=> setData({...data,availability : e.target.value})} value="Max 4 Weeks" />Max 4 Weeks</div>
       </div>
      </div>
      <input type="submit" name="submit" value="Edit" className=" text-white btn-primary col-12 py-2" />
    </form>
  </div>
    <Footer /></>
  )
}

export default Update_developer;