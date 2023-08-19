import React, { useEffect } from 'react';
import Header from '../../adminpanel/component/Header';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {BACKEND_COMMAN_URL} from "../../Api";
import axios from "axios";

const Update_dev = () => {

  const url = new URLSearchParams(window.location.search);
  const id = url.get('id');
  const navigate = useNavigate();
  const [err,seterr] = useState('');
  const [inputList1, setInputList1] = useState([]);
  const [inputList2, setInputList2] = useState([]);
  const [suc,setsuc] = useState('');
  const [data,setData] = useState({
    title : '',
    desc : '',
    skills : [],
    features : [],
    img : ''
  });
  
  const fetchData = async ()=>{
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('img', data.img);
    formData.append('desc', data.desc);
    for(var i of inputList1){
      formData.append('features', i);
    }
    for(var j of inputList2){
      formData.append('skills', j);
    }
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
      setInputList2(fdata.skills);
      setInputList1(fdata.features);
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
    else if(!inputList1 || inputList1[0] === ''){
      e.preventDefault(); 
      seterr("Features Required.");
      setsuc('');
      document.getElementById('features').focus();
      return false;
    }
    else if(!inputList2 || inputList2[0] === ''){
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

  const handleInputChange1 = (e, index) => {
    const list = [...inputList1];
    list[index] = e.target.value;
    setInputList1(list);
  };
 
  const handleRemoveClick1 = index => {
    const list = [...inputList1];
    list.splice(index, 1);
    setInputList1(list);
  };
 
  const handleAddClick1 = (e) => {
    setInputList1([...inputList1, e.target.value]);
  };

  const handleInputChange2 = (e, index) => {
    const list = [...inputList2];
    list[index] = e.target.value;
    setInputList2(list);
  };
 
  const handleRemoveClick2 = index => {
    const list = [...inputList2];
    list.splice(index, 1);
    setInputList2(list);
  };

  const handleAddClick2 = (e) => {
    setInputList2([...inputList2, e.target.value]);
  };

  return (
    <><Header />
      <div className="ml-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
        <div className="container">
    <form onSubmit={formSubmit} method="post" encType="multipart/form-data" className="flex flex-wrap">
     <div className="w-full">
      <h2 className="mb-4" style={{letterSpacing: '3px', fontWeight: 600}}>Edit Developer Detail </h2>
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
          <input className="w-full rounded-lg border-[1.5px] border-stroke p-2 px-3 text-dark" type="text" name="title" id='title' value={data.title} placeholder="Title"  onChange={(e)=> setData({...data,title : e.target.value})}/>
        </div><br />
        <div className="w-3/6 mb-4 px-3" >
          <div id="nImg">
            <label>Choose Image :-</label>
            <input className="w-full rounded-lg border-[1.5px] border-stroke p-2 px-3 text-dark" type="file" name="img" id='img' accept="image/*" onChange={formImg} style={{padding: '13px'}} />
          </div>
        </div><br />
        <div className="w-3/6 mb-4 px-3">
          <label>Enter Features:-</label>
          <div className="row" id="feature">
          {inputList1.map((x, i) => {
              return (
                <div className='flex mb-4' key={i}>
                  <>
                      <input className="w-full rounded-lg border-[1.5px] border-stroke p-2 px-3 text-dark" value={x} name="features" id='features' placeholder="Enter Feature" onChange={e => handleInputChange1(e, i)} />
                      {inputList1.length !== 1 && <span id="addInput" className="px-5 py-2 btn-primary text-center" onClick={() => handleRemoveClick1(i)} style={{ lineHeight: '35px', cursor: 'pointer' }}>Remove</span>}<br />
                  </>
                </div>
              );
            })}
          </div>
        </div><br />
        <div className="w-3/6 mb-4 px-3">
          <label>Enter Skills:-</label>
          <div className="row" id="skill">
          {inputList2.map((x, i) => {
              return (
                <div className='flex mb-4' key={i}>
                  <>
                      <input className="w-full rounded-lg border-[1.5px] border-stroke p-2 px-3 text-dark" value={x} name="skills" id='skills' placeholder="Enter Skill" onChange={e => handleInputChange2(e, i)} />
                      {inputList2.length !== 1 && <span id="addInput" className="px-5 py-2 btn-primary text-center" onClick={() => handleRemoveClick2(i)} style={{ lineHeight: '35px', cursor: 'pointer' }}>Remove</span>}<br />
                  </>
                </div>
              );
            })}
          </div>
        </div><br />
        <div className="w-3/6 mb-4 px-3">
            <span id="addInput" className="px-5 py-3 btn-primary" onClick={handleAddClick1} style={{ width: '40%', cursor: 'pointer' }}>Add Features</span><br />
          </div>
          <div className="w-3/6 mb-4 px-3">
            <span id="addInput" className="px-5 py-3 btn-primary" onClick={handleAddClick2} style={{ width: '40%', cursor: 'pointer' }}>Add Skills</span><br />
          </div>
        <div className="w-full mb-4 px-3">
          <label>Enter Description :-</label>
          <textarea name="desc" id="desc" className="w-full rounded-lg border-[1.5px] border-stroke p-2 px-3 text-dark" rows="5" placeholder="Description" value={data.desc}  onChange={(e)=> setData({...data,desc : e.target.value})}></textarea>
        </div><br />
        <input type="submit" value="Edit" className="w-full cursor-pointer rounded-lg border border-primary bg-primary mb-5 py-2 font-medium text-white transition hover:bg-opacity-90" />
    </form>
  </div>
  </div>
  </>
  )
}

export default Update_dev;