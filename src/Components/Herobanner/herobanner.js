import heroimage from '../../Assets/Images/hero_rocket.svg';

import './herobanner.css';

function Herobanner() {
    return(


<section className="hero_banner_section">

        <div className="wrapper">
            <div className="hero_container">
                <div className="hero_image text-center">
                <img src={heroimage} alt="Hero banner" />
                </div>
                <div className="hero_contents text-center">
                    <h1>Welcome to <span> React</span> </h1>
                    <p>Et voluptate esse accusantium accusamus natus reiciendis quidem voluptates similique aut. </p>
                </div>
            </div>
        </div>


</section>


    );
}


export default Herobanner;