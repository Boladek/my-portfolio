import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useState} from 'react';

import {Link} from 'react-router-dom';
import './NavigationBar.css';

export default function NavigationBar() {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <nav>
            <h1><Link to="/" className="home">Boladek.</Link></h1>
            <ul className="bigger-screen">
                <li className="big-screen"><Link to="/about">About</Link></li>
                <li className="big-screen"><Link to="/contact">Contact</Link></li>
                <li className="big-screen"><Link to="/resume">Resume</Link></li>
            </ul>
            <div className="font-icon">
                <FontAwesomeIcon icon={faBars} onClick={showSidebar} />
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu-close'}>
                <ul className="nav-menu-items">
                    <li className="small-screen"><Link to="/">Home</Link></li>
                    <li className="small-screen"><Link to="/about">About</Link></li>
                    <li className="small-screen"><Link to="/contact">Contact</Link></li>
                    <li className="small-screen"><Link to="/resume">Resume</Link></li>
                </ul>
                </nav>
            </div>
        </nav>
    )
}
