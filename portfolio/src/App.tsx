import './App.css'
import Home from './components/Home/Home'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
function App() {


  return (
     

     <div className='min-h-screen w-full bg-purpleX'>
      <div className='bg-gradient-to-b from-black via-black/90 to-[#27006F]'>

        <Home></Home>
        <Skills></Skills>
      </div>
  
        <Projects></Projects>

        
     </div>
   

  )
}

export default App
