import React from 'react';
import Header from '../../adminpanel/component/Header';
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import {BACKEND_COMMAN_URL} from "../../Api";
import { Link } from 'react-router-dom';

const View_company = () => {

  const [company,setCompany] = useState([]);

  const fetchData = async ()=>{
    try {
      let data = await axios.get(BACKEND_COMMAN_URL+'/api/view_company');
      if(data.status === 200){
        setCompany(data.data.data);
      }
      else{
        setCompany([]);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const Delete = async (id)=>{
    let data = await axios.delete(`${BACKEND_COMMAN_URL}/api/deleteCompany/${id}`);
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
  <div className="col-10 position-absolute" style={{top: '10%', left: '15%'}}>
    <div className="white_shd full margin_bottom_30">
       <div className="table_section padding_infor_info">
          <div className="table-responsive-sm">
            <div className="d-flex justify-content-between align-items-center">
              <h3 style={{letterSpacing: '3px', fontWeight: 600}}>Companys</h3>
              <a href="/add_company" className="btn btn-primary text-white my-4">Add Company</a>
            </div>
             <table className="table table-bordered" style={{width: '100%'}}>
                <thead>
                  <tr>
                    <th>Logo</th>
                    <th>Company Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Phone</th>
                    <th>Address</th>
                    <th>Location</th>
                    <th>Description</th>
                    <th>Pdf</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                {company.map((v)=>{
                      return (
                        <tr key={v._id}>
                          <td><img src={BACKEND_COMMAN_URL+"/"+v.photo} alt='img' width="100px"/></td>
                          <td>{v.company_name}</td>
                          <td>{v.email}</td>
                          <td>{v.password}</td>
                          <td>{v.phone}</td>
                          <td>{v.address}</td>
                          <td>{v.location}</td>
                          <td>{v.desc}</td>
                          <td><Link to={BACKEND_COMMAN_URL+"/"+v.pdf} target='_blank'>Download Pdf</Link></td>
                          <td><div className="d-flex"><Link className="py-2 me-3 px-3 btn-primary text-white" to={"/Update_company?id="+v._id}>Update</Link><Link className="py-2 px-3 btn-primary text-white" onClick={(e) => {e.preventDefault(); Delete(v._id)}}>Delete</Link></div></td>
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

export default View_company