
import React, { useEffect } from 'react';
import Header from '../../adminpanel/component/Header';
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {BACKEND_COMMAN_URL} from "../../Api";

const Update_benefit = () => {

  const url = new URLSearchParams(window.location.search);
  const id = url.get('id');
  const navigate = useNavigate();
  const [err,seterr] = useState('');
  const [suc,setsuc] = useState('');
  const [data,setData] = useState({
    title : '',
    desc : '',
    img : ''
  });
  
  const fetchData = async (e)=>{
    const formData = new FormData();
    formData.append('img', data.img);
    formData.append('title', data.title);
    formData.append('desc', data.desc);
    let Fdata = await axios.put(BACKEND_COMMAN_URL+'/api/editBenefit/'+id,formData);
    if(Fdata.status === 200){
      navigate('/View_benefit');
    }
    else{
      e.preventDefault(); 
    }
  }

  const fetchData2 = async ()=>{
    const data = await axios.get(`${BACKEND_COMMAN_URL}/api/singleBenefit/${id}`);
    if(data.status === 200){
      let fdata = data.data.data;
      setData({
        desc : fdata.desc,
        title : fdata.title,
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
      <input type="hidden" name="Id" value="<%= data.id %>" />
      <h2 className="mb-4" style={{letterSpacing: '3px', fontWeight: 600}}>Edit Benefit </h2>
      {err ? <p className='error'>{err}</p> : ''}
      {suc ? <p className='success'>{suc}</p> : ''}
     </div>
      <div className="w-full">
        <div className="option mb-4">
          <img src={data.img} alt="img" className="Eimg" id="img" />
          <span id="con" className="px-3 py-2 text-dark">Click Image and Upload New Image.</span>
        </div>
      </div>
      <div className="w-3/6 mb-4 px-3">
        <label>Enter Title:-</label>
        <input className="w-full rounded-lg border-[1.5px] border-stroke p-2 px-3 text-dark" type="text" name="title" value={data.title} placeholder="Title" onChange={(e)=> setData({...data,title : e.target.value})} required />
      </div><br />
      <div className="w-3/6 mb-4 px-3" id="nImg">
        <label>Choose Image :-</label>
        <input className="w-full rounded-lg border-[1.5px] border-stroke p-2 px-3 text-dark" type="file" onChange={formImg} accept="image/*" name="img" style={{padding: '13px'}} />
      </div><br />
      <div className="w-full mb-4 px-3">
        <label>Enter Description :-</label>
        <textarea name="desc" id="desc" className="w-full rounded-lg border-[1.5px] border-stroke p-2 px-3 text-dark" rows="5" placeholder="Description" onChange={(e)=> setData({...data,desc : e.target.value})} required value={data.desc}></textarea>
      </div><br />
      <input type="submit" value="Edit" className="w-full cursor-pointer rounded-lg border border-primary bg-primary py-2 font-medium text-white transition hover:bg-opacity-90" />
    </form>
  </div>
  </div>
    {/* <Footer /> */}
    </>
  )
}

export default Update_benefit;