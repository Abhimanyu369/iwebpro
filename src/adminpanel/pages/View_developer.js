import React from 'react';
import Header from '../../adminpanel/component/Header';
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


      <div className="ml-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mt-3">
              <h2 className="text-title-md2 font-bold text-black"> Developers </h2>
              <Link to="/Add_developer" className="inline-flex items-center justify-center bg-primary py-2 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10 cursor-pointer">Add Developer</Link>
        </div>
        <div className="rounded-sm border border-stroke bg-white px-4 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5">
          <div className="max-w-full overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className='text-dark'>
                  <th className='border-b border-[#eee] pb-3 px-3 dark:border-strokedark'>Full Name</th>
                  <th className='border-b border-[#eee] pb-3 px-3 dark:border-strokedark'>Designation</th>
                  <th className='border-b border-[#eee] pb-3 px-3 dark:border-strokedark'>Expertise</th>
                  <th className='border-b border-[#eee] pb-3 px-3 dark:border-strokedark'>Technology</th>
                  <th className='border-b border-[#eee] pb-3 px-3 dark:border-strokedark'>Framework</th>
                  <th className='border-b border-[#eee] pb-3 px-3 dark:border-strokedark'>Programming Language</th>
                  <th className='border-b border-[#eee] pb-3 px-3 dark:border-strokedark'>Browser</th>
                  <th className='border-b border-[#eee] pb-3 px-3 dark:border-strokedark'>Database</th>
                  <th className='border-b border-[#eee] pb-3 px-3 dark:border-strokedark'>Web Server</th>
                  <th className='border-b border-[#eee] pb-3 px-3 dark:border-strokedark'>Operating System</th>
                  <th className='border-b border-[#eee] pb-3 px-3 dark:border-strokedark'>Email</th>
                  <th className='border-b border-[#eee] pb-3 px-3 dark:border-strokedark'>Rate</th>
                  <th className='border-b border-[#eee] pb-3 px-3 dark:border-strokedark'>Experience</th>
                  <th className='border-b border-[#eee] pb-3 px-3 dark:border-strokedark'>Linkedin</th>
                  <th className='border-b border-[#eee] pb-3 px-3 dark:border-strokedark'>Availability</th>
                  <th className='border-b border-[#eee] pb-3 px-3 dark:border-strokedark'>Action</th>
                </tr>
              </thead>
              <tbody>
                {dev.map((v)=>{
                  return (
                    <tr key={v._id}>
                      <td className='border-b border-[#eee] py-4 px-3 dark:border-strokedark'>{v.full_name}</td>
                      <td className='border-b border-[#eee] py-4 px-3 dark:border-strokedark'>{v.designation}</td>
                      <td className='border-b border-[#eee] py-4 px-3 dark:border-strokedark'>{v.expertise}</td>
                      <td className='border-b border-[#eee] py-4 px-3 dark:border-strokedark'>{v.technology}</td>
                      <td className='border-b border-[#eee] py-4 px-3 dark:border-strokedark'>{v.framework}</td>
                      <td className='border-b border-[#eee] py-4 px-3 dark:border-strokedark'>{v.programming_language}</td>
                      <td className='border-b border-[#eee] py-4 px-3 dark:border-strokedark'>{v.browser}</td>
                      <td className='border-b border-[#eee] py-4 px-3 dark:border-strokedark'>{v.database}</td>
                      <td className='border-b border-[#eee] py-4 px-3 dark:border-strokedark'>{v.web_server}</td>
                      <td className='border-b border-[#eee] py-4 px-3 dark:border-strokedark'>{v.operating_system}</td>
                      <td className='border-b border-[#eee] py-4 px-3 dark:border-strokedark'>{v.email}</td>
                      <td className='border-b border-[#eee] py-4 px-3 dark:border-strokedark'>{v.rate} $/Month</td>
                      <td className='border-b border-[#eee] py-4 px-3 dark:border-strokedark'>{v.experience} years</td>
                      <td className='border-b border-[#eee] py-4 px-3 dark:border-strokedark'><Link to={v.linkedin} target="_blank">Linkedin</Link></td>
                      <td className='border-b border-[#eee] py-4 px-3 dark:border-strokedark'>{v.availability}</td>
                      <td className='border-b border-[#eee] py-4 px-3 dark:border-strokedark'><div className="flex items-center">
                        <Link to={"/Update_developer?id="+v._id}><svg className="feather feather-edit" fill="#fff" height="24" stroke="#0d6efd" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg></Link>
                        <Link className="ps-2" onClick={(e) => {e.preventDefault(); Delete(v._id)}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="30" height="30" fill='#0d6efd'><path d="M 46 13 C 44.35503 13 43 14.35503 43 16 L 43 18 L 32.265625 18 C 30.510922 18 28.879517 18.922811 27.976562 20.427734 L 26.433594 23 L 23 23 C 20.802666 23 19 24.802666 19 27 C 19 29.197334 20.802666 31 23 31 L 24.074219 31 L 27.648438 77.458984 C 27.88773 80.575775 30.504529 83 33.630859 83 L 66.369141 83 C 69.495471 83 72.11227 80.575775 72.351562 77.458984 L 75.925781 31 L 77 31 C 79.197334 31 81 29.197334 81 27 C 81 24.802666 79.197334 23 77 23 L 73.566406 23 L 72.023438 20.427734 C 71.120481 18.922811 69.489078 18 67.734375 18 L 57 18 L 57 16 C 57 14.35503 55.64497 13 54 13 L 46 13 z M 46 15 L 54 15 C 54.56503 15 55 15.43497 55 16 L 55 18 L 45 18 L 45 16 C 45 15.43497 45.43497 15 46 15 z M 32.265625 20 L 43.832031 20 A 1.0001 1.0001 0 0 0 44.158203 20 L 55.832031 20 A 1.0001 1.0001 0 0 0 56.158203 20 L 67.734375 20 C 68.789672 20 69.763595 20.551955 70.306641 21.457031 L 71.833984 24 L 68.5 24 A 0.50005 0.50005 0 1 0 68.5 25 L 73.5 25 L 77 25 C 78.116666 25 79 25.883334 79 27 C 79 28.116666 78.116666 29 77 29 L 23 29 C 21.883334 29 21 28.116666 21 27 C 21 25.883334 21.883334 25 23 25 L 27 25 L 61.5 25 A 0.50005 0.50005 0 1 0 61.5 24 L 28.166016 24 L 29.693359 21.457031 C 30.236405 20.551955 31.210328 20 32.265625 20 z M 64.5 24 A 0.50005 0.50005 0 1 0 64.5 25 L 66.5 25 A 0.50005 0.50005 0 1 0 66.5 24 L 64.5 24 z M 26.078125 31 L 73.921875 31 L 70.357422 77.306641 C 70.196715 79.39985 68.46881 81 66.369141 81 L 33.630859 81 C 31.53119 81 29.803285 79.39985 29.642578 77.306641 L 26.078125 31 z M 38 35 C 36.348906 35 35 36.348906 35 38 L 35 73 C 35 74.651094 36.348906 76 38 76 C 39.651094 76 41 74.651094 41 73 L 41 38 C 41 36.348906 39.651094 35 38 35 z M 50 35 C 48.348906 35 47 36.348906 47 38 L 47 73 C 47 74.651094 48.348906 76 50 76 C 51.651094 76 53 74.651094 53 73 L 53 69.5 A 0.50005 0.50005 0 1 0 52 69.5 L 52 73 C 52 74.110906 51.110906 75 50 75 C 48.889094 75 48 74.110906 48 73 L 48 38 C 48 36.889094 48.889094 36 50 36 C 51.110906 36 52 36.889094 52 38 L 52 63.5 A 0.50005 0.50005 0 1 0 53 63.5 L 53 38 C 53 36.348906 51.651094 35 50 35 z M 62 35 C 60.348906 35 59 36.348906 59 38 L 59 39.5 A 0.50005 0.50005 0 1 0 60 39.5 L 60 38 C 60 36.889094 60.889094 36 62 36 C 63.110906 36 64 36.889094 64 38 L 64 73 C 64 74.110906 63.110906 75 62 75 C 60.889094 75 60 74.110906 60 73 L 60 47.5 A 0.50005 0.50005 0 1 0 59 47.5 L 59 73 C 59 74.651094 60.348906 76 62 76 C 63.651094 76 65 74.651094 65 73 L 65 38 C 65 36.348906 63.651094 35 62 35 z M 38 36 C 39.110906 36 40 36.889094 40 38 L 40 73 C 40 74.110906 39.110906 75 38 75 C 36.889094 75 36 74.110906 36 73 L 36 38 C 36 36.889094 36.889094 36 38 36 z M 59.492188 41.992188 A 0.50005 0.50005 0 0 0 59 42.5 L 59 44.5 A 0.50005 0.50005 0 1 0 60 44.5 L 60 42.5 A 0.50005 0.50005 0 0 0 59.492188 41.992188 z"/></svg></Link>
                      </div></td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </>
  )
}
export default View_developer;
