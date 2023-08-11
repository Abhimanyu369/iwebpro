import React from 'react';
import Header from '../../adminpanel/component/Header';
import axios from "axios";
import { useState, useEffect } from "react";
import {BACKEND_COMMAN_URL} from "../../Api";
import { Link } from 'react-router-dom';

const View_hire = () => {

  const [hire,setHire] = useState([]);

  const fetchData = async ()=>{
    try {
      let data = await axios.get(BACKEND_COMMAN_URL+'/api/view_hire');
      if(data.status === 200){
        setHire(data.data.data);
      }
      else{
        setHire([]);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const Delete = async (id)=>{
    let data = await axios.delete(`${BACKEND_COMMAN_URL}/api/deleteHire/${id}`);
    if(data.status === 200){
      fetchData();
    }
    else{
      alert("something wrong");
    }
  }

  useEffect(()=>{
    fetchData();
  },[]);

  return (
    <><Header />
        <div className="container">
  <div className="col-9 position-absolute" style={{left: '18%', top: '10%'}}>
    <div className="white_shd full margin_bottom_30">
       <div className="table_section padding_infor_info">
          <div className="table-responsive-sm">
            <div className="d-flex justify-content-between align-items-center">
              <h3 style={{letterSpacing: '3px', fontWeight: 600}}>Hires</h3>
              <a href="/add_job" className="btn btn-primary text-white my-4">Add Hire</a>
            </div>
             <table className="table table-bordered" style={{width: '100%'}}>
                <thead>
                  <tr>
                    <th>Company Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Time</th>
                    <th>Time Type</th>
                    <th>Requirement</th>
                    <th>Technology</th>
                    <th>Description</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                {hire.map((v)=>{
                      return (
                        <tr key={v._id}>
                          <td>{v.company_name}</td>
                          <td>{v.email}</td>
                          <td>{v.phone}</td>
                          <td>{v.time}</td>
                          <td>{v.time_type}</td>
                          <td>{v.requirement}</td>
                          <td>{v.tech}</td>
                          <td>{v.desc}</td>
                          <td><Link className="py-2 px-3 btn-primary text-white" onClick={(e) => {e.preventDefault(); Delete(v._id)}}>Delete</Link></td>
                        </tr>
                      )
                    })}
                </tbody>
             </table>
          </div>
       </div>
    </div>
 </div>


</div>
    </>
  )
}

export default View_hire