import React from 'react';
import Header from '../../adminpanel/component/Header';
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import { BACKEND_COMMAN_URL } from "../../Api";

const View_blog = () => {

  const routePath = useLocation();
  // const monthNames = ["Jan", "Feb", "March", "April", "May", "June","July", "Aug", "Sept", "Oct", "Nov", "Dec"];
  const [blog,setBlog] = useState([]);

  const fetchData = async ()=>{
    try {
      let data = await axios.get(BACKEND_COMMAN_URL+'/api/view_blog');
      if(data.status === 200){
        setBlog(data.data.data);
      }
      else{
        setBlog([]);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const Delete = async (id)=>{
    let data = await axios.delete(`${BACKEND_COMMAN_URL}/api/deleteBlog/${id}`);
    if(data.status === 200){
      fetchData();
    }
    else{
      alert("something wrong");
    }
  }

  useEffect(()=>{
    fetchData();
    window.scrollTo(0, 0);
  },[routePath]);

  return (
    <><Header />
        <div className="container">
    <div className="col-9 position-absolute" style={{left: '18%', top: '10%'}}>
      <div className="white_shd full margin_bottom_30">
         <div className="table_section padding_infor_info">
            <div className="table-responsive-sm">
              <div className="d-flex justify-content-between align-items-center">
                <h3 style={{letterSpacing: '3px', fontWeight: 600}}>Blogs</h3>
                <a href="/add_blog" className="btn btn-primary text-white my-4">Add Blog</a>
              </div>
               <table className="table table-bordered" style={{width: '100%'}}>
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Name</th>
                      <th>Title</th>
                      <th>Category</th>
                      <th>Description</th>
                      <th>Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                {blog.map((v)=>{
                      return (
                        <tr key={v._id}>
                          <td><img src={BACKEND_COMMAN_URL+v.img} alt="img" width="100px" /></td>
                          <td>{v.name}</td>
                          <td>{v.title}</td>
                          <td>{v.cat}</td>
                          <td>{v.desc}</td>
                          <td>{v.date}</td>
                          <td><div className="d-flex"><Link className="py-2 px-3 me-3 btn-primary text-white" to={"/Update_blog?id="+v._id}>Update</Link><Link className="py-2 px-3 btn-primary text-white" onClick={(e) => {e.preventDefault(); Delete(v._id)}}>Delete</Link></div></td>
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

export default View_blog