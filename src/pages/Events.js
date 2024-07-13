import Volunteer from "../components/Volunteer";
import eventsData from "../data/eventsdata";

function Events(){
    return(
        <div className="w-11/12 max-w-[1160px] py-4 mx-auto flex flex-col flex-wrap place-items-center justify-center ">
            <div className="text-6xl mt-20 mb-20">Events</div>
            <div className="flex flex-col place-items-center justify-center gap-y-10 ">
                {eventsData.map((event) => (
                     <div key={event.id} className="flex flex-col justify-center  w-[50vw]">
                        <img src={event.src} alt={event.title}  height={600} width={700}
                            className=""
                        />
                        <h3 className="text-3xl text-left mt-4">{event.title}</h3>
                        <h4 className="text-lg mt-3 pb-3 mb-2 border-b-2">{event.subTitle}</h4>
                        <div className="flex justify-around">
                            <p>{event.date}</p>
                            <a href={event.viewEventLink} className="view-event-button">
                                View Event 
                            </a>
                        </div>
                    </div>

                ))}
            </div>
            <Volunteer/>
        </div>
    )
}
export default Events;