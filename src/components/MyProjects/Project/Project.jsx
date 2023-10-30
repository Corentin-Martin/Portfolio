import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Project.scss';
import {motion} from 'framer-motion';

/* eslint-disable react/prop-types */
function Project({project}) {
    return (
        <motion.div className="Project">
            <div className='Project-Head'>
                <a href={project.link} target='_blank' rel="noreferrer"><h1>{project.name}</h1></a>
                <h2>{project.summary}</h2>
            </div>
            <div className='Project-Box'>
                <motion.img  
                whileHover={{
                    scale: 2.5,
                    transition: { duration: 1 },
                }} 
                src={project.picture} />
                <p className='Project-Base'>{project.base}</p>
                
                    
                    <div className='Project-Details'>{project.details}</div>
                
            </div>
            <div className='Project-BottomBox'>
                <p className='Project-Conclusion'>{project.conclusion}</p>
                <ul>
                {project.technos.map((techno) => (<li key={techno + Math.random()}><FontAwesomeIcon icon={techno} className='fa-3x' /></li>) )}
                </ul>
                <div className='Project-BottomBox-Right'>
                
                    <p>Type de projet : {project.type}</p>
                    <p>Réalisation : {project.date}</p>
                </div>
                <a className="Project-Discover" href={project.link} target='_blank' rel="noreferrer">Découvrir</a>
            </div>
     
        </motion.div>
    )
}

export default Project;