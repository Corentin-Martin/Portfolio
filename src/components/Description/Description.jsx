import './Description.scss'
import {motion} from 'framer-motion';
import RadioToWeb from '../../assets/pictures/radio-to-web.png';

function Description() {

    return ( 
        <div className='Description-Box'>
            <div className='Description-Box-Unit'>
                <p>Après un début de carrière derrière un micro dans un studio de radio, j&apos;ai décidé de changer d&apos;univers et de revenir dans un monde qui me faisait vibrer étant adolescent : le web !</p>
                <p>J&apos;ai suivi une formation &quot;Développeur Web et Web Mobile&quot; chez O&apos;Clock entre Janvier et Juillet 2023 qui m&apos;a permis d&apos;acquérir de solides bases et le Titre Professionnel &quot;DWWM&quot; (Développeur Web & Web Mobile). Continuant sans cesse d&apos;apprendre, de pratiquer et de progresser via des projets personnels, je suis maintenant à la recherche d&apos;opportunités pour entrer pleinement dans cet univers professionnel.</p>
                <p>Vous risquez de le comprendre en continuant de découvrir cette page, ma passion est le sport automobile que je pratique en compétition. En plus d&apos;apporter de l&apos;adrénaline et d&apos;assouvir une certaine soif de sensations fortes, la compétition permet aussi de développer une force mentale et une envie de se dépasser et d&apos;aller toujours plus loin ! Autant de qualités transposables dans le monde professionnel !</p>
            </div> 
            <motion.img 
                whileInView={{scale: 1, rotate: 0}}
                initial={{scale: 0, rotate: 180}}
                transition={{scale: {duration: 2}, rotate: {duration : 2}}}
                viewport={{ once: true }} 
                className='Description-Box-Unit'
                src={RadioToWeb} 
            />
        </div>
    )
}

export default Description