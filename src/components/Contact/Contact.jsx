import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Contact.scss';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';

function Contact() {
    return (
    <div className="Contact">
        <div className="Contact-Div">
            <FontAwesomeIcon icon={faPaperPlane} className='fa-2x Contact-Icon'/>
            <p>corentin.mrtn [at] yahoo.com</p>
        </div>
        <div className="Contact-Div">
            <FontAwesomeIcon icon={faPhoneVolume} className='fa-2x Contact-Icon'/>
            <p>(+33) 7 . 89 . 49 . 78 . 72</p>
        </div>
        <a href='https://www.linkedin.com/in/corentin-martin1/' target="_blank" className="Contact-Div" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className='fa-2x Contact-Icon'/>
            <p>/in/corentin-martin1</p>
        </a>
        <a href='https://github.com/Corentin-Martin' target="_blank"  className="Contact-Div" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} className='fa-2x Contact-Icon'/>
            <p>github.com/Corentin-Martin</p>
        </a>

    </div>)
}

export default Contact