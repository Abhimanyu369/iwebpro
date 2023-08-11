import React, { useEffect } from 'react';
import Header from '../../adminpanel/component/Header';
import Footer from '../../adminpanel/component/Footer';
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {BACKEND_COMMAN_URL} from "../../Api";

const Update_blog = () => {

  const url = new URLSearchParams(window.location.search);
  const id = url.get('id');
  const navigate = useNavigate();
  const [err,seterr] = useState('');
  const [suc,setsuc] = useState('');
  const [data,setData] = useState({
    title : '',
    desc : '',
    date : '',
    cat : '',
    name : '',
    img : ''
  });
  
  const fetchData = async (e)=>{
    const formData = new FormData();
    formData.append('img', data.img);
    formData.append('title', data.title);
    formData.append('date', data.date);
    formData.append('cat', data.cat);
    formData.append('name', data.name);
    formData.append('desc', data.desc);
    let Fdata = await axios.put(BACKEND_COMMAN_URL+'/api/editBlog/'+id,formData);
    if(Fdata.status === 200){
      navigate('/View_blog');
    }
    else{
      e.preventDefault(); 
    }
  }

  const fetchData2 = async ()=>{
    const data = await axios.get(`${BACKEND_COMMAN_URL}/api/singleBlog/${id}`);
    if(data.status === 200){
      let fdata = data.data.data;
      setData({
        title : fdata.title,
        date : fdata.date,
        cat : fdata.cat,
        name : fdata.name,
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
      <h2 className="mb-4" style={{letterSpacing: '3px', fontWeight: 600}}>Edit Blog </h2>
      {err ? <p className='error'>{err}</p> : ''}
      {suc ? <p className='success'>{suc}</p> : ''}
     </div>
      <div className="col-12">
        <div className="option" >
          <img src={data.img} alt="img" height="100px" style={{borderRadius: '50%', objectFit: 'cover'}} width="100px" className="img mb-4" id="img" />
          <span id="con" className="px-3 py-2 text-dark">Click Image and Upload New Image.</span>
        </div>
      </div>
        <div className="col-6 mb-4 px-3">
          <label>Enter Title:-</label>
          <input className="form-control" type="text" name="title" id='title' value={data.title} onChange={(e)=> setData({...data,title : e.target.value})} placeholder="Title" />
        </div><br />
        <div className="col-6 mb-4 px-3">
          <label>Enter Name:-</label>
          <input className="form-control" type="text" name="name" id='name' value={data.name} onChange={(e)=> setData({...data,name : e.target.value})} placeholder="Name" />
        </div><br />
        <div className="col-6 mb-4 px-3">
          <label>Enter Category:-</label>
          <input className="form-control" type="text" name="cat" id='cat' value={data.cat} onChange={(e)=> setData({...data,cat : e.target.value})} placeholder="Category" />
        </div><br />
        <div className="col-6 mb-4 px-3">
          <label>Select Date:-</label>
          <input className="form-control" type="date" name="date" id='date' value={data.date} onChange={(e)=> setData({...data,date : e.target.value})} placeholder="Date" />
        </div><br />
        <div className="col-12 mb-4 px-3">
          <label>Enter Description :-</label>
          <textarea name="desc" id="desc" className="form-control" rows="5" value={data.desc} onChange={(e)=> setData({...data,desc : e.target.value})} placeholder="Description"></textarea>
        </div><br />
        <div className="col-12 mb-4 px-3" id="nImg">
          <label>Choose Image :-</label>
          <input className="form-control" type="file" name="img" id='img' accept="image/*" onChange={formImg} style={{padding: '13px'}}  />
        </div><br />
      <input type="submit" name="submit" value="Edit" className=" text-white btn-primary col-12 py-2"/>
    </form>
  </div>
    <Footer /></>
  )
}

export default Update_blog