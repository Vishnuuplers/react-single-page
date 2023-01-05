import './services.css';

function Services() {

    const services = [
        {image: "https://fujifilm-x.com/wp-content/uploads/2021/01/gfx100s_sample_04_thum-1.jpg", heading: "Lorem Ipsum", paragraph: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi"},
        {image: "https://fujifilm-x.com/wp-content/uploads/2019/08/xc16-50mmf35-56-ois-2_sample-images03.jpg", heading: "Sed ut perspici", paragraph: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore"},
        {image: "https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2FtcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80", heading: "Magni Dolores", paragraph: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia"},
        {image: "https://imgsv.imaging.nikon.com/lineup/dslr/df/img/sample/img_01.jpg", heading: "Nemo Enim", paragraph: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis"}
    ]




    return(

        <section className='services_section' id='services'>


        <div className="wrapper">


            <div className="section_heading text-center"> <h3> Some section heading goes here ok ok </h3> </div>

        <div className="services_container d-flex justify-space-between flex-wrap">

            {services.map((data) => {
                return (
                <div className="col-25">
                    <div className="single_service">
                        <div className="service-image" style={{backgroundImage: `url(${data.image})` }}></div>
                       
                        <h5>{data.heading}</h5>
                        <p>{data.paragraph}</p>
                    </div>
                </div>
                )
                
            })}
           
     

        </div>


        </div>

        </section>



    );
}


export default Services;