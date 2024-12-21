import Social from "../Social/Social"
export default function Footer(){
    return(
        <div className="flex  items-center h-60 justify-around">
            <Social/>
            <div className="flex gap-2">
            <img src="./images/copyright.png" alt="copyright" className="max-h-6"/>
            <p>2024 Ignacio Araoz</p>

            </div>
        </div>
    )
} 