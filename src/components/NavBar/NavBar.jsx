import { Link } from 'react-router-dom';
import './NavBar.scss';

function NavBar() {
    return (
        <nav style={{width : '100%',     maxWidth: '1440px', position: "fixed", top: "0", zIndex: '5'}}>
            <ul className='NavBar'>
                <Link to='/#Who' className=''>Qui suis-je ?</Link>
                <Link to='/#Projects'>Mes projets</Link>
                <Link to='/#Skills'>Mes skills</Link>
                <Link to='/#Bilans'>Bilans</Link>
                <Link to='/#Contact'>Contact</Link>
            </ul>
        </nav>
    )
}

export default NavBar;