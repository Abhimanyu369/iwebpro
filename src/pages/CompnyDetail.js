import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from '../components/NewPage/Footer';
import Header from '../components/NewPage/Header';
import BackTop from '../components/NewPage/BackTop';
import { Link, useLocation } from 'react-router-dom';
import Pdf from '../iWebro_NDA.pdf';
import {BACKEND_COMMAN_URL} from "../Api";

const CompnyDetail = () => {

  const routePath = useLocation();
    const [suc,setsuc] = useState('');
    const [err,seterr] = useState('');
    const [file, setFile] = useState();
    const [newUser, setNewUser] = useState(
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

    const handleSubmit = (e) => {
    let regex = new RegExp("[a-z0-9]+@[a-z]+\.[a-z]{2,3}");
      if(!newUser.company_name || newUser.company_name === ''){
        e.preventDefault(); 
        seterr("Company Name Required.");
        setsuc('');
        document.getElementById('company_name').focus();
        return false;
      }
      else if(!newUser.email || newUser.email === ''){
        e.preventDefault(); 
        seterr("Email Required.");
        setsuc('');
        document.getElementById('email').focus();
        return false;
      }
      if(!regex.test(newUser.email)){
        e.preventDefault();
        seterr("Invalid Email.");
        setsuc('');
        document.getElementById('email').focus();
        return false;
      }
      else if(!newUser.phone || newUser.phone === ''){
        e.preventDefault(); 
        seterr("Phone No. Required.");
        setsuc('');
        document.getElementById('phone').focus();
        return false;
      }
      if(newUser.phone.length !== 10){
        e.preventDefault();
        seterr("10 Character Required In Phone No.");
        setsuc('');
        document.getElementById('phone').focus();
        return false;
      }
      else if(!newUser.desc || newUser.desc === ''){
        e.preventDefault(); 
        seterr("Description Required.");
        setsuc('');
        document.getElementById('desc').focus();
        return false;
      }
      else if(!newUser.address || newUser.address === ''){
        e.preventDefault(); 
        seterr("Address Required.");
        setsuc('');
        document.getElementById('address').focus();
        return false;
      }
      else if(!newUser.location || newUser.location === ''){
        e.preventDefault(); 
        seterr("Location Required.");
        setsuc('');
        document.getElementById('location').focus();
        return false;
      }
      else if(!newUser.pdf || newUser.pdf === ''){
        e.preventDefault(); 
        seterr("Pdf Required.");
        setsuc('');
        document.getElementById('pdf').focus();
        return false;
      }
      else if(!newUser.photo || newUser.photo === ''){
        e.preventDefault(); 
        seterr("Company Logo Required.");
        setsuc('');
        document.getElementById('photo').focus();
        return false;
      }
      else{
        var a = [];
        a[0] = newUser.photo;
        a[1] = newUser.pdf;
        newUser.desc= newUser.desc.replace(/\s+/g, ' ').trim();
        newUser.location= newUser.location.replace(/\s+/g, ' ').trim();
        newUser.address= newUser.address.replace(/\s+/g, ' ').trim();
        e.preventDefault();
        const formData = new FormData();
        formData.append('photo', newUser.photo);
        formData.append('email', newUser.email);
        formData.append('phone', newUser.phone);
        formData.append('pdf', newUser.pdf);
        formData.append('company_name', newUser.company_name);
        formData.append('address', newUser.address);
        formData.append('location', newUser.location);
        formData.append('desc', newUser.desc);
        console.log(formData);
        axios.post(BACKEND_COMMAN_URL+'/api/add_company/', formData)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        });
        setNewUser({
          company_name : '',
          email : '',
          phone : '',
          address : '',
          location : '',
          desc : '',
          photo :'',
          pdf: '',
        });
        document.getElementById('pdf').value = '';
        document.getElementById('photo').value = '';
        document.getElementById('UploadedImage').classList.remove('d-block');
        seterr('');
        setFile('');
        setsuc("Form Submitted.");
      }
    }

    const handleChange = (e) => {
        setNewUser({...newUser, [e.target.name]: e.target.value});
    }

    const handlePhoto = (e) => {
      if(e.target.files){
        document.getElementById('UploadedImage').classList.add('d-block');
      }
      setFile(URL.createObjectURL(e.target.files[0]));
      setNewUser({...newUser, photo: e.target.files[0]});
    }
    const handlePdf = (e) => {
      setNewUser({...newUser, pdf: e.target.files[0]});
    };

    useEffect(()=>{
      window.scrollTo(0, 0);
    },[routePath]);

    return (
      <>
      <Header />
        <div className='company-detail py-5'>
          <div className='container'>
            <div className="row align-items-center justify-content-center h-100">
              <div className="col-xl-4 col-lg-5 d-none d-lg-block">
                <img src="/assets/img/bg/4.png" alt="img" className="wow animated fadeInLeft"/>
              </div>
              <div className="col-xl-8 col-lg-7">
                <div className="section-title mb-4">
                  <h2 className="wow animated fadeInUp mb-5">01 Company Details</h2>
                </div>
                {err ? <p className='error'>{err}</p> : ''}
                {suc ? <p className='success'>{suc}</p> : ''}
                <form onSubmit={handleSubmit} className='row form' encType='multipart/form-data'>
                  <div className="col-xl-4 wow animated fadeInRight">
                    <div className="d-flex align-items-center flex-column position-relative">
                      <input type="file"  name="photo" id='photo' className="img form-control mb-4" onChange={handlePhoto}/>                
                      <img src={file} alt="img" id="UploadedImage" accept="image/png, image/jpeg" />
                      <label className="text-dark">Company Profile</label>
                    </div>
                  </div>
                    <div className="col-xl-8 wow animated fadeInRight single-input-inner style-border">
                      <label className="text-dark">Company Name</label>
                      <input onChange={handleChange} type="text" name="company_name" id='company_name' className="mb-4 form-control" value={newUser.company_name} placeholder="Enter Your Company Name"/>
                      <label className="text-dark">Company Primary Email</label>
                      <input onChange={handleChange} type="text" name="email" id='email' className="mb-4 form-control" value={newUser.email} placeholder="Enter Your Company Email"/>
                      <label className="text-dark">Company Primary Phone Number</label>
                      <input onChange={handleChange} type="number" name="phone" id='phone' className="mb-4 form-control" value={newUser.phone} placeholder="Enter Your Company Phone Number"/>
                      <label className="text-dark">Company Description</label>
                      <textarea onChange={handleChange} className="form-control mb-4" name="desc" id='desc' rows='6' value={newUser.desc} placeholder="About Your Company"></textarea>
                      <label className="text-dark">Company Address</label>
                      <input onChange={handleChange} type="text" name="address" id='address' className="mb-4 form-control" value={newUser.address} placeholder="Enter Your Company Address"/>
                      <label className="text-dark">Company Location</label>
                      <input onChange={handleChange} type="text" name="location" id='location' className="mb-4 form-control" value={newUser.location} placeholder="Enter Your Company Location"/>
                      <Link to={Pdf} download="iWebro_NDA" target="_blank" className="mb-4 btn btn-base page-scroll wow animated fadeInUp d-block col-6 br-5">Download NDA Pdf</Link>  
                      <label className="text-dark">Upload NDA Pdf</label>
                      <input type="file" accept=".pdf" name='pdf' id='pdf' className="form-control mb-4 pad" onChange={handlePdf} /> 
                      <button type="submit" className="btn btn-base page-scroll px-sm-5 wow animated fadeInUp w-100 br-5">Submit</button> 
                    </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      <Footer />
      <BackTop />
      </>
    );
}

export default CompnyDetail;