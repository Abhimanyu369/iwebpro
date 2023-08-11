import React from 'react';
import Header from '../../adminpanel/component/Header';
import Footer from '../../adminpanel/component/Footer';
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {BACKEND_COMMAN_URL} from "../../Api";

const Add_event = () => {

  const navigate = useNavigate();
  const [err,seterr] = useState('');
  const [suc,setsuc] = useState('');
  const [data,setData] = useState({
    title : '',
    desc : '',
    time : '',
    date : '',
    img : ''
  });

  const fetchData = async (data)=>{
    const formData = new FormData();
    formData.append('img', data.img);
    formData.append('title', data.title);
    formData.append('desc', data.desc);
    formData.append('time', data.time);
    formData.append('date', data.date);
    let fdata = await axios.post(BACKEND_COMMAN_URL+'/api/addEvent',formData);
    if(fdata.status === 200){
      navigate('/View_event');
    }
    else{
      navigate('/Add_event');
    }
  }

  const formSubmit = (e)=>{
    if(!data.title || data.title === ''){
      e.preventDefault(); 
      seterr("Title Required.");
      setsuc('');
      document.getElementById('title').focus();
      return false;
    }
    else if(!data.time || data.time === ''){
      e.preventDefault(); 
      seterr("Time Required.");
      setsuc('');
      document.getElementById('time').focus();
      return false;
    }
    else if(!data.desc || data.desc === ''){
      e.preventDefault(); 
      seterr("Description Required.");
      setsuc('');
      document.getElementById('desc').focus();
      return false;
    }
    else if(!data.date || data.date === ''){
      e.preventDefault(); 
      seterr("Date Required.");
      setsuc('');
      document.getElementById('date').focus();
      return false;
    }
    else if(!data.img || data.img === ''){
      e.preventDefault(); 
      seterr("Image Required.");
      setsuc('');
      document.getElementById('img').focus();
      return false;
    }
    else if(!data.desc || data.desc === ''){
      e.preventDefault(); 
      seterr("Description Required.");
      setsuc('');
      document.getElementById('desc').focus();
      return false;
    }
    else{
      fetchData(data);
      seterr('');
      setsuc("Form Submitted.");
      setData({
        title : '',
        desc : '',
        time : '',
        date : '',
        img : ''
      })
      e.preventDefault(); 
    }
  }

  const formImg = (e)=>{
    setData({...data, img: e.target.files[0]});
  }

  return (
    <><Header />
      <div className="container">
        <form onSubmit={formSubmit} method="post" encType="multipart/form-data" className="col-8 position-absolute d-flex flex-wrap" style={{ marginTop: '130px', marginLeft: '120px', top: 0 }}>
          <div className="col-12">
            <h2 className="mb-4" style={{ letterSpacing: '3px', fontWeight: 600 }}>Add Event</h2>
            {err ? <p className='error'>{err}</p> : ''}
            {suc ? <p className='success'>{suc}</p> : ''}
          </div>
          <div className="col-6 mb-4 px-3">
            <label>Enter Title:-</label>
            <input className="form-control" type="text" name="title" id='title' onChange={(e)=> setData({...data,title : e.target.value})} placeholder="Title" />
          </div><br />
          <div className="col-6 mb-4 px-3">
            <label>Select Time:-</label>
            <input className="form-control" type="time" name="time" id='time' onChange={(e)=> setData({...data,time : e.target.value})} placeholder="Time" />
          </div><br />
          <div className="col-6 mb-4 px-3">
            <label>Select Date:-</label>
            <input className="form-control" type="date" name="date" id='date' onChange={(e)=> setData({...data,date : e.target.value})} placeholder="Date" />
          </div><br />
          <div className="col-6 mb-4 px-3">
            <label>Choose Image :-</label>
            <input className="form-control" type="file" name="img" id='img' accept="image/*" onChange={formImg} style={{ padding: '13px' }} />
          </div><br />
          <div className="col-12 mb-4 px-3">
            <label>Enter Description :-</label>
            <textarea name="desc" id="desc" className="form-control" rows="5" onChange={(e)=> setData({...data,desc : e.target.value})} placeholder="Description"></textarea>
          </div><br />
          <input type="submit" name="submit" value="Submit" className="text-white btn-primary col-12 py-2" />
        </form>
      </div>
      <Footer /></>
  )
}

export default Add_event;