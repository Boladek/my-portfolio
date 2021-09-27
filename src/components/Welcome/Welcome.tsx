import './Welcome.css';
import homePagePic from '../../assets/homePagePic.jpg';

export default function Welcome() {
    return (
        <div className="welcome">
            <div className="left">
                <h1>I am MUBARAK ADEKUNLE</h1>
                <p>Hello, I am Mubarak Adekunle (a.k.a BOLADEK). I am a fullstack NodeJs develop. I enjoy using the latest technologies to develop softwares.</p>
            </div>
            <div className="right">
                <img src={homePagePic} alt="home-page-pic" />
            </div>
        </div>
    )
}
