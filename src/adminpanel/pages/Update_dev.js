import React, { useEffect } from 'react';
import Header from '../../adminpanel/component/Header';
import Footer from '../../adminpanel/component/Footer';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {BACKEND_COMMAN_URL} from "../../Api";
import axios from "axios";

const Update_dev = () => {

  const url = new URLSearchParams(window.location.search);
  const id = url.get('id');
  const navigate = useNavigate();
  const [err,seterr] = useState('');
  const [skill,setskill] = useState([]);
  const [fea,setfea] = useState([]);
  const [suc,setsuc] = useState('');
  const [data,setData] = useState({
    title : '',
    desc : '',
    skills : '',
    features : '',
    img : ''
  });
  
  const fetchData = async ()=>{
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('img', data.img);
    formData.append('skills', data.skills);
    formData.append('features', data.features);
    formData.append('desc', data.desc);
    let fdata = await axios.put(BACKEND_COMMAN_URL+'/api/editdev/'+id,formData);
    if(fdata.status === 200){
      navigate('/View_dev');
    }
    else{
      navigate('/Add_Dev');
    }
  }
  
  const fetchData2 = async ()=>{
    const Fdata = await axios.get(`${BACKEND_COMMAN_URL}/api/view_developer_one_detail?id=${id}`);
    if(Fdata.status === 200){
      let fdata = Fdata.data.data;
      setData({
        title : fdata.title,
        desc : fdata.desc,
        img : fdata.img
      });
      setskill(fdata.skills);
      setfea(fdata.features);
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
      e.preventDefault(); 
    }
  }

  const formImg = (e)=>{
    setData({...data, img: e.target.files[0]});
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

  return (
    <><Header />
        <div className="container">
    <form onSubmit={formSubmit} method="post" encType="multipart/form-data" className="col-8 position-absolute d-flex flex-wrap" style={{marginTop: '130px', marginLeft: '180px', top: 0}}>
     <div className="col-12">
      <h2 className="mb-4" style={{letterSpacing: '3px', fontWeight: 600}}>Edit Developer Detail </h2>
      {err ? <p className='error'>{err}</p> : ''}
      {suc ? <p className='success'>{suc}</p> : ''}
     </div>
      <div className="col-12">
        <div className="option">
          <img src={data.img} alt="img" height="100px" style={{borderRadius: '50%', objectFit: 'cover'}}width="100px" className="img mb-4" id="img" />
          <span id="con" className="px-3 py-2 text-dark">Click Image and Upload New Image.</span>
        </div>
      </div>
        <div className="col-6 mb-4 px-3">
          <label>Enter Title:-</label>
          <input className="form-control" type="text" name="title" id='title' value={data.title} placeholder="Title"  onChange={(e)=> setData({...data,title : e.target.value})}/>
        </div><br />
        <div className="col-6 mb-4 px-3" >
          <div id="nImg">
            <label>Choose Image :-</label>
            <input className="form-control" type="file" name="img" id='img' accept="image/*" onChange={formImg} style={{padding: '13px'}} />
          </div>
        </div><br />
        <div className="col-6 mb-4 px-3">
          <label>Enter Features:-</label>
          <div className="row" id="feature">
          {fea.map((v)=>{
            return (
              <input className="form-control mb-4" type="text" name="features" id='features' value={v} placeholder="Feachers"  onChange={(e)=> setData({...data,features : e.target.value})}/>
            )
          })}
          </div>
          {/* <a href=" " id="addInputFeature" className="btn btn-primary" style={{width: '40%'}}>Add Feature</a><br /> */}
        </div><br />
        <div className="col-6 mb-4 px-3">
          <label>Enter Skills:-</label>
          <div className="row" id="skill">
          {skill.map((v)=>{
            return (
              <input className="form-control mb-4" type="text" name="skills" id='skills' value={v} placeholder="Skills"  onChange={(e)=> setData({...data,skills : e.target.value})}/>
            )
          })}
          </div>
          {/* <a href=" " id="addInputSkill" className="btn btn-primary" style={{width: '40%'}}>Add Skill</a><br /> */}
        </div><br />
        <div className="col-12 mb-4 px-3">
          <label>Enter Description :-</label>
          <textarea name="desc" id="desc" className="form-control" rows="5" placeholder="Description" value={data.desc}  onChange={(e)=> setData({...data,desc : e.target.value})}></textarea>
        </div><br />
      <input type="submit" name="submit" value="Edit" className=" text-white btn-primary col-12 py-2"/>
    </form>
  </div>
  </>
  )
}

export default Update_dev