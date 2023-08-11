import { Link } from "react-router-dom";

const Project = () => {

  return (
    <>
    <div className="project py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-7 section-title project-content wow animated fadeInLeft" data-wow-delay='0.3s' >
            <h6 className="sub-title">GET IN TOUCH</h6>
            <h2 className="mb-4 display-lg-5 display-6" style={{fontWeight:'900'}}>Ipusm long Lorem fact that <span  className="text-primary" style={{fontSize:'40px',fontWeight:'900'}}>reader dummy be </span>fact that</h2>
            <p className="lead mb-4">"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."</p>
            <Link to='/company' className="btn btn-border-base px-sm-5 me-4 mt-0" style={{borderRadius: '5px'}}>Become Talent Partner</Link>
          </div>
          <div className="col-md-5 wow animated fadeInRight" data-wow-delay='0.3s' >
            <img src='/assets/img/banner/1.png' alt='img' className="img-fluid mb-md-0 mb-5"/>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Project;