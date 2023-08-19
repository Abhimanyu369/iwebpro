
import React, { useEffect } from 'react';
import Header from '../../adminpanel/component/Header';
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {BACKEND_COMMAN_URL} from "../../Api";

const Update_review = () => {

  const url = new URLSearchParams(window.location.search);
  const id = url.get('id');
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
  
  const fetchData = async (e)=>{
    const formData = new FormData();
    formData.append('img', data.img);
    formData.append('name', data.name);
    formData.append('desc', data.desc);
    formData.append('designation', data.designation);
    formData.append('link', data.link);
    let Fdata = await axios.put(BACKEND_COMMAN_URL+'/api/editReview/'+id,formData);
    if(Fdata.status === 200){
      navigate('/View_review');
    }
    else{
      e.preventDefault(); 
    }
  }

  const fetchData2 = async ()=>{
    const data = await axios.get(`${BACKEND_COMMAN_URL}/api/singleReview/${id}`);
    if(data.status === 200){
      let fdata = data.data.data;
      setData({
        name : fdata.name,
        desc : fdata.desc,
        designation : fdata.designation,
        img : fdata.img,
        link : fdata.link
      });
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
  // console.log(data)
  return (
    <><Header />
      <div className="ml-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
        <div className="container">
    <form onSubmit={formSubmit} method="post" encType="multipart/form-data" className="flex flex-wrap">
     <div className="w-full">
      <h2 className="mb-4" style={{letterSpacing: '3px', fontWeight: 600}}>Edit Review </h2>
      {err ? <p className='error'>{err}</p> : ''}
      {suc ? <p className='success'>{suc}</p> : ''}
     </div>
      <div className="w-full">
        <div className="option" >
          <img src={data.img} alt="img" className="Eimg mb-4" id="img" />
          <span id="con" className="px-3 py-2 text-dark">Click Image and Upload New Image.</span>
        </div>
      </div>
      <div className="w-3/6 mb-4 px-3">
        <label>Enter Name:-</label>
        <input className="w-full rounded-lg border-[1.5px] border-stroke p-2 px-3 text-dark" type="text" name="name" placeholder="Name" value={data.name} required onChange={(e)=> setData({...data,name : e.target.value})} />
      </div><br />
      <div className="w-3/6 mb-4 px-3">
        <label>Enter Designation:-</label>
        <input className="w-full rounded-lg border-[1.5px] border-stroke p-2 px-3 text-dark" type="text" name="designation" placeholder="Designation" onChange={(e)=> setData({...data,designation : e.target.value})} required  value={data.designation}/>
      </div><br />
      <div className="w-full mb-4 px-3">
        <label>Enter Description :-</label>
        <textarea name="desc" id="desc" className="w-full rounded-lg border-[1.5px] border-stroke p-2 px-3 text-dark" rows="5" placeholder="Description" value={data.desc} onChange={(e)=> setData({...data,desc : e.target.value})} required></textarea>
      </div><br />
      <div className="w-3/6 px-3 mb-4">
        <label>Enter Youtube Link :-</label>
        <input className="w-full rounded-lg border-[1.5px] border-stroke p-2 px-3 text-dark" type="text" name="link" placeholder="Youtube Link" value={data.link} onChange={(e)=> setData({...data,link : e.target.value})} />
      </div><br />
      <div className="w-3/6 mb-4 px-3" id="nImg">
        <label>Choose Image :-</label>
        <input className="w-full rounded-lg border-[1.5px] border-stroke p-2 px-3 text-dark" type="file" name="img" accept="image/*" onChange={formImg} style={{padding: '13px'}}  />
      </div><br />
      <input type="submit" value="Edit" className="w-full cursor-pointer rounded-lg border border-primary bg-primary py-2 font-medium text-white transition hover:bg-opacity-90" />
    </form>
  </div>
  </div>
    {/* <Footer /> */}
    </>
  )
}

export default Update_review;