import './About.css';
import minilogo from '../../assets/LOGO.png';


const About = () => {
    return (
        <section id="about" className="about">
            <div className="about__content">
            <h2 className="about__title">Sobre mí</h2>

                <p className="about__paragraph">
                    Soy estudiante y desarrollador en formación. Me interesa el desarrollo web y disfruto aprender nuevas tecnologías mientras construyo proyectos para mejorar mis habilidades.
                </p>

                <p className="about__paragraph">
                    Actualmente trabajo con herramientas como HTML, CSS, JavaScript, React y Java. Mi objetivo es seguir creciendo profesionalmente y adquirir experiencia en el desarrollo de software.
                </p>
                <a href="#" className="btn btn__light">Check my Github</a>
            </div>

            <figure className="about__figure">
                <img src={minilogo} className="about__picture" alt="chica-code" />
            </figure>
        </section>

    )
}

export default About