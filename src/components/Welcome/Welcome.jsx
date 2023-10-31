import './Welcome.scss'
import {motion} from 'framer-motion';
import AnimatedName from './AnimatedName/AnimatedName';
import profilPicture from '../../assets/pictures/profil-picture.jpg'

function Welcome() {
   
    return (
        <>
            <motion.img 
                animate={
                    {
                        scale: [1, 2, 2, 1, 1],
                        rotate: [0, 380, 0, 380, 0],
                        borderRadius: ["20%", "70%", "100%", "80%", "20%"],
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
        </>
    )
}

export default Welcome;