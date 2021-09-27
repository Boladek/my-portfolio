import './Home.css';
import Welcome from '../../components/Welcome/Welcome';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import Footer from '../../components/Footer/Footer';

export default function Home() {
    return (
        <div className="home-page">
            <NavigationBar />
            <Welcome />
            <Footer />
        </div>
    )
}
