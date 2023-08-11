import React from 'react';
import Header from '../../adminpanel/component/Header';
import Footer from '../../adminpanel/component/Footer';
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {BACKEND_COMMAN_URL} from "../../Api";

const Add_client = () => {

  const navigate = useNavigate();
  const [err,seterr] = useState('');
  const [suc,setsuc] = useState('');
  const [data,setData] = useState({
    company_name : '',
    img : ''
  });

  const fetchData = async (data)=>{
    const formData = new FormData();
    formData.append('img', data.img);
    formData.append('company_name', data.company_name);
    let fdata = await axios.post(BACKEND_COMMAN_URL+'/api/addClient',formData);
    if(fdata.status === 200){
      navigate('/View_client');
    }
    else{
      navigate('/Add_client');
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
        company_name : '',
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
            <h2 className="mb-4" style={{ letterSpacing: '3px', fontWeight: 600 }}>Add Client</h2>
            {err ? <p className='error'>{err}</p> : ''}
            {suc ? <p className='success'>{suc}</p> : ''}
          </div>
          <div className="col-12 mb-4 px-3">
            <label>Enter Company Name:-</label>
            <input className="form-control" type="text" name="company_name" id='company_name' onChange={(e)=> setData({...data,company_name : e.target.value})} placeholder="Company Name" />
          </div><br />
          <div className="col-12 mb-4 px-3">
            <label>Choose Company Image :-</label>
            <input className="form-control" type="file" accept="image/*" onChange={formImg} id='img' name="img" style={{ padding: '13px' }} />
          </div><br />
          <input type="submit" name="submit" value="Submit" className="text-white btn-primary col-12 py-2" />
        </form>
      </div>
      <Footer /></>
  )
}

export default Add_client;