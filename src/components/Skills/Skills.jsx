import './Skills.scss';
import {motion} from 'framer-motion';
import skills from "../../data/skills";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Skills() {

    return (
        <div className="Skills">
            {skills.map((group) => (
                <div className="Skills-Group" key={group[0]}>
                    <h1>{typeof group[0] !== 'string' ? 'Hard Skills' : 'Soft Skills'}</h1>
                    <ul>
                        {group.map((skill) => (
                            <motion.li 
                                key={`${skill}-${Math.random()}`}
                                initial={{rotate: 0}}
                                whileHover={{
                                    scale: 2,
                                    rotate: 360,
                                    color: '#fff',
                                    textShadow: '2px 2px 2px black',
                                    transition: { duration: 1 },
                                }} 
                            >
                                {typeof skill !== 'string' ? <FontAwesomeIcon icon={skill} className='fa-3x' /> : skill}
                            </motion.li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default Skills;