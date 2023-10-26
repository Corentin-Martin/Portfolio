import Project from "./Project/Project";
import './MyProjects.scss'
import LocautocrossPicture from '../../assets/pictures/locautocross.png';
import PronautocrossPicture from '../../assets/pictures/pronautocross.png';
import RegaladePicture from '../../assets/pictures/regalade.png';
import VersusQuizPicture from '../../assets/pictures/versusquiz.png'; 
import {motion} from 'framer-motion';

function MyProjects() {
    const projects = [
        {
            name : "Loc'Autocross",
            summary : "Site de mise en relations de particuliers et professionnels pour des locations de véhicules de sport automobile (Autocross et Sprint Car).",
            details : "Les professionnels peuvent créer des évènements, ajouter un véhicule à leur garage, créer et gérer les propositions de location tandis que les pilotes peuvent intéragir avec le loueur, notamment en utilisant le système de chat pour poser des questions. Ils peuvent aussi se positionner sur des locations, effectuer des demandes de réservation et après la course, commenter et noter leur expérience avec le loueur.",
            picture: LocautocrossPicture,
            technos : ["Symfony", "React"],
            type: "Solo",
            date : "Septembre / Octobre 2023"
        },
        {
            name : "Pron'Autocross",
            summary : "Balabbbb",
            picture : PronautocrossPicture,
            technos : ["HTML", "CSS", "PHP", "JavaScript"],
            type : "Solo",
            date: "Mars / Avril 2023"
        },
        {
            name : "Regalade",
            summary : "Balabbbb",
            picture: RegaladePicture,
            technos : ["HTML", "CSS", "PHP", "JavaScript"],
            type : "Fin de formation - En groupe",
            date: "Mai / Juin 2023"
        },
        {
            name : "Versus Quiz",
            summary : "Balabbbb",
            picture: VersusQuizPicture,
            technos : ["HTML", "CSS", "PHP", "JavaScript"],
            type : "Solo",
            date: "Septembre 2023"
        }
    ];

    return (<motion.div className="MyProjects" >
    {projects.map((project) => (<motion.div className="MyProjects-item" key={project.name} 
    initial={{scale: 0}}
    whileInView={{scale: 1}}
    transition={{scale: {duration: 2.5}}}
    viewport={{ once: true }}
    ><Project  project={project} /></motion.div>))}
    </motion.div>)
}

export default MyProjects;