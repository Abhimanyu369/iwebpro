import Header from '../components/NewPage/Header';
import Footer from '../components/NewPage/Footer';
import BackTop from '../components/NewPage/BackTop';
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { BACKEND_COMMAN_URL } from "../Api";

const Blog = () => {

  const routePath = useLocation();
  const monthNames = ["Jan", "Feb", "March", "April", "May", "June","July", "Aug", "Sept", "Oct", "Nov", "Dec"];
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

  useEffect(()=>{
    fetchData();
    window.scrollTo(0, 0);
  },[routePath]);

  return (
    <>
      <Header />  
      {blog.length !== 0 ? 
        <>
          <div className="blog-area py-5">
            <div className="container">
                <div className="section-title wow animated fadeInDown">
                    <div className="row text-center justify-content-center">
                        <div className="col-lg-7">
                            <h6 className="sub-title">RECENT BLOGS</h6>
                            <h2 className="title">Lorem Ipsum is very <span>simply dummy </span> text blog</h2>
                        </div>  
                    </div>
                </div>
                <ul className="row ps-0 mb-0">
                  {blog.map((v)=>{
                    return (
                      <li key={v._id} className="col-lg-4 col-md-6 wow animated fadeInUp">
                          <>
                            <div className="single-blog-list">
                                <div className="thumb">
                                    <img className="border-radius-5" src={BACKEND_COMMAN_URL+v.img} alt="img" />
                                    <p className="date">{new Date(v.date).getDate()} {monthNames[new Date(v.date).getMonth()]} {new Date(v.date).getFullYear()}</p>
                                </div>
                                <div className="details">
                                    <ul className="blog-meta p-0">
                                        <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/></svg> By {v.name}</li>
                                        <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-folder2-open" viewBox="0 0 16 16"><path d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v.64c.57.265.94.876.856 1.546l-.64 5.124A2.5 2.5 0 0 1 12.733 15H3.266a2.5 2.5 0 0 1-2.481-2.19l-.64-5.124A1.5 1.5 0 0 1 1 6.14V3.5zM2 6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5a.5.5 0 0 0-.5.5V6zm-.367 1a.5.5 0 0 0-.496.562l.64 5.124A1.5 1.5 0 0 0 3.266 14h9.468a1.5 1.5 0 0 0 1.489-1.314l.64-5.124A.5.5 0 0 0 14.367 7H1.633z"/></svg> {v.cat}</li>
                                    </ul>
                                    <h5 className="mb-4"><span>{v.title}</span></h5>
                                    <span className="btn btn-border-base" href="">Read More <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16"><path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/></svg></span>
                                </div>
                            </div>
                          </>
                      </li>
                    )
                  })}
                </ul>
            </div>
          </div>
        </>
      : <div className='container error-content py-5 d-flex align-items-center justify-content-center'><h2>Please Wait..</h2></div>}
      <Footer />
      <BackTop />
    </>
  )
}
// redux
// next js
// typescript
export default Blog;