import React from 'react';
import Header from '../../adminpanel/component/Header';
import Footer from '../../adminpanel/component/Footer';
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {BACKEND_COMMAN_URL} from "../../Api";

const Add_blog = () => {

  const navigate = useNavigate();
  const [err,seterr] = useState('');
  const [suc,setsuc] = useState('');
  const [data,setData] = useState({
    title : '',
    name : '',
    desc : '',
    cat : '',
    date : '',
    img : ''
  });

  const fetchData = async (data)=>{
    const formData = new FormData();
    formData.append('img', data.img);
    formData.append('name', data.name);
    formData.append('desc', data.desc);
    formData.append('title', data.title);
    formData.append('date', data.date);
    formData.append('cat', data.cat);
    let fdata = await axios.post(BACKEND_COMMAN_URL+'/api/addBlog',formData);
    if(fdata.status === 200){
      navigate('/View_blog');
    }
    else{
      navigate('/Add_blog');
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
    else if(!data.name || data.name === ''){
      e.preventDefault(); 
      seterr("Name Required.");
      setsuc('');
      document.getElementById('name').focus();
      return false;
    }
    else if(!data.cat || data.cat === ''){
      e.preventDefault(); 
      seterr("Category Required.");
      setsuc('');
      document.getElementById('cat').focus();
      return false;
    }
    else if(!data.date || data.date === ''){
      e.preventDefault(); 
      seterr("Date Required.");
      setsuc('');
      document.getElementById('date').focus();
      return false;
    }
    else if(!data.desc || data.desc === ''){
      e.preventDefault(); 
      seterr("Description Required.");
      setsuc('');
      document.getElementById('desc').focus();
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
        title : '',
        name : '',
        desc : '',
        cat : '',
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
    <div className="ml-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
      <div className="container">
        <form onSubmit={formSubmit} method="post" encType="multipart/form-data" className='flex flex-wrap'>
          <div className="w-full">
            <h2 className="mb-4" style={{ letterSpacing: '3px', fontWeight: 600 }}>Add Blog </h2>
            {err ? <p className='error'>{err}</p> : ''}
            {suc ? <p className='success'>{suc}</p> : ''}
          </div>
          <div className="w-3/6 mb-4 px-3">
            <label>Enter Title:-</label>
            <input className="w-full rounded-lg border-[1.5px] border-stroke p-2 px-3 text-dark" type="text" name="title" id='title' onChange={(e)=> setData({...data,title : e.target.value})} placeholder="Title" />
          </div><br />
          <div className="w-3/6 mb-4 px-3">
            <label>Enter Name:-</label>
            <input className="w-full rounded-lg border-[1.5px] border-stroke p-2 px-3 text-dark" type="text" name="name" id='name' onChange={(e)=> setData({...data,name : e.target.value})} placeholder="Name" />
          </div><br />
          <div className="w-3/6 mb-4 px-3">
            <label>Enter Category:-</label>
            <input className="w-full rounded-lg border-[1.5px] border-stroke p-2 px-3 text-dark" type="text" name="cat" id='cat' onChange={(e)=> setData({...data,cat : e.target.value})} placeholder="Category" />
          </div><br />
          <div className="w-3/6 mb-4 px-3">
            <label>Select Date:-</label>
            <input className="w-full rounded-lg border-[1.5px] border-stroke p-2 px-3 text-dark" type="date" name="date" id='date' onChange={(e)=> setData({...data,date : e.target.value})} placeholder="Date" />
          </div><br />
          <div className="w-full mb-4 px-3">
            <label>Enter Description :-</label>
            <textarea name="desc" id="desc" className="w-full rounded-lg border-[1.5px] border-stroke p-2 px-3 text-dark" rows="5" onChange={(e)=> setData({...data,desc : e.target.value})} placeholder="Description"></textarea>
          </div><br />
          <div className="w-full mb-4 px-3">
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

export default Add_blog;