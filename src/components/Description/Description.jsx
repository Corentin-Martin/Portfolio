/* eslint-disable react/no-unescaped-entities */
import './Description.scss'
import {motion} from 'framer-motion';
import RadioToWeb from '../../assets/pictures/radio-to-web.png';

function Description() {

    return ( 
        <motion.div 
            initial={{ opacity: 0, scale : 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{opacity: {duration: 1}, scale: {duration: 1}}}
            viewport={{ once: true }}
            className='Description'
        >
            <motion.h2 
                animate={{scale: 1}} 
                initial={{scale: 0}} 
                transition={{scale: {duration: 1.5}}}
            >
                Qui suis-je ?
            </motion.h2>
            <div className='Description-Box'>
                <div className='Description-Box-Unit'>
                    <p>Après un début de carrière derrière un micro dans un studio de radio, j'ai décidé de changer d'univers et de revenir dans un monde qui me faisait vibrer étant adolescent : le web !</p>
                    <p>J'ai suivi une formation "Développeur Web et Web Mobile" chez O'Clock entre Janvier et Juin 2023 qui m'a permis d'acquérir de solides bases. Je suis maintenant à la recherche d'opportunités pour entrer pleinement dans cet univers professionnel.</p>
                    <p>Vous risquez de le comprendre en continuant de découvrir cette page, ma passion est le sport automobile que je pratique en compétition. En plus d'apporter de l'adrénaline et d'assouvir une certaine soif de sensations fortes, la compétition permet aussi de développer une force mentale et une envie de se dépasser et d'aller toujours plus loin ! Autant de qualités transposables dans le monde professionnel !</p>
                </div> 
                <motion.img 
                    whileInView={{scale: 1, rotate: 0}}
                    initial={{scale: 0, rotate: 180}}
                    transition={{scale: {duration: 1.5}, rotate: {duration : 1.5}}}
                    viewport={{ once: true }} 
                    className='Description-Box-Unit'
                    src={RadioToWeb} 
                />
            </div>
        </motion.div>
    )
}

export default Description