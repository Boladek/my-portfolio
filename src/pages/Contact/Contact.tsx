import NavigationBar from '../../components/NavigationBar/NavigationBar';
import './Contact.css';
import profilePictureMaker from '../../assets/ProfilePictureMaker.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
    return (
        <div className ="contacts-page">
            <NavigationBar />
            <div className="contacts">
                <div className="picture">
                    <img src={profilePictureMaker} alt="imagess"></img>
                </div>
                <div>
                    <h1>MUBARAK BOLAJI ADEKUNLE</h1>
                </div>
                <div>
                    <h2>Software Developer</h2>
                </div>
                <div>
                    <span className="socials"><a target="_blank" rel="noreferrer" href="mailto:bmubarak88@gmail"><FontAwesomeIcon icon={faEnvelope} /></a></span>
                    <span className="socials"><a target="_blank" rel="noreferrer" href="https://www.bing.com/search?q=react+link+to+external+url&cvid=12ba9d766cd1430d95abe1fb0e76841c&aqs=edge.2.69i57j0l6.9056j0j4&FORM=ANAB01&PC=U531"><FontAwesomeIcon icon={faTwitter} /></a></span>
                    <span className="socials"><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/mubarak-bolaji-7a6268189/"><FontAwesomeIcon icon={faLinkedin} /></a></span>
                </div>
            </div>
        </div>
    )
}
