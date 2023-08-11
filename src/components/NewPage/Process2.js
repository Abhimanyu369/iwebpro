import axios from "axios";
import { useEffect, useState } from "react";
import {BACKEND_COMMAN_URL} from "../../Api";

const Process = () => {

    const [process,setProcess] = useState([]);

    const fetchData = async ()=>{
      try {
        let data = await axios.get(BACKEND_COMMAN_URL+'/api/view_benefit');
        if(data.status === 200){
          setProcess(data.data.data);
        }
        else{
          setProcess([]);
        }
      } catch (error) {
        console.log(error);
      }
    }

    useEffect(()=>{
      fetchData();
    },[]);

  return (
    <>
    <div className="work-process-area pd-top-120">
        <div className="container">
            <div className="section-title text-center pb-5 wow animated fadeInUp">
                <h6 className="sub-title">OUR SIMPLE PROCESS</h6>
                <h2 className="title">Why Choose <span>Iwebro?</span></h2>
            </div>
            <div className="work-process-area-inner border-radius-20">
                <div className="row">
                    {process.map((v,i)=>{
                      return (
                        <div className="col-lg-3 col-md-6 wow animated fadeInUp" key={v._id}>
                          <>
                            <div className="single-work-process-inner-2 text-center mb-5">
                                <div className="thumb mb-3">
                                    <img src={BACKEND_COMMAN_URL+v.img} alt="img" />
                                    <p className="process-count">{i+1}</p>
                                </div>
                                <div className="details mb-5">
                                    <h5 className="mb-3" style={{textTransform:'capitalize'}}>{v.title}</h5>
                                    <p className="content">{v.desc}</p>  
                                </div>
                            </div>
                          </>
                        </div>
                      )
                    })}
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Process;