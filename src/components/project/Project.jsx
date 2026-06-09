import './Project.css';

import portfolio1 from '../../assets/logoSafe.png';


const Project = () => {
    return (
        <section className="project" id="project">
                <h3 className="project__title">Mis proyectos</h3>
                <div className="project__cards">
                    <div className="cards">
                        <img src={portfolio1} className="card__img" alt="Proyecto" />
                        <div className="card">
                            <h4 className="card__title">SafeExplorEC</h4>
                            <p className="card__description">Explora Quito con mayor seguridad, informándote sobre sus zonas rojas y estadísticas de crímen.</p>
                            <div className="card__buttons">
                                <a href="#" className="card__category">Repository</a>
                                <a href="#" className="card__category">Demo</a>
                            </div>
                        </div>
                    </div>

                </div>
                <br/>
        </section>
    )
}

export default Project