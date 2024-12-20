import { useEffect, useRef, useState } from "react";
import { IntersectionObserverOptions, UseIntersectionObserverReturn } from "../types/useIntersectionObserver.d";
export default function(options: IntersectionObserverOptions) : UseIntersectionObserverReturn {
    const [isIntersecting,setIsIntersecting]=useState(false)
    const elementoRef = useRef<HTMLDivElement | null>(null);
     useEffect(()=>{
        const elemento = elementoRef.current;

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry=>setIsIntersecting(entry.isIntersecting))
        },options);
        if(elemento){
            observer.observe(elemento)
        }
        return ()=> {
            if(elemento){
                observer.unobserve(elemento)
            }
        }
     },[options])
     return {elementoRef, isIntersecting}
}