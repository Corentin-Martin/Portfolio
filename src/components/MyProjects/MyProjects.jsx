import './MyProjects.scss'
import {motion} from 'framer-motion';
import Project from "./Project/Project";
import projects from "../../data/projects";

function MyProjects() {
    
    return (
        <div className="MyProjects" >
            {projects.map(
                (project) => (
                    <motion.div 
                        className="MyProjects-item" key={project.name} 
                        initial={{scale: 0}}
                        whileInView={{scale: 1}}
                        transition={{scale: {duration: 1}}}
                        viewport={{ once: true, amount: 0 }}
                    >
                        <Project  project={project} />
                    </motion.div>
                )
            )}
        </div>
    )
}

export default MyProjects;