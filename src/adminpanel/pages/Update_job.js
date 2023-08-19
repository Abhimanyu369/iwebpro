import React, { useEffect } from 'react';
import Header from '../../adminpanel/component/Header';
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {BACKEND_COMMAN_URL} from "../../Api";

const Update_job = () => {

  const url = new URLSearchParams(window.location.search);
  const id = url.get('id');
  const navigate = useNavigate();
  const [inputList, setInputList] = useState([]);
  const [err,seterr] = useState('');
  const [suc,setsuc] = useState('');
  const [data,setData] = useState({
    jobName : '',
    noResources : '',
    salary : '',
    contractTime : '',
    technology : [],
  });
  
  const fetchData = async (e)=>{
    data.technology = inputList;
    let Fdata = await axios.put(BACKEND_COMMAN_URL+'/api/editJob/'+id,data);
    if(Fdata.status === 200){
      navigate('/View_job');
    }
    else{
      e.preventDefault(); 
    }
  }

  const fetchData2 = async ()=>{
    const data = await axios.get(`${BACKEND_COMMAN_URL}/api/singleJob/${id}`);
    if(data.status === 200){
      let fdata = data.data.data;
      setData({
        contractTime : fdata.contractTime,
        jobName : fdata.jobName,
        salary : fdata.salary,
        noResources : fdata.noResources,
      });
      setInputList(fdata.technology);
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
      e.preventDefault(); 
    }
  }

  useEffect(()=>{
    fetchData2();
  },[]);

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
    <><Header />
      <div className="ml-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
        <div className="container">
          <form onSubmit={formSubmit} method="post" className="flex flex-wrap">
            <div className="w-full">
              <h2 className="mb-4" style={{letterSpacing: '3px', fontWeight: 600}}>Edit Job </h2>
              {err ? <p className='error'>{err}</p> : ''}
              {suc ? <p className='success'>{suc}</p> : ''}
            </div>
            <div className="w-3/6 mb-4 px-3">
              <label>Enter Job Name:-</label>
              <input className="w-full rounded-lg border-[1.5px] border-stroke p-2 px-3 text-dark" type="text" name="jobName" id='jobName' placeholder="Job Name" onChange={(e)=> setData({...data,jobName : e.target.value})} value={ data.jobName } />
            </div><br />
            <div className="w-3/6 mb-4 px-3">
              <label>Enter No. of Resources :-</label>
              <input className="w-full rounded-lg border-[1.5px] border-stroke p-2 px-3 text-dark" type="number" name="noResources" placeholder="Resources" id='noResources' onChange={(e)=> setData({...data,noResources : e.target.value})} value={data.noResources} />
            </div><br />
            <div className="w-3/6 mb-4 px-3">
              <label>Enter Salary :-</label>
              <input className="w-full rounded-lg border-[1.5px] border-stroke p-2 px-3 text-dark" type="text" name="salary" id='salary' placeholder="Ex. $1500 - $2500 /month" onChange={(e)=> setData({...data,salary : e.target.value})} value={data.salary} />
            </div><br />
            <div className="w-3/6 mb-4 px-3">
              <label>Enter Contract Time :-</label>
              <input className="w-full rounded-lg border-[1.5px] border-stroke p-2 px-3 text-dark" type="number" name="contractTime" id='contractTime' placeholder="Contract Time" onChange={(e)=> setData({...data,contractTime : e.target.value})} value={data.contractTime} />
            </div><br />
            <div className="w-full mb-4 px-3 ">
              <label>Enter Technology :-</label>
              {inputList.map((v,i)=>{
                return (
                  <div className='flex mb-4' key={i}>
                        <>
                            <input className="w-full rounded-lg border-[1.5px] border-stroke p-2 px-3 text-dark" name="technology" value={v} id='technology' placeholder="Enter Technology" onChange={e => handleInputChange(e, i)} />
                            {inputList.length !== 1 && <span id="removeInput" className="px-5 py-2 btn-primary text-center" onClick={() => handleRemoveClick(i)} style={{ lineHeight: '35px', cursor: 'pointer' }}>Remove</span>}<br />
                        </>
                      </div>
                  // <>
                  //   <input className="w-full rounded-lg border-[1.5px] border-stroke p-2 px-3 text-dark mb-3" value={v} type="text" name="technology" id='technology'  placeholder="Technology"  onChange={(e)=> setData({...data,technology : e.target.value})} />
                  // </>
                )
              })}
            </div>
            <div className="w-full mb-4 px-3">
              <span id="addInput" className="px-5 py-3 btn-primary" onClick={handleAddClick} style={{ width: '40%', cursor: 'pointer' }}>Add Technology</span><br />
            </div>
            <input type="submit" value="Edit" className="mb-5 w-full cursor-pointer rounded-lg border border-primary bg-primary py-2 font-medium text-white transition hover:bg-opacity-90" />
          </form>
        </div>
      </div>
    {/* <Footer /> */}
    </>
  )
}

export default Update_job;