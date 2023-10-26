import './Welcome.scss'
import {motion} from 'framer-motion';
import profilPicture from '../../assets/pictures/profil-picture.jpg'
import AnimatedName from './AnimatedName/AnimatedName';

function Welcome() {
   
    return (
        <motion.div 
            initial={{ opacity: 0, scale : 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{opacity: {duration: 1}, scale: {duration: 1}}}
            viewport={{ once: true }}
            className="Welcome"
        >
            <motion.img 
                animate={
                    {
                        scale: [1, 2, 2, 1, 1],
                        rotate: [0, 180, 270, 380, 0],
                        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                    }
                }   
                className='Welcome-Picture' src={profilPicture} 
            />
            <div className='Welcome-Box'>
                <p>Hello, je suis</p>
                <div className='Welcome-Box-Name'>
                    <AnimatedName text="Corentin" />
                    <AnimatedName text="MARTIN" />
                </div>
                <h2 className='Welcome-Box-H2'>Développeur web & web-mobile</h2>
            </div>
        </motion.div>
    )
}

export default Welcome;