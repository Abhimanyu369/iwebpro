import React, { useEffect } from 'react';
import Header from '../../adminpanel/component/Header';
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {BACKEND_COMMAN_URL} from "../../Api";

const Update_client = () => {

  const url = new URLSearchParams(window.location.search);
  const id = url.get('id');
  const navigate = useNavigate();
  const [err,seterr] = useState('');
  const [suc,setsuc] = useState('');
  const [data,setData] = useState({
    company_name : '',
    img : ''
  });
  
  const fetchData = async (e)=>{
    const formData = new FormData();
    formData.append('img', data.img);
    formData.append('company_name', data.company_name);
    let Fdata = await axios.put(BACKEND_COMMAN_URL+'/api/editClient/'+id,formData);
    if(Fdata.status === 200){
      navigate('/View_client');
    }
    else{
      e.preventDefault(); 
    }
  }

  const fetchData2 = async ()=>{
    const data = await axios.get(`${BACKEND_COMMAN_URL}/api/singleClient/${id}`);
    if(data.status === 200){
      let fdata = data.data.data;
      setData({
        company_name : fdata.company_name,
        img : fdata.img
      });
    }
  }

  const formSubmit = (e)=>{
    if(!data.company_name || data.company_name === ''){
      e.preventDefault(); 
      seterr("Company Name Required.");
      setsuc('');
      document.getElementById('company_name').focus();
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
      <h2 className="mb-4" style={{letterSpacing: '3px', fontWeight: 600}}>Edit Client </h2>
      {err ? <p className='error'>{err}</p> : ''}
      {suc ? <p className='success'>{suc}</p> : ''}
     </div>
     <div className="w-full">
      <div className="option" >
        <img src={data.img} alt="img" className="Eimg mb-4 shadow-lg bg-dark" id="img" />
        <span id="con" className="px-3 py-2 text-dark">Click Image and Upload New Image.</span> 
      </div>
     </div>
      <div className="w-full px-3 mb-4">
        <label>Enter Company Name:-</label>
        <input className="w-full rounded-lg border-[1.5px] border-stroke p-2 px-3 text-dark" type="text" name="company_name" id='company_name' placeholder="Company Name" onChange={(e)=> setData({...data,company_name : e.target.value})} required value={data.company_name} />
      </div><br />
      <div className="w-full px-3 mb-4" id="nImg">
        <label>Choose Company Image :-</label>
        <input className="w-full rounded-lg border-[1.5px] border-stroke p-2 px-3 text-dark" type="file" onChange={formImg} accept="image/*" id='img' name="img" style={{padding: '13px'}}  />
      </div><br />
      <input type="submit" value="Edit" className="w-full cursor-pointer rounded-lg border border-primary bg-primary py-2 font-medium text-white transition hover:bg-opacity-90" />
    </form>
    </div>
  </div>
    {/* <Footer /> */}
    </>
  )
}

export default Update_client;
