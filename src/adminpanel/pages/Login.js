import React, { useEffect } from 'react';
import axios from "axios";
import { useState } from "react";
import {BACKEND_COMMAN_URL} from "../../Api";
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const Logdata = JSON.parse(localStorage.getItem('admin'));
  const [err,seterr] = useState('');
  const [suc,setsuc] = useState('');
  const navigate = useNavigate();
  const [data,setData] = useState([]);

  const fetchData = async (e)=>{
    try {
      let fdata = await axios.post(BACKEND_COMMAN_URL+'/api/login', data);
      if(fdata.status === 200){
        localStorage.setItem('admin',JSON.stringify(fdata.data.token));
        navigate('/admin');
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
    if(!data.email || data.email === ''){
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
    e.preventDefault();
    fetchData();
  }
  
  useEffect(()=>{ 
    if(Logdata === '' || !Logdata){
        navigate("/login");
    }
    else{
        navigate("/admin");
    }
  },[]);
  
  return (
    <>
        <div className="row align-items-center justify-content-center w-100 m-0 overflow-hidden vh-100">
    <div className="col-8">
      <div className="row align-items-center justify-content-center m-0">
        <div className="col-lg-6">
          <form action="/login" method="post" onSubmit={formSubmit} className="d-flex align-items-center justify-content-center flex-column vh-100">
            <h1 className="mb-4">Admin Login</h1>
            <p  className="col-7 text-secondary text-center">If you have admin, then you must login.</p>
            {err ? <p className='error'>{err}</p> : ''}
            {suc ? <p className='success'>{suc}</p> : ''}
            <div className="col-8">
              <label>Enter Email :-</label>
              <input className="form-control" type="email" name="email" placeholder="Email" onChange={formEvent}/>
            </div><br />
            <div className="col-8">
              <label>Enter Password :-</label>
              <input className="form-control" type="password" name="password" placeholder="Password" onChange={formEvent}/>
            </div><br />
            <input type="submit" name="submit" value="Login" className="btn text-white btn-primary mb-3" />
            <a href="/register">Register</a>
          </form>
        </div>
        <div className="col-lg-6">
          <img src={BACKEND_COMMAN_URL+"/img/login.jpg"} alt="img" width="100%" style={{objectFit: 'cover'}} height="700px" />
        </div>
      </div>
    </div>
  </div></>
  )
}

export default Login;