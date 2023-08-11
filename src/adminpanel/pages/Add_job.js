
import React from 'react';
import Header from '../../adminpanel/component/Header';
import Footer from '../../adminpanel/component/Footer';
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {BACKEND_COMMAN_URL} from "../../Api";

const Add_job = () => {

  const navigate = useNavigate();
  const [err,seterr] = useState('');
  const [suc,setsuc] = useState('');
  const [data,setData] = useState({
    jobName : '',
    noResources : 0,
    salary : '',
    contractTime : 0,
    technology : '',
  });
  console.log(data)
  const fetchData = async ()=>{
      let fdata = await axios.post(BACKEND_COMMAN_URL+'/api/addJobs',data);
      console.log(fdata)
      if(fdata.status === 200){
        navigate('/View_job');
      }
      else{
        navigate('/Add_job');
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
    else if(!data.technology || data.technology === ''){
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

  return (
    <><Header />
      <div className="container">
        <form onSubmit={formSubmit} method="post" encType="multipart/form-data" className="col-8 position-absolute d-flex flex-wrap" style={{ marginTop: '130px', marginLeft: '120px', top: 0 }}>
          <div className="col-12">
            <h2 className="mb-4" style={{ letterSpacing: '3px', fontWeight: 600 }}>Add Job </h2>
            {err ? <p style={{color : 'red'}}>{err}</p> : ''}
            {suc ? <p style={{color : 'green'}}>{suc}</p> : ''}
          </div>
          <div className="col-6 mb-4 px-3">
            <label>Enter Job Name:-</label>
            <input className="form-control" type="text" name="jobName" id='jobName' onChange={(e)=> setData({...data,jobName : e.target.value})} placeholder="Job Name" />
          </div><br />
          {/* <div className="col-6 mb-4 px-3">
        <label>Enter Company Year :-</label>
        <input type="number" name="companyYear" className="form-control" onChange={(e)=> setData({...data,first_name : e.target.value})} placeholder="Company Year" / />
      </div><br />  */}
          <div className="col-6 mb-4 px-3">
            <label>Enter No. of Resources :-</label>
            <input className="form-control" type="number" name="noResources" id='noResources' min="1" onChange={(e)=> setData({...data,noResources : e.target.value})} placeholder="Resources" />
          </div><br />
          {/* <div className="col-6 mb-4 px-3">
        <label>Enter tentative Time :-</label>
        <input className="form-control" type="number" name="tentativeTime" onChange={(e)=> setData({...data,first_name : e.target.value})} placeholder="Ex. 3 weeks" />
      </div><br />  */}
          <div className="col-6 mb-4 px-3">
            <label>Enter Salary :-</label>
            <input className="form-control" type="text" name="salary" id='salary' onChange={(e)=> setData({...data,salary : e.target.value})} placeholder="Ex. $1500 - $2500 /month" />
          </div><br />
          <div className="col-6 mb-4 px-3">
            <label>Enter Contract Time :-</label>
            <input className="form-control" type="number" name="contractTime" id='contractTime' min="1" onChange={(e)=> setData({...data,contractTime : e.target.value})} placeholder="Contract Time" />
          </div><br />
          <div className="col-12 mb-4 px-3 ">
            <label>Enter Technology :-</label>
            <div className="col-12 row" id="tec">
              <div className="col-6">
                <input className="form-control mb-3" type="text" name="technology" id='technology' onChange={(e)=> setData({...data,technology : e.target.value})} placeholder="Technology" />
              </div>
            </div>
          </div>
          <div className="col-12 mb-4 px-3">
            {/* <span id="addInput" className="   px-5 py-3 btn-primary" style={{ width: '40%' }}>Add Technology</span><br /> */}
          </div>
          <input type="submit" name="submit" value="Submit" className="text-white btn-primary col-12 py-2" />
        </form>
      </div>
      <Footer /></>
  )
}

export default Add_job;