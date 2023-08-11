import React from 'react';
import Header from '../../adminpanel/component/Header';
import axios from "axios";
import { useEffect, useState } from "react";
import {BACKEND_COMMAN_URL} from "../../Api";
import { Link } from 'react-router-dom';

const View_skill = () => {

  const [skill,setSkill] = useState([]);

  const fetchData = async ()=>{
    try {
      let data = await axios.get(BACKEND_COMMAN_URL+'/api/view_skill');
      if(data.status === 200){
        setSkill(data.data.data);
      }
      else{
        setSkill([]);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const Delete = async (id)=>{
    let data = await axios.delete(`${BACKEND_COMMAN_URL}/api/deleteSkill/${id}`);
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
  <div className="col-5 position-absolute" style={{top: '10%', marginLeft: '400px'}}>
    <div className="white_shd full margin_bottom_30">
       <div className="table_section padding_infor_info">
          <div className="table-responsive-sm">
            <div className="d-flex justify-content-between align-items-center">
              <h3 style={{letterSpacing: '3px', fontWeight: 600}}>Skills</h3>
              <a href="/add_skill" className="btn btn-primary text-white my-4">Add Skill</a>
            </div>
             <table className="table table-bordered" style={{width: '100%'}}>
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Skill Name</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                {skill.map((v)=>{
                      return (
                        <tr key={v._id}>
                          <td><img src={BACKEND_COMMAN_URL+v.img} alt="img" width="100px" /></td>
                          <td>{v.skill_name}</td>
                          <td><div className="d-flex"><Link className="py-2 me-3 px-3 btn-primary text-white" to={"/Update_skill?id="+v._id}>Update</Link><Link className="py-2 px-3 btn-primary text-white" onClick={(e) => {e.preventDefault(); Delete(v._id)}}>Delete</Link></div></td>
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

export default View_skill