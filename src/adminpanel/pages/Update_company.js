import React, { useEffect } from 'react';
import Header from '../../adminpanel/component/Header';
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {BACKEND_COMMAN_URL} from "../../Api";

const Update_company = () => {

  const url = new URLSearchParams(window.location.search);
  const id = url.get('id');
  const navigate = useNavigate();
    const [suc,setsuc] = useState('');
    const [err,seterr] = useState('');
    const [data, setData] = useState(
      {
        company_name: '',
        email : '',
        phone : '',
        address : '',
        location : '',
        desc : '',
        photo: '',
        pdf: '',
      }
    );

    const handleSubmit = async (e) => {
      let regex = new RegExp("[a-z0-9]+@[a-z]+\.[a-z]{2,3}");
      if(!data.company_name || data.company_name === ''){
        e.preventDefault(); 
        seterr("Company Name Required.");
        setsuc('');
        document.getElementById('company_name').focus();
        return false;
      }
      else if(!data.email || data.email === ''){
        e.preventDefault(); 
        seterr("Email Required.");
        setsuc('');
        document.getElementById('email').focus();
        return false;
      }
      if(!regex.test(data.email)){
        e.preventDefault();
        seterr("Invalid Email.");
        setsuc('');
        document.getElementById('email').focus();
        return false;
      }
      else if(!data.phone || data.phone === ''){
        e.preventDefault(); 
        seterr("Phone No. Required.");
        setsuc('');
        document.getElementById('phone').focus();
        return false;
      }
      if(data.phone.length !== 10){
        e.preventDefault();
        seterr("10 Character Required In Phone No.");
        setsuc('');
        document.getElementById('phone').focus();
        return false;
      }
      else if(!data.address || data.address === ''){
        e.preventDefault(); 
        seterr("Address Required.");
        setsuc('');
        document.getElementById('address').focus();
        return false;
      }
      else if(!data.location || data.location === ''){
        e.preventDefault(); 
        seterr("Location Required.");
        setsuc('');
        document.getElementById('location').focus();
        return false;
      }
      else if(!data.photo || data.photo === ''){
        e.preventDefault(); 
        seterr("Company Logo Required.");
        setsuc('');
        document.getElementById('photo').focus();
        return false;
      }
      else if(!data.desc || data.desc === ''){
        e.preventDefault(); 
        seterr("Description Required.");
        setsuc('');
        document.getElementById('desc').focus();
        return false;
      }
      else if(!data.pdf || data.pdf === ''){
        e.preventDefault(); 
        seterr("Pdf Required.");
        setsuc('');
        document.getElementById('pdf').focus();
        return false;
      }
      else{
        data.desc= data.desc.replace(/\s+/g, ' ').trim();
        data.location= data.location.replace(/\s+/g, ' ').trim();
        data.address= data.address.replace(/\s+/g, ' ').trim();
        e.preventDefault();
        const formData = new FormData();
        formData.append('photo', data.photo);
        formData.append('email', data.email);
        formData.append('phone', data.phone);
        formData.append('pdf', data.pdf);
        formData.append('company_name', data.company_name);
        formData.append('address', data.address);
        formData.append('location', data.location);
        formData.append('desc', data.desc);
        const Fdata = await axios.put(BACKEND_COMMAN_URL+'/api/editCompany/'+id, formData);
        console.log(Fdata)
        if(Fdata.status === 200){
          navigate('/View_company');
        }
        else{
          e.preventDefault();
        }
        setData({
          company_name : '',
          email : '',
          phone : '',
          address : '',
          location : '',
          desc : '',
          photo :'',
          pdf: '',
        });
        seterr('');
        setsuc("Form Submitted.");
      }
    }
    
    const fetchData = async ()=>{
      const data = await axios.get(`${BACKEND_COMMAN_URL}/api/singleCompany/${id}`);
      if(data.status === 200){
        let fdata = data.data.data;
        setData({
          company_name: fdata.company_name,
          email : fdata.email,
          phone : fdata.phone,
          address : fdata.address,
          location : fdata.location,
          desc : fdata.desc,
          photo: fdata.photo,
          pdf: fdata.pdf
        });
      }
    }

    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value});
    }

    const handlePhoto = (e) => {
      setData({...data, photo: e.target.files[0]});
    }
    const handlePdf = (e) => {
      setData({...data, pdf: e.target.files[0]});
    };

    useEffect(()=>{
      fetchData();
      let img = document.getElementById('img');
      let con = document.getElementById('con');
      let nImg = document.getElementById('nImg');
      img.addEventListener('click', ()=>{
        nImg.classList.add('d-block');
        img.classList.add('d-none');
      });
      img.addEventListener('mouseover', ()=>{
        con.classList.add('d-inline-block');
      });
      img.addEventListener('mouseout', ()=>{
        con.classList.remove('d-inline-block');
      });
    },[]);

  return (
    <><Header />
    
    <div className="container">
    <form onSubmit={handleSubmit} method="post" encType="multipart/form-data" className="col-8 position-absolute d-flex flex-wrap" style={{marginTop: '130px', marginLeft: '180px', top: 0}}>
     <div className="col-12">
      <h2 className="mb-4" style={{letterSpacing: '3px', fontWeight: 600}}>Edit Company </h2>
      {err ? <p className='error'>{err}</p> : ''}
            {suc ? <p className='success'>{suc}</p> : ''}
     </div>
    <div className="col-12">
      <div className="option">
        <img src={data.photo} alt="img" height="100px" style={{borderRadius: '50%', objectFit: 'cover'}} width="100px" className="img mb-4" id="img" />
        <span id="con" className="px-3 py-2 text-dark">Click Image and Upload New Image.</span>
      </div>
    </div>
    <div className="col-4 px-3 mb-4">
      <label>Enter Company Name:-</label>
      <input className="form-control" type="text" name="company_name" id='company_name' placeholder="Company Name" onChange={handleChange} value={data.company_name} />
    </div><br />
    <div className="col-4 px-3 mb-4">
      <label>Enter Company Email :-</label>
      <input className="form-control" type="email" name="email" id='email' placeholder="Email" onChange={handleChange} value={data.email} />
    </div><br />
    <div className="col-4 px-3 mb-4">
      <label>Enter Company Phone :-</label>
      <input className="form-control" type="phone" name="phone" id='phone' onChange={handleChange} placeholder="Phone" value={data.phone} />
    </div><br />
    <div className="col-6 px-3 mb-4">
      <label>Enter Company Address :-</label>
      <input className="form-control" type="address" name="address" id='address' onChange={handleChange} placeholder="Address" value={data.address} />
    </div><br />
    <div className="col-6 px-3 mb-4">
      <label>Enter Company Location :-</label>
      <input className="form-control" type="location" name="location" id='location' onChange={handleChange} placeholder="Location" value={data.location} />
    </div><br />
    <div className="col-12 px-3 mb-4">
      <label>Enter Company Description :-</label>
      <textarea className="form-control" rows="6" name="desc" id='desc' onChange={handleChange} placeholder="Description" value={data.desc}>dsfsd</textarea>
    </div><br />
    <div className="col-6 px-3 mb-4" id="nImg">
      <label>Choose Company Logo :-</label>
      <input className="form-control" type="file" onChange={handlePhoto} accept="image/*" name="photo" id='photo' style={{padding: '13px'}}  />
    </div><br />
    <div className="col-6 mb-4 px-3">
      <label>Choose Pdf :-</label>
      <input className="form-control" type="file" accept=".pdf" name="pdf" id='pdf' onChange={handlePdf} style={{padding: '13px'}}  />
    </div><br />
    <input type="submit" name="submit" value="Edit" className=" text-white btn-primary col-12 py-2" />
  </form>
  </div>
  </>
  )
}

export default Update_company