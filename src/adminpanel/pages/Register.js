import React from 'react'
import axios from "axios";
import { useState } from "react";
import {BACKEND_COMMAN_URL} from "../../Api";
import { useNavigate } from 'react-router-dom';

const Register = () => {

  const [err,seterr] = useState('');
  const [suc,setsuc] = useState('');
  const navigate = useNavigate();
  const [data,setData] = useState({});

  const fetchData = async (e)=>{
    try {
      let fdata = await axios.post(BACKEND_COMMAN_URL+'/api/register', data);
      if(fdata.status === 200){
        navigate('/login');
      }
      else{
        e.preventDefault();
      }
    } catch (error) {
      console.log(error);
    }
  }

  const formEvent = (e)=>{
    setData((v)=>{
      return {
        ...v,
        [e.target.name]: e.target.value
      }
    })
  }

  const formSubmit = (e)=>{
    if(!data.username || data.username === ''){
      e.preventDefault(); 
      seterr("Username Required.");
      setsuc('');
      document.getElementById('username').focus();
      return false;
    }
    else if(!data.email || data.email === ''){
      e.preventDefault(); 
      seterr("Email Required.");
      setsuc('');
      document.getElementById('email').focus();
      return false;
    }
    else if(!data.password || data.password === ''){
      e.preventDefault(); 
      seterr("Password Required.");
      setsuc('');
      document.getElementById('password').focus();
      return false;
    }
    else if(data.password !== data.cpassword){
      e.preventDefault(); 
      seterr("Password Not Match.");
      setsuc('');
      document.getElementById('password').focus();
      return false;
    }
    else{
      e.preventDefault();
      fetchData();
    }
  }
  

  return (
    <>

  <div className="row align-items-center justify-content-center w-100 m-0 overflow-hidden vh-100">
    <div className="col-8">
      <div className="row align-items-center justify-content-center m-0">
        <div className="col-lg-6">
          <img src="/img/login.jpg" alt="img" width="100%" style={{objectFit: 'cover'}} height="700px" />
        </div>
        <div className="col-lg-6">
          <form onSubmit={formSubmit} method="post" className="d-flex justify-content-center align-items-center flex-column vh-100">
            <h2 className="mb-0 text-center">Register</h2><br />
            {err ? <p className='error'>{err}</p> : ''}
            {suc ? <p className='success'>{suc}</p> : ''}
              <div className="col-8">
                <lable>Enter Username :-</lable>
                <input type="text" name="username" id='username' onChange={formEvent} placeholder="Username" className="form-control"  />
              </div><br />
              <div className="col-8">
                <label>Enter Email :-</label>
                <input className="form-control" type="email" name="email" id='email' onChange={formEvent} placeholder="Email" />
              </div><br />
              <div className="col-8">
                <label>Enter Password :-</label>
                <input className="form-control" type="password" name="password" id='password' onChange={formEvent} placeholder="Password" />
              </div><br />
              <div className="col-8">
                <label>Enter Confirm Password :-</label>
                <input className="form-control" type="password" name="cpassword" id='cpassword' onChange={formEvent} placeholder="Confirm Password" />
              </div><br />
            <input type="submit" name="submit" value="Register" className="btn text-white btn-primary mb-3" />
            
              <a href="/" className="text-center">Login</a>
            </form>
        </div>
      </div>
    </div>
  </div>
</>
  )
}

export default Register