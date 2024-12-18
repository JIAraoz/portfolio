export default function Social(){
    const url ="./images/social/"
    return(
        <div className="grid grid-cols-2 w-36">
            <a href="https://www.linkedin.com/in/ignacio-araoz-23710b28b/" >
            <img src={url + "linkedin.png"} alt="linkedin" className="hover:-translate-y-1 transition-transform duration-500 h-6" />
            </a>
            <a href="https://github.com/JIAraoz">
            <img src={url + "github.png"} alt="github" className="hover:-translate-y-1 transition-transform duration-500 h-6" />
            </a>
        </div>
    )
} 