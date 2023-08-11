import React, { useEffect } from 'react';
import Header from '../../adminpanel/component/Header';
import Footer from '../../adminpanel/component/Footer';
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
      <div className="container">
    <form onSubmit={formSubmit} method="post" encType="multipart/form-data" className="col-8 position-absolute d-flex flex-wrap" style={{marginTop: '130px', marginLeft: '180px', top: 0}}>
     <div className="col-12">
      <h2 className="mb-4" style={{letterSpacing: '3px', fontWeight: 600}}>Edit Client </h2>
      {err ? <p className='error'>{err}</p> : ''}
      {suc ? <p className='success'>{suc}</p> : ''}
     </div>
     <div className="col-12">
      <div className="option" >
        <img src={data.img} alt="img" height="100px" style={{borderRadius: '50%', objectFit: 'cover'}} width="100px" className="img mb-4 shadow-lg bg-dark" id="img" />
        <span id="con" className="px-3 py-2 text-dark">Click Image and Upload New Image.</span> 
      </div>
     </div>
      <div className="col-12 px-3 mb-4">
        <label>Enter Company Name:-</label>
        <input className="form-control" type="text" name="company_name" id='company_name' placeholder="Company Name" onChange={(e)=> setData({...data,company_name : e.target.value})} required value={data.company_name} />
      </div><br />
      <div className="col-12 px-3 mb-4" id="nImg">
        <label>Choose Company Image :-</label>
        <input className="form-control" type="file" onChange={formImg} accept="image/*" id='img' name="img" style={{padding: '13px'}}  />
      </div><br />
      <input type="submit" name="submit" value="Edit" className=" text-white btn-primary col-12 py-2"/>
    </form>
  </div>
    <Footer /></>
  )
}

export default Update_client
