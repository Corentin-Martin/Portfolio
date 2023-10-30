import './App.css'
import Welcome from '../Welcome/Welcome'
import Description from '../Description/Description'
import MotionDiv from '../MotionDiv/MotionDiv'
import MyProjects from '../MyProjects/MyProjects'
import Skills from '../Skills/Skills'
import Opinion from '../Opinion/Opinion'

function App() {

  return (
    <div className='App'>
      <MotionDiv content={<Welcome />} className="Welcome" />
      <MotionDiv content={<Description />} className="Description" title="Qui suis-je ?" />
      <MotionDiv content={<MyProjects />} className="MyProjects" title="Mes projets" />
      <MotionDiv content={<Skills />} className="Skills" title="Mes skills" />
      <MotionDiv content={<Opinion />} className="Opinion" title="Bilans" />
    </div>
  )
}

export default App
