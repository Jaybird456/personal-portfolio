import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <div> 
      <Navbar/> 
      <Home/>
      <Experience/>
      <Contact />
      <Footer />
    </div>
  )
}

export default App
