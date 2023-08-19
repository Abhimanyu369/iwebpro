import React, { useEffect } from 'react';
import Header from '../../adminpanel/component/Header';
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {BACKEND_COMMAN_URL} from "../../Api";

const Update_event = () => {

  const url = new URLSearchParams(window.location.search);
  const id = url.get('id');
  const navigate = useNavigate();
  const [err,seterr] = useState('');
  const [suc,setsuc] = useState('');
  const [data,setData] = useState({
    title : '',
    desc : '',
    date : '',
    time : '',
    img : ''
  });
  
  const fetchData = async (e)=>{
    const formData = new FormData();
    formData.append('img', data.img);
    formData.append('title', data.title);
    formData.append('time', data.time);
    formData.append('date', data.date);
    formData.append('desc', data.desc);
    let Fdata = await axios.put(BACKEND_COMMAN_URL+'/api/editEvent/'+id,formData);
    if(Fdata.status === 200){
      navigate('/View_event');
    }
    else{
      e.preventDefault(); 
    }
  }

  const fetchData2 = async ()=>{
    const data = await axios.get(`${BACKEND_COMMAN_URL}/api/singleEvent/${id}`);
    if(data.status === 200){
      let fdata = data.data.data;
      setData({
        title : fdata.title,
        date : fdata.date,
        time : fdata.time,
        desc : fdata.desc,
        img : fdata.img
      });
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
      fetchData();
      seterr('');
      setsuc("Form Submitted.");
      e.preventDefault(); 
    }
  }

  useEffect(()=>{
    fetchData2();
    let img = document.getElementById('img');
    let con = document.getElementById('con');
    let nImg = document.getElementById('nImg');
    img.addEventListener('click', ()=>{
      nImg.classList.add('d-block');
      img.classList.add('d-none');
    });
    img.addEventListener('mouseover', ()=>{
      con.classList.add('d-inline-block');
    });
    img.addEventListener('mouseout', ()=>{
      con.classList.remove('d-inline-block');
    });
  },[]);

  const formImg = (e)=>{
    setData({...data, img: e.target.files[0]});
  }

  return (
    <><Header />
      <div className="ml-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
        <div className="container">
    <form onSubmit={formSubmit} method="post" encType="multipart/form-data" className="flex flex-wrap">
     <div className="w-full">
      <h2 className="mb-4" style={{letterSpacing: '3px', fontWeight: 600}}>Edit Event </h2>
      {err ? <p className='error'>{err}</p> : ''}
      {suc ? <p className='success'>{suc}</p> : ''}
     </div>
      <div className="w-full">
        <div className="option">
          <img src={data.img} alt="img" className="Eimg mb-4" id="img" />
          <span id="con" className="px-3 py-2 text-dark">Click Image and Upload New Image.</span>
        </div>
      </div>
        <div className="w-3/6 mb-4 px-3">
          <label>Enter Title:-</label>
          <input className="w-full rounded-lg border-[1.5px] border-stroke p-2 px-3 text-dark" type="text" name="title" id='title' value={data.title} onChange={(e)=> setData({...data,title : e.target.value})} placeholder="Title" />
        </div><br />
        <div className="w-3/6 mb-4 px-3">
          <label>Enter Time:-</label>
          <input className="w-full rounded-lg border-[1.5px] border-stroke p-2 px-3 text-dark" type="time" name="time" id='time' value={data.time} onChange={(e)=> setData({...data,time : e.target.value})} placeholder="Time" />
        </div><br />
        <div className="w-3/6 mb-4 px-3">
          <label>Select Date:-</label>
          <input className="w-full rounded-lg border-[1.5px] border-stroke p-2 px-3 text-dark" type="date" name="date" id='date' value={data.date} onChange={(e)=> setData({...data,date : e.target.value})} placeholder="Date" />
        </div><br />
        <div className="w-3/6 mb-4 px-3" id="nImg">
          <label>Choose Image :-</label>
          <input className="w-full rounded-lg border-[1.5px] border-stroke p-2 px-3 text-dark" type="file" name="img" id='img' accept="image/*" onChange={formImg} style={{padding: '13px'}}  />
        </div><br />
        <div className="w-full mb-4 px-3">
          <label>Enter Description :-</label>
          <textarea name="desc" id="desc" className="w-full rounded-lg border-[1.5px] border-stroke p-2 px-3 text-dark" rows="5" placeholder="Description" value={data.desc} onChange={(e)=> setData({...data,desc : e.target.value})}></textarea>
        </div><br />
        <input type="submit" value="Edit" className="w-full cursor-pointer rounded-lg border border-primary bg-primary py-2 font-medium text-white transition hover:bg-opacity-90" />
    </form>
  </div>
  </div>
    {/* <Footer /> */}
    </>
  )
}

export default Update_event