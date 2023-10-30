import Project from "./Project/Project";
import './MyProjects.scss'
import projects from "../../data/projects";
import {motion} from 'framer-motion';

function MyProjects() {
    
    return (
    <div className="MyProjects" >
        {projects.map(
            (project) => (
            <motion.div 
                className="MyProjects-item" key={project.name} 
                initial={{scale: 0}}
                whileInView={{scale: 1}}
                transition={{scale: {duration: 2.5}}}
                viewport={{ once: true }}
            ><Project  project={project} />
            </motion.div>)
        )}
    </div>
    )
}

export default MyProjects;