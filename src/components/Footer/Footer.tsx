import './Footer.css';

export default function Footer() {
    function getCurrentYear() {
        return new Date().getFullYear();
      };

    return (
        <div className="footer-section">
            <footer>
                <p>	&copy; Copyright - Boladek {getCurrentYear()}</p>
            </footer>
        </div>
    )
}
