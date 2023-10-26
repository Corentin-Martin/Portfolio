import './App.css'
import Welcome from '../Welcome/Welcome'
import Description from '../Description/Description'
import MotionDiv from '../MotionDiv/MotionDiv'
import MyProjects from '../MyProjects/MyProjects'

function App() {

  return (
    <div className='App'>
      <MotionDiv content={<Welcome />} className="Welcome" />
      <MotionDiv content={<Description />} className="Description" title="Qui suis-je ?" />
      <MotionDiv content={<MyProjects />} className="MyProjects" title="Mes projets" />
    </div>
  )
}

export default App
