import { ProjectCardProps } from "../../types/ProjectCard";

export default function ProjectCard({name ,technologies, image, url}: ProjectCardProps){
    console.log(image);
    
    return(
        <div className="bg-black">
            <img src={`/images/projects/${image}.png`} alt={image} className="h-32 w-60" />
            <div className="flex flex-col gap-2 p-3 ">

            <p className="text-gray-300">{name}</p>
            <div className="flex gap-2">

            {technologies.map((e: string)=>(
                <img src={`./images/skillsIcons/${e}.png`} alt={e} className="h-5" />
            ))}

            </div>
            <button><a href={url} target="_blank" >Go to Github</a></button> 
            </div>
            
        </div>
    )
}