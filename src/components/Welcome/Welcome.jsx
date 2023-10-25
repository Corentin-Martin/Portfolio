import './Welcome.scss'
import {motion, useScroll} from 'framer-motion';
import profilPicture from '../../assets/pictures/profil-picture.jpg'

function Welcome() {
    const { scrollYProgress } = useScroll()
   
    return (
        <motion.div initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
         className="Welcome">
            <motion.img  whileHover={{ scale: 0.8, borderRadius: '100%' }}
            
            
   className='Welcome-Picture' src={profilPicture} />


            <div className='Welcome-Box'>
            <p>Hello, je suis</p>
            <motion.h1 className='Welcome-Box-Title'>Corentin MARTIN</motion.h1>
            <h2 className='Welcome-Box-H2'>Développeur web & web-mobile</h2>
            </div>
        </motion.div>
    )
}

export default Welcome;