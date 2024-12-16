import data from '../../data/data.json'
import ProjectCard from '../ProjectCard/ProjectCard'
export default function Projects(){

    return(
        <div className="pt-20 justify-center justify-items-center">
            <h2 className="text-gray-300 text-4xl">
            PROJECTS 
            </h2>
            <div className='grid grid-cols-2 gap-36 mt-20'>

            {data.projects.map((e)=>(
                <ProjectCard name={e.name} technologies={e.technologies} image={e.image} url={e.url}/>
            ))}
            </div>
        </div>
    )
}