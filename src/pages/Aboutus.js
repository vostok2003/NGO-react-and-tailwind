import '@fortawesome/fontawesome-free/css/all.min.css';
import valuesData from '../data/data';
import Valuecard from '../components/Valuecard';
import teamData from '../data/teamdata';
import Volunteer from '../components/Volunteer';

function Aboutus(){
    return(
        <div className="w-11/12 max-w-[1160px] py-4 mt-20 mx-auto flex flex-col place-items-center justify-center flex-wrap">
            <div>
                <h2 className="text-6xl">Uniquely regenrative</h2>
                <h2 className="text-2xl text-center mt-3 mb-14">For people and planet</h2>
            </div>
            <div className="flex gap-x-7 mx-4 text-[1.2rem] ">
                <div>
                We stand on the shoulders of the responsible action hundreds of pioneering organizations have taken to date. We inspire change across organizations of all scales and show that SMEs can be as bold and brave as the world’s largest organizations regarding responsible action for people and planet.
                </div>
                <div>
                Pond Foundation is built on the work of our founder and CEO—Scott Poynton— over the past three decades, pioneering responsible sourcing and inspiring regenerative actions in a diversity of countries, contexts, and supply chains. Our aim is to inspire regenerative action in all corners of the globe.
                </div>
            </div>
            <div className='flex flex-col flex-wrap justify-center place-items-center mb-9 border-b-2'>
                <h1 className='py-4 mt-20 mb-5 mx-auto text-6xl'>What sets us apart?</h1>
                <div className='px-4 mt-5 flex flex-wrap justify-center gap-4 mb-20'>
                    {valuesData.map((value)=>(<Valuecard key={value.id} value={value}/>))}
                </div>
            </div>
            <div className='flex flex-col flex-wrap gap-y-6 justify-center place-items-center'>
                <div>
                    <h1 className='text-6xl py-4 mt-16 mb-5'>Meet our Team</h1>
                </div>
                <div className='flex  flex-wrap justify-center place-items-center gap-8 '>
                    {teamData.map((member) => (
                        <div key={member.id} className="p-3 w-[350px]  overflow-hidden bg-opacity-80 flex flex-col gap-6">
                            <img src={member.src} alt={member.name} height={250} width={250}
                            className='border-2 rounded-full mb-2' />
                            <div className='mt-4 mb-4'>
                                <h3 className='text-2xl '>{member.name}</h3>
                                <p className='text-justify'>{member.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Volunteer/>
            
        </div>)
}
export default Aboutus;