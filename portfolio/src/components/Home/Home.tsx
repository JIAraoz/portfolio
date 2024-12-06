
export default function Home(){
    return(
    <div className="home">
        <div className="grid-left">

        <div className="hi-there-home text-2xl text-white flex ">
        Hi there 👋
        </div>
        
        <p className="text-white">
        I'm passionate about the world of web development, particularly in the PERN stack (PostgreSQL, Express, React, Node.js). I'm always eager to learn new technologies and take on new challenges.
        </p>
        
        </div>
        
        <div className="grid-right">
        <img src="./images/profile.png" alt='profile' className="h-96 border-black " />
        </div>


    </div>
    )
}