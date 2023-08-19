import React from 'react';
import Header from '../../adminpanel/component/Header';
import Footer from '../../adminpanel/component/Footer';
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {BACKEND_COMMAN_URL} from "../../Api";

const Add_review = () => {

  const navigate = useNavigate();
  const [err,seterr] = useState('');
  const [suc,setsuc] = useState('');
  const [data,setData] = useState({
    name : '',
    desc : '',
    designation : '',
    link : '',
    img : ''
  });

  const fetchData = async (data)=>{
    const formData = new FormData();
    formData.append('img', data.img);
    formData.append('name', data.name);
    formData.append('desc', data.desc);
    formData.append('designation', data.designation);
    formData.append('link', data.link);
    let fdata = await axios.post(BACKEND_COMMAN_URL+'/api/addReview',formData);
    if(fdata.status === 200){
      navigate('/View_review');
    }
    else{
      navigate('/Add_review');
    }
  }

  const formSubmit = (e)=>{
    if(!data.name || data.name === ''){
      e.preventDefault(); 
      seterr("Name Required.");
      setsuc('');
      document.getElementById('name').focus();
      return false;
    }
    else if(!data.designation || data.designation === ''){
      e.preventDefault(); 
      seterr("Designation Required.");
      setsuc('');
      document.getElementById('designation').focus();
      return false;
    }
    else if(!data.desc || data.desc === ''){
      e.preventDefault(); 
      seterr("Description Required.");
      setsuc('');
      document.getElementById('desc').focus();
      return false;
    }
    else if(!data.link || data.link === ''){
      e.preventDefault(); 
      seterr("Link Required.");
      setsuc('');
      document.getElementById('link').focus();
      return false;
    }
    else if(!data.img || data.img === ''){
      e.preventDefault(); 
      seterr("Image Required.");
      setsuc('');
      document.getElementById('img').focus();
      return false;
    }
    else{
      fetchData(data);
      seterr('');
      setsuc("Form Submitted.");
      setData({
        name : '',
        desc : '',
        designation : '',
        link : '',
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
    <div className="ml-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
      <div className="container">
        <form onSubmit={formSubmit} method="post" encType="multipart/form-data" className='flex flex-wrap'>
          <div className="w-full">
            <h2 className="mb-4" style={{ letterSpacing: '3px', fontWeight: 600 }}>Add Review </h2>
            {err ? <p className='error'>{err}</p> : ''}
            {suc ? <p className='success'>{suc}</p> : ''}
          </div>
          <div className="w-3/6 px-3 mb-4">
            <label>Enter Name:-</label>
            <input className="w-full rounded-lg border-[1.5px] border-stroke p-2 px-3 text-dark" type="text" name="name" id='name' onChange={(e)=> setData({...data,name : e.target.value})} placeholder="Name" />
          </div><br />
          <div className="w-3/6 px-3 mb-4">
            <label>Enter Designation:-</label>
            <input className="w-full rounded-lg border-[1.5px] border-stroke p-2 px-3 text-dark" type="text" name="designation" id='designation' onChange={(e)=> setData({...data,designation : e.target.value})} placeholder="Designation" />
          </div><br />
          <div className="w-full px-3 mb-4">
            <label>Enter Description :-</label>
            <textarea name="desc" id="desc" className="w-full rounded-lg border-[1.5px] border-stroke p-2 px-3 text-dark" rows="5" onChange={(e)=> setData({...data,desc : e.target.value})} placeholder="Description"></textarea>
          </div><br />
          <div className="w-3/6 px-3 mb-4">
            <label>Enter Youtube Link :-</label>
            <input className="w-full rounded-lg border-[1.5px] border-stroke p-2 px-3 text-dark" type="text" name="link" id='link' onChange={(e)=> setData({...data,link : e.target.value})} placeholder="Youtube Link" />
          </div><br />
          <div className="w-3/6 px-3 mb-4">
            <label>Choose Image :-</label>
            <input className="w-full rounded-lg border-[1.5px] border-stroke p-2 px-3 text-dark" type="file" name="img" id='img' accept="image/*" onChange={formImg} style={{ padding: '13px' }} />
          </div><br />
          <input type="submit" name="submit" value="Submit" className="w-full cursor-pointer rounded-lg border border-primary bg-primary py-2 font-medium text-white transition hover:bg-opacity-90" />
        </form>
      </div>
      </div>
      </>
  )
}

export default Add_review;