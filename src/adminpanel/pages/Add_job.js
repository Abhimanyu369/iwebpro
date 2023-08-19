
import React from 'react';
import Header from '../../adminpanel/component/Header';
import Footer from '../../adminpanel/component/Footer';
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {BACKEND_COMMAN_URL} from "../../Api";

const Add_job = () => {

  const navigate = useNavigate();
  const [inputList, setInputList] = useState([]);
  const [err,seterr] = useState('');
  const [suc,setsuc] = useState('');
  const [data,setData] = useState({
    jobName : '',
    noResources : 0,
    salary : '',
    contractTime : 0,
    technology : []
  });
  
  const fetchData = async ()=>{
    try {
      data.technology = inputList;
      let fdata = await axios.post(BACKEND_COMMAN_URL+'/api/addJobs',data);
      if(fdata.status === 200){
        navigate('/View_job');
      }
      else{
        navigate('/Add_job');
      }
    } catch (error) {
      console.log(error);
    }
  }

  const formSubmit = (e)=>{
    if(!data.jobName || data.jobName === ''){
      e.preventDefault(); 
      seterr("Job Name Required.");
      setsuc('');
      document.getElementById('jobName').focus();
      return false;
    }
    else if(!data.noResources || data.noResources === ''){
      e.preventDefault(); 
      seterr("Resources Required.");
      setsuc('');
      document.getElementById('noResources').focus();
      return false;
    }
    else if(!data.salary || data.salary === ''){
      e.preventDefault(); 
      seterr("Salary Required.");
      setsuc('');
      document.getElementById('salary').focus();
      return false;
    }
    else if(!data.contractTime || data.contractTime === ''){
      e.preventDefault(); 
      seterr("Contract Time Required.");
      setsuc('');
      document.getElementById('contractTime').focus();
      return false;
    }
    else if(!inputList || inputList[0] === ''){
      e.preventDefault(); 
      seterr("Technology Required.");
      setsuc('');
      document.getElementById('technology').focus();
      return false;
    }
    else{
      fetchData();
      seterr('');
      setsuc("Form Submitted.");
      setData({
        jobName : '',
        noResources : '',
        salary : '',
        contractTime : '',
        technology : '',
      })
      e.preventDefault(); 
    }
  }

  const handleInputChange = (e, index) => {
    const list = [...inputList];
    list[index] = e.target.value;
    setInputList(list);
  };
 
  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };
 
  const handleAddClick = (e) => {
    setInputList([...inputList, e.target.value]);
  };

  return (
    <>
    <Header />
    <div className="ml-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
      <div className="container">
        <form onSubmit={formSubmit} method="post" encType="multipart/form-data" className='flex flex-wrap'>
          <div className="w-full">
            <h2 className="mb-4" style={{ letterSpacing: '3px', fontWeight: 600 }}>Add Job </h2>
            {err ? <p style={{color : 'red'}}>{err}</p> : ''}
            {suc ? <p style={{color : 'green'}}>{suc}</p> : ''}
          </div>
          <div className="w-3/6 mb-4 px-3">
            <label>Enter Job Name:-</label>
            <input className="w-full rounded-lg border-[1.5px] border-stroke p-2 px-3 text-dark" type="text" name="jobName" id='jobName' onChange={(e)=> setData({...data,jobName : e.target.value})} placeholder="Job Name" />
          </div><br />
          <div className="w-3/6 mb-4 px-3">
            <label>Enter No. of Resources :-</label>
            <input className="w-full rounded-lg border-[1.5px] border-stroke p-2 px-3 text-dark" type="number" name="noResources" id='noResources' min="1" onChange={(e)=> setData({...data,noResources : e.target.value})} placeholder="Resources" />
          </div><br />
          <div className="w-3/6 mb-4 px-3">
            <label>Enter Salary :-</label>
            <input className="w-full rounded-lg border-[1.5px] border-stroke p-2 px-3 text-dark" type="text" name="salary" id='salary' onChange={(e)=> setData({...data,salary : e.target.value})} placeholder="Ex. $1500 - $2500 /month" />
          </div><br />
          <div className="w-3/6 mb-4 px-3">
            <label>Enter Contract Time :-</label>
            <input className="w-full rounded-lg border-[1.5px] border-stroke p-2 px-3 text-dark" type="number" name="contractTime" id='contractTime' min="1" onChange={(e)=> setData({...data,contractTime : e.target.value})} placeholder="Contract Time" />
          </div><br />
          <div className="w-full mb-4 px-3 ">
            <label>Enter Technology :-</label>
            <div className="w-full row" id="tec">
            {inputList.map((x, i) => {
              return (
                <div className='flex mb-4' key={i}>
                  <>
                      <input className="w-full rounded-lg border-[1.5px] border-stroke p-2 px-3 text-dark" name="technology" id='technology' placeholder="Enter Technology" onChange={e => handleInputChange(e, i)} />
                      {inputList.length !== 1 && <span id="addInput" className="px-5 py-2 btn-primary text-center" onClick={() => handleRemoveClick(i)} style={{ lineHeight: '35px', cursor: 'pointer' }}>Remove</span>}<br />
                  </>
                </div>
              );
            })}
            </div>
          </div>
          <div className="w-full mb-4 px-3">
            <span id="addInput" className="px-5 py-3 btn-primary" onClick={handleAddClick} style={{ width: '40%', cursor: 'pointer' }}>Add Technology</span><br />
          </div>
          <input type="submit" name="submit" value="Submit" className="w-full cursor-pointer rounded-lg border border-primary bg-primary py-2 font-medium text-white transition hover:bg-opacity-90" />
        </form>
      </div>
    </div>
      </>
  )
}

export default Add_job;