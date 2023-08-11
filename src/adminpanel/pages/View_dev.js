import React from 'react';
import Header from '../../adminpanel/component/Header';
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import {BACKEND_COMMAN_URL} from "../../Api";
import { Link } from 'react-router-dom';

const View_dev = () => {

  const [dev,setDev] = useState([]);

  const fetchData = async ()=>{
    try {
      let data = await axios.get(BACKEND_COMMAN_URL+'/api/view_developer_detail');
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
    let data = await axios.delete(`${BACKEND_COMMAN_URL}/api/deletedev/${id}`);
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
    <div className="col-10 position-absolute" style={{left: '15%', top: '10%'}}>
      <div className="white_shd full margin_bottom_30">
         <div className="table_section padding_infor_info">
            <div className="table-responsive-sm">
              <div className="d-flex justify-content-between align-items-center">
                <h3 style={{letterSpacing: '3px', fontWeight: 600}}>Developer Details</h3>
                <a href="/add_dev" className="btn btn-primary text-white my-4">Add Developer Details</a>
              </div>
               <table className="table table-bordered" style={{width: '100%'}}>
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Title</th>
                      <th>Feachers</th>
                      <th>Skills</th>
                      <th>Description</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                  {dev.map((v)=>{
                      return (
                        <tr key={v._id}>
                          <td><img src={BACKEND_COMMAN_URL+v.img} width="100px"  alt='img'/></td>
                          <td>{v.title}</td>
                          <td>{v.features}</td>
                          <td>{v.skills}</td>
                          <td>{v.desc}</td>
                          <td><div className="d-flex"><Link className="py-2 px-3 me-3 btn-primary text-white" to={"/Update_dev?id="+v._id}>Update</Link><Link className="py-2 px-3 btn-primary text-white" onClick={(e) => {e.preventDefault(); Delete(v._id)}}>Delete</Link></div></td>
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

export default View_dev;