import { Link } from "react-router-dom";
import "../../index.css"
import "../../responsive.css"

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-area navbar-expand-lg">
        <div className="container nav-container navbar-bg">
            <div className="responsive-mobile-menu">
                <button className="menu toggle-btn d-block d-lg-none" data-target="#itech_main_menu" 
                aria-expanded="false" aria-label="Toggle navigation">
                    <span className="icon-left"></span>
                    <span className="icon-right"></span>
                </button>
            </div>
            <div className="logo ps-4">
                <Link to="/"><h4 className="mb-0">Iwebro</h4></Link>
            </div>
            <div className="nav-right-part nav-right-part-mobile">
                <Link className="search-bar-btn" to="/">
                    <i className="fa fa-search"></i>
                </Link>
            </div>
            <div className="collapse navbar-collapse" id="itech_main_menu">
                <ul className="navbar-nav menu-open text-lg-end">
                    <li className="px-xl-2">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-xl-2">
                        <Link to="/talent-partner">Talent partner</Link>
                    </li>
                    <li className="px-xl-2">
                        <Link to="/active-requirements">Active jobs</Link>
                    </li>
                    <li className="px-xl-2">
                        <Link to="/reviews">Reviews</Link>
                    </li>
                    <li className="px-xl-2">
                        <Link to="/event">Events</Link>
                    </li>
                    <li className="px-xl-2">
                        <Link to="/blog">Blogs</Link>
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