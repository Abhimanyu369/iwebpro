import { Link } from "react-router-dom";
import "../../index.css";
import "../../responsive.css";
import { useEffect } from "react";

const Header = () => {

    const url = window.location.href.slice(22);

    const toggleMenu = ()=>{
        document.getElementById('itech_main_menu').classList.toggle('d-block');
        // document.getElementById('toggle').innerHTML = '<img src="/assets/img/icon/24.svg" alt="img" width="20px" />';
    }

    useEffect(()=>{
        let nav = document.querySelectorAll('#nav');
        nav.forEach((e)=>{
            e.addEventListener('click',()=>{
                let name = e.getAttribute('data-name');
                if(name === url){
                    console.log('df');
                    e.classList.add('activate');
                }
            });
        });
    },[]);

  return (
    <>
      <nav className="navbar navbar-area navbar-expand-lg">
        <div className="container nav-container navbar-bg">
            <div className="responsive-mobile-menu">
                <button className="menu toggle-btn d-block d-lg-none" id="toggle" onClick={toggleMenu} data-target="#itech_main_menu" 
                aria-expanded="false" aria-label="Toggle navigation">
                    <span className="icon-left"></span>
                    <span className="icon-right"></span>
                </button>
            </div>
            <div className="logo ps-4">
                <Link to="/">
                    <img src="assets/img/logo/logo.jpg" alt="img"/>
                </Link>
            </div>
            <div className="nav-right-part nav-right-part-mobile">
                <Link className="search-bar-btn" to="/">
                    <i className="fa fa-search"></i>
                </Link>
            </div>
            <div className="collapse navbar-collapse" id="itech_main_menu">
                <ul className="navbar-nav menu-open text-lg-end">
                    <li className="px-xl-2">
                        <Link id="nav" to="/" data-name="">Home</Link>
                    </li>
                    <li className="px-xl-2">
                        <Link id="nav" to="/talent-partner" data-name="talent-partner">Talent partner</Link>
                    </li>
                    <li className="px-xl-2">
                        <Link id="nav" to="/active-requirements" data-name="active-requirements">Active jobs</Link>
                    </li>
                    <li className="px-xl-2">
                        <Link id="nav" to="/reviews" data-name="reviews">Reviews</Link>
                    </li>
                    <li className="px-xl-2">
                        <Link id="nav" to="/event" data-name="event">Events</Link>
                    </li>
                    <li className="px-xl-2">
                        <Link id="nav" to="/blog" data-name="blog">Blogs</Link>
                    </li>
                    <li className="px-xl-2 btn-base">
                        <Link to="/start-hire" style={{color: '#fff'}} className="px-3">Start Hiring</Link>
                    </li>
                </ul>
            </div>
            
        </div>
      </nav>
    </>
  )
}

export default Header;