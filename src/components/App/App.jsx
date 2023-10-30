import './App.css'
import Welcome from '../Welcome/Welcome'
import Description from '../Description/Description'
import MotionDiv from '../MotionDiv/MotionDiv'
import MyProjects from '../MyProjects/MyProjects'
import Skills from '../Skills/Skills'
import Opinion from '../Opinion/Opinion'
import Contact from '../Contact/Contact'
import NavBar from '../NavBar/NavBar'
import ScrollToAnchor from '../ScrollToAnchor/ScrollToAnchor'

function App() {


  return (
    <div className='App'>
      <ScrollToAnchor />
      <NavBar />
      <MotionDiv content={<Welcome />} className="Welcome" />
      <MotionDiv content={<Description />} className="Description" title="Qui suis-je ?" id="Who" />
      <MotionDiv content={<MyProjects />} className="MyProjects" title="Mes projets" id="Projects" />
      <MotionDiv content={<Skills />} className="Skills" title="Mes skills" id="Skills" />
      <MotionDiv content={<Opinion />} className="Opinion" title="Bilans" id="Bilans"/>
      <MotionDiv content={<Contact />} className="Contact" title="Contact" id="Contact" />
    </div>
  )
}

export default App
