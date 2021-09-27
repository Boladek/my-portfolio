import AboutMe from '../../components/AboutMe/AboutMe';
import Footer from '../../components/Footer/Footer';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import './About.css';

export default function About() {
    return (
        <div className="about-page">
            <NavigationBar />
            <AboutMe />
            <Footer />
        </div>
    )
}
