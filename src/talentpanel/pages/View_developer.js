import React from 'react';
import Header from '../../talentpanel/components/Header'
import Footer from '../../talentpanel/components/Footer'
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import {BACKEND_COMMAN_URL} from "../../Api";
import { Link } from 'react-router-dom';

export const View_developer = () => {

  const [dev,setDev] = useState([]);

  const fetchData = async ()=>{
    try {
      let data = await axios.get(BACKEND_COMMAN_URL+'/api/view_developer');
      if(data.status === 200){
        setDev(data.data.data);
      }
      else{
        setDev([]);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const Delete = async (id)=>{
    let data = await axios.delete(`${BACKEND_COMMAN_URL}/api/deleteDeveloper/${id}`);
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

  <div className="col-10 position-absolute" style={{marginLeft: '300px', top: '10%'}}>
       <div className="table_section mt-5">
          <div className="table-responsive-sm">
            <div className="d-flex justify-content-between align-items-center">
              <h3 style={{letterSpacing: '3px', fontWeight: 600}}>Developers</h3>
              <a href="/talent_add_developer" className="btn btn-primary text-white my-4">Add Developer</a>
            </div>
            <div style={{overflowX: 'auto'}}>
              <table className="table table-bordered" >
                <thead>
                  <tr>
                    <th>Full Name</th>
                    <th>Designation</th>
                    <th>Expertise</th>
                    <th>Technology</th>
                    <th>Framework</th>
                    <th>Programming Language</th>
                    <th>Browser</th>
                    <th>Database</th>
                    <th>Web Server</th>
                    <th>Operating System</th>
                    <th>Email</th>
                    <th>Rate</th>
                    <th>Experience</th>
                    <th>Linkedin</th>
                    <th>Availability</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                {dev.map((v)=>{
                      return (
                        <tr key={v._id}>
                          <td>{v.full_name}</td>
                          <td>{v.designation}</td>
                          <td>{v.expertise}</td>
                          <td>{v.technology}</td>
                          <td>{v.framework}</td>
                          <td>{v.programming_language}</td>
                          <td>{v.browser}</td>
                          <td>{v.database}</td>
                          <td>{v.web_server}</td>
                          <td>{v.operating_system}</td>
                          <td>{v.email}</td>
                          <td>{v.rate} $/Month</td>
                          <td>{v.experience} years</td>
                          <td><Link to={v.linkedin} target="_blank">Linkedin</Link></td>
                          <td>{v.availability}</td>
                          <td><div className="d-flex"><Link className="py-2 px-3 me-3 btn-primary text-white" to={"/talent_edit_developer?id="+v._id}>Update</Link><Link className="py-2 px-3 btn-primary text-white" onClick={(e) => {e.preventDefault(); Delete(v._id)}}>Delete</Link></div></td>
                        </tr>
                      )
                    })}
                </tbody>
             </table>
            </div>
          </div>
       </div>
 </div>
                    <Footer />

    </>
  )
}
export default View_developer;
