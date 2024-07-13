import { Link } from "react-router-dom";
import { FaLinkedin,FaInstagram,FaYoutube } from "react-icons/fa";

function Footer(){
    return(
        <div className="flex flex-wrap justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto border-t-2">
            <Link to='/'>
                <img src="https://cdn.prod.website-files.com/63e1350ab447818409526026/63e1350ab44781f512526066_site-logo-full.svg"
                    alt="logo"  width={160} height={32} loading="lazy"/>
            </Link>
            <nav >
                <ul className="flex flex-wrap gap-x-6">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/aboutus">About us</Link>
                    </li>
                    <li>
                        <Link to="/project">Project</Link>
                    </li>
                    <li>
                        <Link to="/events">Events</Link>
                    </li>
                    <li>
                        <Link to="/Blog">Blog</Link>
                    </li>
                    <li>
                        <Link to="/contactus">Contact us</Link>
                    </li>
                    <li>
                        <Link to="/getinvolved">Get Involved</Link>
                    </li>
                </ul>
            </nav>
            <div className="flex gap-x-6" >
                <Link to="https://ch.linkedin.com/company/pondfoundation">
                    <button><FaLinkedin fontSize={35}/></button>
                </Link>
                <Link to="https://www.instagram.com/thepondfoundation/">
                    <button><FaInstagram fontSize={35}/></button>
                </Link>
                <Link to="https://www.youtube.com/@thepondfoundation6801">
                    <button><FaYoutube fontSize={35} /></button>
                </Link>
            </div>
        </div>)
}
export default Footer;