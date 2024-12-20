import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { ProjectCardProps } from "../../types/ProjectCard";



export default function ProjectCard({name ,technologies, image, url}: ProjectCardProps){
  const {elementoRef,isIntersecting} = useIntersectionObserver({threshold:0.1})
    
    return(
    <div  ref={elementoRef} className={`shadow-[0_0px_10px_9px_rgba(0,0,0,0.3)] hover:-translate-y-4 duration-500 h-60 ${isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} >
            <a href={url} target="_blank">

            <img src={`/images/projects/${image}.png`} alt={image} className="h-32 w-60" />
            <div className="flex flex-col gap-4 p-3 ">

            <p className="text-gray-300">{name}</p>
            <div className="flex gap-2">

            {technologies.map((e: string)=>(
                <img src={`./images/skillsIcons/${e}.png`} alt={e} className="h-5" />
            ))}

            </div>
           
            </div>
            </a>
            
        </div>
    )
} 