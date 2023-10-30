import BilanEnd from '../../assets/pictures/bilan-fin.png';
import BilanApo from '../../assets/pictures/bilan-apo.png';
import BilanTP from '../../assets/pictures/bilan-tp.png';
import './Opinion.scss';
import {motion} from 'framer-motion';


function Opinion() {
    return (
        <div className='Opinion'>
            <motion.img src={BilanApo} alt="Bilan d'Apothéose" className='Opinion-Image' />
            <div>
                <motion.img src={BilanEnd} alt="Bilan de fin de formation" className='Opinion-Image' />
                <motion.img src={BilanTP} alt="Bilan TP" className='Opinion-Image' />
            </div>
        </div>
    )
}

export default Opinion;