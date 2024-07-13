import Volunteer from "../components/Volunteer";
import projectsData from "../data/projectsdata";

function Project(){
    return(
        <div className="w-11/12 max-w-[1160px] py-4 mx-auto flex flex-col flex-wrap justify-center place-items-center ">
            <div className="text-6xl mt-20 mb-20">Projects</div>
            <div className="flex flex-wrap justify-center place-items-center">
                {projectsData.map((project) => (
                    <div key={project.id} className="flex w-[65vw] mb-6 place-item-center justify-center">
                        <div>
                        <project.icon size={150} className="mt-6" />
                        </div>
                        <div className="ml-6">
                            <h3 className="text-4xl mb-4">{project.title}</h3>
                            <h4 className="text-2xl mb-5">{project.subTitle}</h4>
                            <p className="text-justify text-[1.1532rem]"> {project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <Volunteer/>
        </div>
    )
}
export default Project;