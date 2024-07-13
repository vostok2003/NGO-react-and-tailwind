import { useState } from "react";
import initiativesData from "../data/initiativedata";
import processFlowsData from "../data/processflowdata";
import { AiOutlinePlus,AiOutlineMinus } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Vform from "../components/Vform";

function Getinvolved(){
    const [process,setprocess]=useState(false);
    const navi = useNavigate();

    function processHandler(){
        setprocess(prev =>!prev);
    }
    function vformHandler(){
        navi('/vform');
    }
    return(
        <div className="w-11/12 max-w-[1160px] py-4 mx-auto flex flex-col">
            <div className="flex flex-col flex-wrap justify-center place-items-center">
                <h1 className="text-6xl mt-20 mb-5">Volunteer</h1>
                <div className="text-2xl mb-40">Join the businesses taking the world’s most credible regenerative action.
                </div>
            </div>
            <div className="mt-6 pb-20 border-b-2" >
                <h1 className="text-4xl text-center ">What we can do together?</h1>
                <div className="flex flex-wrap gap-y-10">
                    {initiativesData.map((initiative) => (
                        <div key={initiative.id} className="flex flex-col w-[45vw] place-items-center text-lg ">
                            <img src={initiative.src} alt={initiative.description}
                                height={300} width={300} className="" />
                            <p>{initiative.description}</p>
                            <ul >
                                {initiative.subBulletPoints.map((point, index) => (
                                    <li key={index}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col flex-wrap place-items-center justify-center">
                <h1 className="text-4xl mt-32 mb-16">See how our process flows when you become a member</h1>
                <div className="flex flex-col w-10/12 bg-slate-50 p-6">
                    {processFlowsData.map((flow) => (
                        <div key={flow.id} className="flex flex-col  gap-y-5 ">
                            <div className="flex text-2xl justify-between  ">
                                <h2 className="">{flow.title}</h2>
                                <div>
                                    <button onClick={processHandler}>
                                        {
                                            process?
                                            ( <AiOutlineMinus />):
                                            (<AiOutlinePlus />)
                                        }
                                    </button>
                                </div>
                            </div>
                            <div>
                                {process && (
                                        <div className="text-lg p-6 -mt-4">
                                            <ol>
                                                {flow.processPoints.map((point, index) => (
                                                    <li type="1" className="pl-4" key={index}>{point}</li>
                                                ))}
                                            </ol>

                                            <button onClick={vformHandler}
                                                className="bg-[#1495cc] text-white m-4 p-4 rounded-2xl"
                                            >Apply For {flow.title}
                                            </button>
                                        </div>
                                        
                                    )
                                }
                            </div>

                        </div>
                    ))}
                </div>
            </div>
            <Vform/>
        </div>
    )
}
export default Getinvolved;
