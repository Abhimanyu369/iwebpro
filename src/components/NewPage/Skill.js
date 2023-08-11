import axios from "axios";
import { useEffect, useState } from "react";
import {BACKEND_COMMAN_URL} from "../../Api";

const Skill = () => {

    const [skill,setSkill] = useState([]);

    const fetchData = async ()=>{
      try {
        let data = await axios.get(BACKEND_COMMAN_URL+'/api/view_skill');
        if(data.status === 200){
          setSkill(data.data.data);
        }
        else{
          setSkill([]);
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
    <div className="work-skill-area pd-top-120">
        <div className="container">
            <div className="section-title text-center pb-5 wow animated fadeInUp">
                <h6 className="sub-title">SKILLS</h6>
                <h2 className="title">Lorem Epsum Your Best <span>Skills</span></h2>
            </div>
            <div className="work-skill-area-inner border-radius-20">
                <ul className="row ps-0 mb-0">
                    {skill.map((v)=>{
                      return (
                        <li className="col-lg-3 col-md-6 wow animated fadeInUp" key={v._id}>
                          <>
                              <div className="single-skill-inner-2 text-center mb-5">
                                  <div className="thumb mb-4">
                                      <img src={BACKEND_COMMAN_URL+v.img} alt="img" width="150px" />
                                  </div>
                                  <div className="details">
                                      <h5 className="mb-0" style={{textTransform:'capitalize',letterSpacing:'2px'}}>{v.skill_name}</h5>
                                  </div>
                              </div>
                          </>
                        </li>
                      )
                    })}
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Skill;