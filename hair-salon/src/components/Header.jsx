import '../style/Header.css';
export function Header() {
    return (
        <header className="header">
            <div className="logo">
                <a href="/">UTH Salon</a>
            </div>
            <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            </nav>
            <button className="appointment-btn">Book Appointment</button>
        </header>
        );
};

export default Header;