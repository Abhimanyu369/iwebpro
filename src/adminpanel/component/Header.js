import React, { useEffect } from 'react';
import "../style-form.css"
import "../theme-default.css"
import { useNavigate } from 'react-router-dom';

  
  const Header = () => {

  const navigate = useNavigate();

  const data = JSON.parse(localStorage.getItem('admin'));

  const Logout = ()=>{
      navigate("/login");
      localStorage.clear('admin');
  }

    useEffect(()=>{
      if(data === '' || !data){
          navigate("/login");
      }
      // else{
      //     navigate("/admin");
      // }
  },[]);

    return (
      <>
        <div className="topbar bg-white shadow-none position-absolute" style={{zIndex: 1}}>
      <div className="page_title px-5 d-flex justify-content-between align-items-center">
         <h2 className="ps-3 mb-0"><a href="/admin" className="text-dark">Dashboard</a></h2>
         <span className="btn-primary text-white px-3 py-2 me-4" onClick={Logout} style={{cursor : 'pointer'}}>Log Out</span>
      </div>
   </div>


   <aside id="layout-menu" className="shadow-lg layout-menu menu-vertical menu bg-menu-theme vh-100 position-fixed" style={{zIndex: 2}}>
      <div className="app-brand demo">
        <a href="/dashboard" className="app-brand-link">
          <span className="app-brand-text demo menu-text fw-bolder fs-2 mb-2 py-3">Iwebro</span>
        </a>
    
      </div>
    
      <div className="menu-inner-shadow"></div>
      <ul className="menu-inner py-1">
        <li className="menu-item active">
          <a href="/admin" className="menu-link">
            <i className="menu-icon tf-icons bx bx-home-circle"></i>
            <div data-i18n="Analytics">Dashboard</div>
          </a>
        </li>
        <li className="menu-header small text-uppercase">
          <span className="menu-header-text">Pages</span>
        </li>
        <li className="menu-item">
          <a href="/View_dev" className="menu-link menu-toggle">
            <i className="menu-icon tf-icons bx bx-dock-top"></i>
            <div data-i18n="Account Settings">Developer Details</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="/View_testimonial" className="menu-link menu-toggle">
            <i className="menu-icon tf-icons bx bx-dock-top"></i>
            <div data-i18n="Account Settings">Testimonials</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="/View_developer" className="menu-link menu-toggle">
            <i className="menu-icon tf-icons bx bx-dock-top"></i>
            <div data-i18n="Account Settings">Developer</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="/View_company" className="menu-link menu-toggle">
            <i className="menu-icon tf-icons bx bx-dock-top"></i>
            <div data-i18n="Account Settings">Companys</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="/View_review" className="menu-link menu-toggle">
            <i className="menu-icon tf-icons bx bx-dock-top"></i>
            <div data-i18n="Account Settings">Reviews</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="/View_benefit" className="menu-link menu-toggle">
            <i className="menu-icon tf-icons bx bx-dock-top"></i>
            <div data-i18n="Account Settings">Benefits</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="/View_client" className="menu-link menu-toggle">
            <i className="menu-icon tf-icons bx bx-dock-top"></i>
            <div data-i18n="Account Settings">Clients</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="/View_event" className="menu-link menu-toggle">
            <i className="menu-icon tf-icons bx bx-dock-top"></i>
            <div data-i18n="Account Settings">Events</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="/View_blog" className="menu-link menu-toggle">
            <i className="menu-icon tf-icons bx bx-dock-top"></i>
            <div data-i18n="Account Settings">Blogs</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="/View_skill" className="menu-link menu-toggle">
            <i className="menu-icon tf-icons bx bx-dock-top"></i>
            <div data-i18n="Account Settings">Skills</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="/View_job" className="menu-link menu-toggle">
            <i className="menu-icon tf-icons bx bx-dock-top"></i>
            <div data-i18n="Account Settings">Jobs</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="/View_hire" className="menu-link menu-toggle">
            <i className="menu-icon tf-icons bx bx-dock-top"></i>
            <div data-i18n="Account Settings">Hire</div>
          </a>
        </li>
      </ul>
    </aside>
      </>
    )
  }
  
  export default Header;