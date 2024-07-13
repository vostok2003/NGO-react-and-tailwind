import { Link } from "react-router-dom";

function Navbar(){
    return(
        <div className="w-11/12 flex flex-wrap justify-between items-center max-w-[1160px] py-4 mx-auto border-b-2">
            <Link to='/'>
                <img src="https://cdn.prod.website-files.com/63e1350ab447818409526026/63e1350ab44781f512526066_site-logo-full.svg"
                    alt="logo"  width={160} height={32} loading="lazy"/>
            </Link>
            <nav >
                <ul className="flex flex-wrap gap-x-6 ">
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
            <div>
                <Link to="/vform">
                    <button 
                     className="bg-[#1495cc] text-white  p-3 rounded-2xl"
                    >Volunteer</button>
                </Link>
            </div>
        </div>)
}
export default Navbar;