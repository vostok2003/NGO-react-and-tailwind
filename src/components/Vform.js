import { useState } from "react";
import { GoArrowLeft } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

function Vform(){
    const navi=useNavigate();
    const [formdata,setformdata] = useState({
        oname:'',
        ofield:'',
        osize:'',
        interest:'',
        email:'',
        name:'',
        message:''

    })

    function changeHandler(event){
        setformdata((prev)=>{
            return{
                ...prev,
                [event.target.name]:event.target.value
            }
        })
    }
    function clickHandler(){
        navi(-1);
    }
    function submitHandler(event){
      
        
    }
    return(
        <div className="w-8/12 my-16 max-w-[1160px] pt-10 py-4 mx-auto flex flex-col justify-center place-items-center bg-white flex-wrap rounded-2xl">
            <button className="text-[#1495cc]" onClick={clickHandler}>
            <div className="flex place-items-baseline text-lg gap-2 -ml-72"><GoArrowLeft className="mt-2" /> Back
            </div></button>
            <h1 className="text-4xl mb-8"> Volunteer Application</h1>
            <form className="flex flex-col gap-y-6 text-lg flex-wrap"
                onSubmit={submitHandler}
            >
                <div className="flex justify-between text-left gap-x-24 mx-auto flex-wrap"> 
                    <label>
                        <h1>Organization Name</h1>
                        
                        <input
                            type="text"
                            name="oname"
                            onChange={changeHandler}
                            value={formdata.oname}
                            className="bg-[#f7f6f0] p-2 w-[20vw] rounded-lg mt-3"
                        /> 
                    </label>
                    <label>
                        <h1>Organization field</h1>
                        
                        <input
                            type="text"
                            name="ofield"
                            onChange={changeHandler}
                            value={formdata.ofield}
                             className="bg-[#f7f6f0] p-2 w-[20vw] rounded-lg mt-3"

                        />
                    </label>
                </div>
                <div className="flex justify-between gap-x-20 flex-wrap">
                    <label>
                        <h1>Organization Size</h1>
                        
                        <select
                            name="osize"
                            changeHandler={changeHandler}
                            value={formdata.osize}
                             className="bg-[#f7f6f0] w-[20vw] p-2 rounded-lg mt-3"
                        >
                            <option value="solo">Solo</option>
                            <option value="micro">Micro</option>
                            <option value="small">Small</option>
                            <option value="medium">Medium</option>
                            <option value="Large">Large</option>
                        </select>
                    </label>
                    <label>
                        <h1>Initiative of Interest</h1>
                        
                        <select
                            name="interest"
                            onChange={changeHandler}
                            value={formdata.interest}
                             className="bg-[#f7f6f0] p-2  w-[20vw] rounded-lg mt-3"
                        >
                            <option value="My Carbon Zero">My Carbon Zero</option>
                            <option value="Regen 21">Regen 21</option>
                            <option value="Hilary's Kids">Hilary's Kids</option>
                            <option value="Earthtrust">Earthtrust</option>
                        </select>
                    </label>
                </div>
                <div className="flex justify-between gap-x-20 flex-wrap">
                    <label>
                        <h1>Contact Email</h1>
                        
                        <input
                            type="email"
                            name="email"
                            onChange={changeHandler}
                            value={formdata.email}
                             className="bg-[#f7f6f0] w-[20vw] p-2 rounded-lg mt-3"
                        />
                    </label>
                    <label>
                        <h1>Contact Name</h1>
                        
                        <input
                            type="text"
                            name="name"
                            onChange={changeHandler}
                            value={formdata.name}
                             className="bg-[#f7f6f0] w-[20vw] p-2 rounded-lg mt-3"
                        />
                    </label>
                </div>
                <div>
                    <label>
                        <h1>Message</h1>
                        <textarea
                            rows={5}
                            cols={60}
                            name="message"
                            onChange={changeHandler}
                            value={formdata.message}
                             className="bg-[#f7f6f0] p-2 rounded-lg mt-3"
                        ></textarea>
                    </label>
                </div>
                <button type="submit"
                    className="text-white bg-[#1495cc] p-4 rounded-lg w-[48vw] mb-6 mt-4"
                >Request to Volunteer</button>
            </form>
            <ToastContainer/>
        </div>)
}
export default Vform;