import { Link } from "react-router-dom";

function Volunteer(){
    return(
        <div className="w-11/12 max-w-[1160px] py-4 mx-auto flex flex-col flex-wrap justify-center place-items-center bg-[#1495cc] 
         rounded-3xl gap-y-6 mb-20 mt-16">
            <div className="flex flex-col flex-wrap justify-center place-items-center text-white gap-y-6">
                <h1 className="text-6xl mt-16 mb-4">Become a volunteer</h1>
                <p className="text-2xl mb-4 mx-4 text-justify">And join the businesses taking the world’s most credible regenerative action</p>
            </div>
            <div className="bg-white rounded-xl text-[#1495cc] p-3 mb-16 ">
                <Link to="/vform">
                    <button>Get Involved</button>
                </Link>
            </div>
            
        </div>)
}
export default Volunteer;
