
import React, { useEffect } from 'react';
import Header from '../../adminpanel/component/Header';
import Footer from '../../adminpanel/component/Footer';
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {BACKEND_COMMAN_URL} from "../../Api";

const Update_testimonial = () => {

  const url = new URLSearchParams(window.location.search);
  const id = url.get('id');
  const navigate = useNavigate();
  const [err,seterr] = useState('');
  const [suc,setsuc] = useState('');
  const [data,setData] = useState({
    name : '',
    desc : '',
    rating : '',
    img : ''
  });
  
  const fetchData = async ()=>{
    const formData = new FormData();
    formData.append('img', data.img);
    formData.append('name', data.name);
    formData.append('desc', data.desc);
    formData.append('rating', data.rating);
    let Fdata = await axios.put(BACKEND_COMMAN_URL+'/api/editTestimonial/'+id,formData);
    if(Fdata.status === 200){
      navigate('/View_testimonial');
    }
    else{
      navigate('/Add_testimonial');
    }
  }

  const fetchData2 = async ()=>{
    const data = await axios.get(`${BACKEND_COMMAN_URL}/api/singleTestimonial/${id}`);
    if(data.status === 200){
      let fdata = data.data.data;
      setData({
        name : fdata.name,
        desc : fdata.desc,
        rating : fdata.rating,
        img : fdata.img
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
    else if(!data.rating || data.rating === ''){
      e.preventDefault(); 
      seterr("Rating Required.");
      setsuc('');
      document.getElementById('rating').focus();
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
        <div className="container">
    <form onSubmit={formSubmit} method="post" encType="multipart/form-data" className="col-8 position-absolute d-flex flex-wrap" style={{marginTop: '130px', marginLeft: '180px', top: 0}}>
     <div className="col-12">
      <h2 className="mb-4" style={{letterSpacing: '3px', fontWeight: 600}}>Edit Testimonial </h2>
      {err ? <p className='error'>{err}</p> : ''}
      {suc ? <p className='success'>{suc}</p> : ''}
     </div>
      <div className="col-12">
        <div className="option">
          <img src={data.img || ''} alt="img" height="100px" style={{borderRadius: '50%', objectFit: 'cover'}} width="100px" className="img mb-4" id="img" />
          <span id="con" className="px-3 py-2 text-dark">Click Image and Upload New Image.</span>
        </div>
      </div>
      <div className="col-6 px-3 mb-4">
        <label>Enter Name:-</label>
        <input className="form-control" type="text" name="name" value={data.name} onChange={(e)=> setData({...data,name : e.target.value})} placeholder="Name" required />
      </div><br />
      <div className="col-6 px-3 mb-4">
        <label>Enter Ratings No:-</label>
        <input className="form-control" type="number" name="rating" value={data.rating} onChange={(e)=> setData({...data,rating : e.target.value})} placeholder="Ratings" required min="1" max="5" />
      </div><br />
      <div className="col-12 px-3 mb-4">
        <label>Enter Description :-</label>
        <textarea name="desc" id="desc" className="form-control" onChange={(e)=> setData({...data,desc : e.target.value})} rows="5" placeholder="Description" required value={data.desc}></textarea>
      </div><br />
      <div className="col-12 px-3 mb-4" id="nImg">
        <label>Choose Image :-</label>
        <input className="form-control" type="file" name="img" id='img' accept="image/*" onChange={formImg} style={{padding: '13px'}} />
      </div><br />
      <input type="submit" name="submit" value="Edit" className=" text-white btn-primary col-12 py-2"/>
    </form>
  </div>
    <Footer /></>
  )
}

export default Update_testimonial

