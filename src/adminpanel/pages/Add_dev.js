import React from 'react';
import Header from '../../adminpanel/component/Header';
import Footer from '../../adminpanel/component/Footer';
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {BACKEND_COMMAN_URL} from "../../Api";

const Add_dev = () => {

  const navigate = useNavigate();
  const [err,seterr] = useState('');
  const [suc,setsuc] = useState('');
  const [data,setData] = useState({
    title : '',
    desc : '',
    skills : '',
    features : '',
    img : ''
  });

  const fetchData = async (data)=>{
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('img', data.img);
    formData.append('skills', data.skills);
    formData.append('features', data.features);
    formData.append('desc', data.desc);
    let fdata = await axios.post(BACKEND_COMMAN_URL+'/api/addDev',formData);
    if(fdata.status === 200){
      navigate('/View_dev');
    }
    else{
      navigate('/Add_Dev');
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
    else if(!data.img || data.img === ''){
      e.preventDefault(); 
      seterr("Image Required.");
      setsuc('');
      document.getElementById('img').focus();
      return false;
    }
    else if(!data.features || data.features === ''){
      e.preventDefault(); 
      seterr("Features Required.");
      setsuc('');
      document.getElementById('features').focus();
      return false;
    }
    else if(!data.skills || data.skills === ''){
      e.preventDefault(); 
      seterr("Skill Required.");
      setsuc('');
      document.getElementById('skills').focus();
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
      fetchData(data);
      seterr('');
      setsuc("Form Submitted.");
      setData({
        title : '',
        desc : '',
        skills : '',
        features : '',
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
        <form onSubmit={formSubmit} method="post" enctype="multipart/form-data" className="col-8 position-absolute d-flex flex-wrap" style={{ marginTop: '130px', marginLeft: '120px', top: 0 }}>
          <div className="col-12">
            <h2 className="mb-4" style={{ letterSpacing: '3px', fontWeight: 600 }}>Developer Details </h2>
            {err ? <p className='error'>{err}</p> : ''}
            {suc ? <p className='success'>{suc}</p> : ''}
          </div>
          <div className="col-6 mb-4 px-3">
            <label>Enter Title:-</label>
            <input className="form-control" type="text" name="title" id='title' placeholder="Title" onChange={(e)=> setData({...data,title : e.target.value})} />
          </div><br />
          <div className="col-6 mb-4 px-3">
            <label>Choose Image :-</label>
            <input className="form-control" type="file" name="img" onChange={formImg} id='img' accept="image/*" style={{ padding: '13px' }} />
          </div><br />
          <div className="col-6 mb-4 px-3" >
            <label>Enter Features:-</label>
            <div className="row" id="feature">
              <input className="form-control mb-4" type="text" id='features' name="features" placeholder="Feachers" onChange={(e)=> setData({...data,features : e.target.value})}/>
            </div>
            {/* <span id="addInputFeature" className="px-5 py-3 btn-primary" style={{ width: '40%' }}>Add Feature</span><br /> */}
          </div><br />
          <div className="col-6 mb-4 px-3">
            <label>Enter Skills:-</label>
            <div className="row" id="skill">
              <input className="form-control mb-4" type="text" name="skills" id='skills' placeholder="Skills" onChange={(e)=> setData({...data,skills : e.target.value})}/>
            </div>
            {/* <span id="addInputSkill" className="px-5 py-3  btn-primary" style={{ width: '40%' }}>Add Skill</span><br /> */}
          </div><br />
          <div className="col-12 mb-4 px-3">
            <label>Enter Description :-</label>
            <textarea name="desc" id="desc" className="form-control" rows="5" placeholder="Description" onChange={(e)=> setData({...data,desc : e.target.value})}></textarea>
          </div><br />
          <input type="submit" name="submit" value="Submit" className="text-white btn-primary col-12 py-2" />
        </form>
      </div>
      <Footer /></>
  )
}

export default Add_dev;