import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {

    const data = JSON.parse(localStorage.getItem('talent'));
    const navigate = useNavigate();

    const Logout = ()=>{
        navigate("/talent");
        localStorage.clear('talent');
    }

    useEffect(()=>{
        if(data === '' || !data){
            navigate("/talent");
        }
        // else{
        //     navigate("/talent_dashboard");
        // }
    },[]);

    return (
        <div>
            <div className="topbar bg-white shadow-none position-absolute" style={{zIndex: 1}}>
                <div className="page_title px-5 d-flex justify-content-between align-items-center">
                    <h2 className="ps-3 mb-0"><a href="dashboard">Talent Dashboard</a></h2>
                    <span onClick={Logout} className="btn btn-primary text-white me-4">Log Out</span>
                </div>
            </div>


            <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme vh-100 position-fixed" style={{zIndex: 2}}>
                <div className="app-brand demo">
                    <a href="/talent/dashboard" className="app-brand-link">
                        <span className="app-brand-text demo menu-text fw-bolder fs-2 mb-2 py-3">Iwebro</span>
                    </a>
                </div>

                <ul className="menu-inner py-1">
                    <li className="menu-item active">
                        <a href="/talent/dashboard" className="menu-link">
                            <i className="menu-icon tf-icons bx bx-home-circle"></i>
                            <div data-i18n="Analytics">Talent Dashboard</div>
                        </a>
                    </li>
                    <li className="menu-header small text-uppercase">
                        <span className="menu-header-text">Pages</span>
                    </li>
                    <li className="menu-item">
                        <a href="/talent_view_developer" className="menu-link menu-toggle">
                            <i className="menu-icon tf-icons bx bx-dock-top"></i>
                            <div data-i18n="Account Settings">Developers</div>
                        </a>
                    </li>
                </ul>
            </aside>

        </div>
    );
};

export default Header;