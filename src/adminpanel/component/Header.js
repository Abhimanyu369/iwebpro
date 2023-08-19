import React, { useEffect } from 'react';
import "../style-form.css"
import { Link, useNavigate } from 'react-router-dom';

  
  const Header = () => {

  const navigate = useNavigate();

  const data = JSON.parse(sessionStorage.getItem('admin'));

  const Logout = ()=>{
      navigate("/login");
      sessionStorage.clear('admin');
  }

    useEffect(()=>{
      let toggle = document.getElementById('toggle');
      let sidebar = document.getElementById('sidebar');
      if(data === '' || !data){
          navigate("/login");
      }
      toggle.addEventListener('click', ()=>{
        sidebar.classList.add('flex');
        sidebar.classList.remove('sidebar');
      });
  },[]);

    return (
      <>
        <div className='ml-auto max-w-screen-2xl p-3 md:p-6 2xl:p-10 shadow-xl mb-5'>
          <header className="sticky top-0 z-999 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
            <div className="flex flex-grow items-center justify-between px-4 shadow-2 md:px-6 2xl:px-11">
              <div className='flex align-center menus'>
                <button className="z-99999 block rounded-sm border border-stroke me-4 bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark" id='toggle'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path fill="#000000" fillRule="evenodd" d="M18 5a1 1 0 100-2H2a1 1 0 000 2h16zm-4 4a1 1 0 100-2H6a1 1 0 100 2h8zm5 3a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-5 5a1 1 0 100-2H6a1 1 0 100 2h8z"/></svg>
                </button>
                <Link to="/admin">
                  <img src="assets/img/logo/logo.jpg" alt="Logo" width="150px"/>
                </Link>
              </div>
              <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
                <button
                  className="z-99999 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden">
                  <span className="relative block h-5.5 w-5.5 cursor-pointer">
                    <span className="du-block absolute right-0 h-full w-full">
                      <span
                        className="relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white"

                        ></span>
                      <span
                        className="relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white"
                        ></span>
                      <span
                        className="relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white"
                        ></span>
                    </span>
                    <span className="du-block absolute right-0 h-full w-full rotate-45">
                      <span
                        className="absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white"
                        ></span>
                      <span
                        className="delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white"
                        ></span>
                    </span>
                  </span>
                </button>
              </div>
              <div className="hidden sm:block">
                <form action="https://formbold.com/s/unique_form_id" method="POST">
                  <div className="relative">
                    <button className="absolute top-1/2 left-0 -translate-y-1/2">
                      <svg className="fill-body" width="20" height="20"
                        viewBox="0 0 20 20" fill="#000" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                          d="M9.16666 3.33332C5.945 3.33332 3.33332 5.945 3.33332 9.16666C3.33332 12.3883 5.945 15 9.16666 15C12.3883 15 15 12.3883 15 9.16666C15 5.945 12.3883 3.33332 9.16666 3.33332ZM1.66666 9.16666C1.66666 5.02452 5.02452 1.66666 9.16666 1.66666C13.3088 1.66666 16.6667 5.02452 16.6667 9.16666C16.6667 13.3088 13.3088 16.6667 9.16666 16.6667C5.02452 16.6667 1.66666 13.3088 1.66666 9.16666Z"
                          fill="" />
                        <path fillRule="evenodd" clipRule="evenodd"
                          d="M13.2857 13.2857C13.6112 12.9603 14.1388 12.9603 14.4642 13.2857L18.0892 16.9107C18.4147 17.2362 18.4147 17.7638 18.0892 18.0892C17.7638 18.4147 17.2362 18.4147 16.9107 18.0892L13.2857 14.4642C12.9603 14.1388 12.9603 13.6112 13.2857 13.2857Z"
                          fill="" />
                      </svg>
                    </button>
                    <input type="text" placeholder="Type to search..."
                      className="w-full bg-transparent pr-4 pl-9" style={{border: '1px solid #fff'}} />
                  </div>
                </form>
              </div>
              <div className="flex items-center gap-3 2xsm:gap-7">
                <ul className="flex items-center gap-2 2xsm:gap-4">
                <span onClick={Logout} className="inline-flex items-center justify-center bg-primary py-3 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10 cursor-pointer">Log Out</span>
                </ul>
              </div>
            </div>
          </header>
        </div>

        <aside id='sidebar' className="sidebar fixed left-0 top-0 z-10 h-screen flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:translate-x-0" style={{width : '285px'}}>
          <div className="flex items-center justify-between gap-2 px-6 py-3">
            <Link to="/admin">
              <img src="assets/img/logo/logo.jpg" alt="Logo" width="180px"/>
            </Link>
          </div>
          <div className="no-scrollbar flex flex-col duration-300 ease-linear">
            <nav className="py-4 px-4 lg:px-6" x-data="{selected: $persist('Dashboard')}">
              <div>
                <h3 className="mb-3 text-sm font-medium text-white">PAGES</h3>
                <ul className="mb-6 ps-0 flex flex-col gap-1.5">
                  <li>
                    <Link to="/View_dev" className="group relative flex items-center gap-2.5 rounded-sm py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:text-white">
                      <i className="menu-icon tf-icons bx bx-dock-top"></i>
                      <div data-i18n="Account Settings">Developer Details</div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/View_testimonial" className="group relative flex items-center gap-2.5 rounded-sm py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:text-white">
                      <i className="menu-icon tf-icons bx bx-dock-top"></i>
                      <div data-i18n="Account Settings">Testimonials</div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/View_developer" className="group relative flex items-center gap-2.5 rounded-sm py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:text-white">
                      <i className="menu-icon tf-icons bx bx-dock-top"></i>
                      <div data-i18n="Account Settings">Developer</div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/View_company" className="group relative flex items-center gap-2.5 rounded-sm py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:text-white">
                      <i className="menu-icon tf-icons bx bx-dock-top"></i>
                      <div data-i18n="Account Settings">Companys</div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/View_review" className="group relative flex items-center gap-2.5 rounded-sm py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:text-white">
                      <i className="menu-icon tf-icons bx bx-dock-top"></i>
                      <div data-i18n="Account Settings">Reviews</div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/View_benefit" className="group relative flex items-center gap-2.5 rounded-sm py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:text-white">
                      <i className="menu-icon tf-icons bx bx-dock-top"></i>
                      <div data-i18n="Account Settings">Benefits</div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/View_client" className="group relative flex items-center gap-2.5 rounded-sm py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:text-white">
                      <i className="menu-icon tf-icons bx bx-dock-top"></i>
                      <div data-i18n="Account Settings">Clients</div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/View_event" className="group relative flex items-center gap-2.5 rounded-sm py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:text-white">
                      <i className="menu-icon tf-icons bx bx-dock-top"></i>
                      <div data-i18n="Account Settings">Events</div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/View_blog" className="group relative flex items-center gap-2.5 rounded-sm py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:text-white">
                      <i className="menu-icon tf-icons bx bx-dock-top"></i>
                      <div data-i18n="Account Settings">Blogs</div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/View_skill" className="group relative flex items-center gap-2.5 rounded-sm py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:text-white">
                      <i className="menu-icon tf-icons bx bx-dock-top"></i>
                      <div data-i18n="Account Settings">Skills</div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/View_job" className="group relative flex items-center gap-2.5 rounded-sm py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:text-white">
                      <i className="menu-icon tf-icons bx bx-dock-top"></i>
                      <div data-i18n="Account Settings">Jobs</div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/View_hire" className="group relative flex items-center gap-2.5 rounded-sm py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:text-white">
                      <i className="menu-icon tf-icons bx bx-dock-top"></i>
                      <div data-i18n="Account Settings">Hire</div>
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </aside>
      </>
    )
  }
  
  export default Header;