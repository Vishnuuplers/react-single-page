import logo from '../../Assets/Images/male_avatar.svg';
import './header.css';


function  Header() {
    return (


        <header className="site_header" id="main_header">
            <div className="header_wrapper">

                <div className="header_container d-flex align-items-center justify-space-between">
                    <div className="site_logo">
                        <img src={logo} alt="React site" />
                    </div>
                    <div className="site_nav">
                        <nav className="header_nav"> 
                        <ul>
                            <li>  <a href="#services">  About</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#services">Team</a></li>
                            <li><a href="#services">Contact</a></li>
                        </ul>
                        </nav>
                    </div>

                </div>

            </div>

        </header>

    );
}


export default Header;