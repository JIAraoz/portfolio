export default function Social(){
    const url ="./images/social/"
    return(
        <div className="grid grid-cols-4 w-36">
            <a href="https://www.linkedin.com/in/ignacio-araoz-23710b28b/"  target="_blank" >
            <img src={url + "linkedin.png"} alt="linkedin" className="hover:-translate-y-1 transition-transform duration-500 h-6" />
            </a>
            <a href="https://github.com/JIAraoz" target="_blank">
            <img src={url + "github.png"} alt="github" className="hover:-translate-y-1 transition-transform duration-500 h-6" />
            </a>
            <a href="mailto:ignacioaraoz18@gmail.com" > 
            <img src={url + "gmail.png"} alt="gmail" className="hover:-translate-y-1 transition-transform duration-500 h-6"  />
            </a>
            <a href="./cv.pdf" download="cv.pdf">
                <img src={url + "cv.png"} alt="donwload resume"  className="hover:-translate-y-1 transition-transform duration-500 h-6"/>
            </a>
        </div>
    )
} 