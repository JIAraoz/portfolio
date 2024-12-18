import Social from "../Social/Social"
export default function Home(){
    return(
    <div className="home p-24">
        <div className="grid grid-cols-2 justify-around">

        <div className="grid-left justify-items-center">
 
        <div className="hi-there-home  text-gray-300 flex mb-3 text-4xl">
        I'm<span className="text-purpleX pl-2"> Ignacio</span>
        </div>
        
        <p className="text-gray-300">
         A passionate about the world of web development, particularly in the PERN stack (PostgreSQL, Express, React, Node.js). I'm always eager to learn new technologies and take on new challenges.
        </p>
        <div className="justify-items-center pt-6">
        <Social/>

        </div>
        </div>
        
        <div className="grid-right justify-items-center">
        <img src="./images/profile.png" alt='profile' className="h-48 rounded-full shadow-[0_0px_10px_5px_rgba(127,17,224,0.3)] animate-breathing" />
        </div>
        
        </div>

    </div>
    )
}