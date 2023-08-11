import React, { useEffect } from 'react';
import Header from '../../adminpanel/component/Header';
import Footer from '../../adminpanel/component/Footer';
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {BACKEND_COMMAN_URL} from "../../Api";

const Update_job = () => {

  const url = new URLSearchParams(window.location.search);
  const id = url.get('id');
  const navigate = useNavigate();
  const [err,seterr] = useState('');
  const [suc,setsuc] = useState('');
  const [data,setData] = useState({
    jobName : '',
    noResources : '',
    salary : '',
    contractTime : '',
    technology : '',
  });
  
  const fetchData = async (e)=>{
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
        technology : fdata.technology
      });
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
      e.preventDefault(); 
    }
  }

  useEffect(()=>{
    fetchData2();
  },[]);


  return (
    <><Header />
        <div className="container">
    <form onSubmit={formSubmit} method="post" className="col-8 position-absolute d-flex flex-wrap" style={{marginTop: '130px', marginLeft: '180px', top: 0}}>
     <div className="col-12">
      <h2 className="mb-4" style={{letterSpacing: '3px', fontWeight: 600}}>Edit Job </h2>
      {err ? <p className='error'>{err}</p> : ''}
      {suc ? <p className='success'>{suc}</p> : ''}
     </div>
      <div className="col-6 mb-4 px-3">
        <label>Enter Job Name:-</label>
        <input className="form-control" type="text" name="jobName" id='jobName' placeholder="Job Name" onChange={(e)=> setData({...data,jobName : e.target.value})} value={ data.jobName } />
      </div><br />
      {/* <div className="col-6 mb-4 px-3">
        <label>Enter Company Year :-</label>
        <input type="number" name="companyYear" className="form-control" placeholder="Company Year" / onChange={(e)=> setData({...data,companyYear : e.target.value})} value="<%= data.companyYear %>" />
      </div><br> */}
      <div className="col-6 mb-4 px-3">
        <label>Enter No. of Resources :-</label>
        <input className="form-control" type="number" name="noResources" placeholder="Resources" id='noResources' onChange={(e)=> setData({...data,noResources : e.target.value})} value={data.noResources} />
      </div><br />
      {/* <div className="col-6 mb-4 px-3">
        <label>Enter tentative Time :-</label>
        <input className="form-control" type="number" name="tentativeTime" placeholder="Ex. 3 weeks" onChange={(e)=> setData({...data,tentativeTime : e.target.value})} value="<%= data.tentativeTime %>" />
      </div><br> */}
      <div className="col-6 mb-4 px-3">
        <label>Enter Salary :-</label>
        <input className="form-control" type="text" name="salary" id='salary' placeholder="Ex. $1500 - $2500 /month" onChange={(e)=> setData({...data,salary : e.target.value})} value={data.salary} />
      </div><br />
      <div className="col-6 mb-4 px-3">
        <label>Enter Contract Time :-</label>
        <input className="form-control" type="number" name="contractTime" id='contractTime' placeholder="Contract Time" onChange={(e)=> setData({...data,contractTime : e.target.value})} value={data.contractTime} />
      </div><br />
      <div className="col-12 mb-4 px-3 ">
        <label>Enter Technology :-</label>
        <input className="form-control mb-3" value={data.technology} type="text" name="technology" id='technology'  placeholder="Technology"  onChange={(e)=> setData({...data,technology : e.target.value})} />
        {/* <div className="col-12 row" id="tec">
          <% for(var i of data.technology) { %>
            <div className="col-6">
            </div>
          <% } %>
        </div> */}
      </div>
      <div className="col-12 mb-4 px-3">
        {/* <a href=" " id="addInput" className="btn btn-primary" style={{width: '40%'}}>Add Technology</a><br /> */}
      </div>
      <input type="submit" name="submit" value="Edit" className=" text-white btn-primary col-12 py-2"/>
    </form>
  </div>
    <Footer /></>
  )
}

export default Update_job