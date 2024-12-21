import './App.css'
import Home from './components/Home/Home'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Footer from './components/Footer/Footer'
function App() {


  return (
     

     <div className='min-h-screen w-full bg-purpleX'>
      <div className='bg-gradient-to-b from-black via-black/90 to-[#27006F]'>

        <Home></Home>
        <Skills></Skills>
      </div>
    <div className='bg-gradient-to-t from-black via-black/30 to-[#27006F]'>
        <Projects></Projects>
      
        <Footer/>
      </div>

        
     </div>
   

  )
}

export default App
