import { useState } from "react";

const BackTop = () => {

    const Top = ()=>{
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }

    const [visible, setVisible] = useState(false)
  
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300){
        setVisible(true);
      } 
      else if (scrolled <= 300){
        setVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisible);
  
  return (
    <>
      <a href="# " className="back-to-top align-items-center justify-content-center" id="backTop" onClick={Top} style={{display: visible ? 'flex' : 'none'}}>
          <span className="back-top text-white"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-chevron-up" viewBox="0 0 16 16"><path fillRule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/></svg></span>
      </a>
    </>
  )
}

export default BackTop; 