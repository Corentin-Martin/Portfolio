import './Project.scss';
import {motion} from 'framer-motion';

/* eslint-disable react/prop-types */
function Project({project}) {
    return (
        <motion.div className="Project">
            <h1>{project.name}</h1>
            <h2>{project.summary}</h2>
            <div className='Project-Box'>
                <motion.img  
                whileHover={{
                    scale: 2,
                    transition: { duration: 1 },
                }} 
                src={project.picture} />
                <p>{project.details}</p>
            </div>
            <div className='Project-BottomBox'>
                <ul>
                {project.technos.map((techno) => (<li key={techno}>{techno}</li>) )}
                </ul>
                <div className='Project-BottomBox-Right'>
                    <p>Type de projet : {project.type}</p>
                    <p>Réalisation : {project.date}</p>
                </div>
            </div>
     
        </motion.div>
    )
}

export default Project;