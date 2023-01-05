import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import './footer.css';

function Footer(){
    return(


        <footer className="site_footer" id="footer">

            <div className="footer_wrapper">

                <div className="footer_bottom_container d-flex justify-space-between">

                    <div className="footer_copyrt">
                        <p> © Copyright React. All Rights Reserved </p>
                    </div>

                    <div className="footer_social_connect">
                        <a title='facebook' href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook} /></a>
                        <a title='twitter' href="https://twitter.com/"><FontAwesomeIcon icon={faTwitter} /></a>
                        <a title='instagram' href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram} /></a>
                        <a title='linkedin' href="https://www.linkedin.com/"><FontAwesomeIcon icon={faLinkedin} /></a>
                    </div>

                </div>


            </div>

        </footer>

    )
}


export default Footer;