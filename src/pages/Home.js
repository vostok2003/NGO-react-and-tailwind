import Volunteer from "../components/Volunteer";
import advisoryData from "../data/servicedata";

function Home(){
    return(<div>
        <div className="pb-14 border-b-2 w-11/12 flex flex-col flex-wrap  justify-between place-items-center max-w-[1160px] py-4 mx-auto">
            <h1 className=" mt-32 flex flex-col gap-y-3 flex-wrap justify-center place-items-center text-6xl px-14 text-justify mx-10">
            <div>Inspiring strong regenerative action</div>
            <div>for people and planet.</div> 
            </h1>
            <img src="https://cdn.prod.website-files.com/63e1350ab447818409526026/63e61aece565b8368404c767_foliage-home-p-800.webp"
                height={300} width={300} 
                className="mt-8 mb-4"
            />
        </div>
        <div className="w-11/12 max-w-[1160px] py-4 mx-auto flex flex-col justify-center place-items-center">
            <div className="text-4xl mt-16 flex flex-col place-items-center gap-y-2 flex-wrap mb-4">
                <div>Do you own, manage, or work for an </div>
                <div>organization?</div>
            </div>
            <div className="text-lg mt-5 flex flex-col place-items-center  flex-wrap mb-8">
                <div>Searching for guidance on climate action, sustainability, regenerative </div>
                <div>supply chains, or credible verification? Become a member of Pond </div>
                <div>Foundation, and we will support you with:</div>
            </div>
            <div className="flex flex-wrap gap-10 mx-14">
                    {advisoryData.map((advisory) => (
                        <div key={advisory.id} className="flex  w-[25vw] place-items-center text-lg p-5 border rounded-md shadow-md ">
                            <div className="text-6xl mb-4">{advisory.icon}</div>
                            <h2 className="text-lg py-5 ml-4 mb-2">{advisory.title}</h2>
                        </div>
                    ))}
                </div>
        </div>
        <Volunteer/>
    </div>)
}
export default Home;