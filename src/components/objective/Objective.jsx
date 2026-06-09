import './Objective.css';

const Objective = () => {
    return (
        <section className="objective" id="objective">

            <h2 className="objective__title">
                Mis Objetivos
            </h2>

            <div className="objective__cards">

                <div className="objective__card">
                    <span className="objective__number">01</span>
                    <h3>Aprender</h3>
                    <p>
                        Seguir aprendiendo nuevas tecnologías y herramientas
                        para fortalecer mis conocimientos.
                    </p>
                </div>

                <div className="objective__card">
                    <span className="objective__number">02</span>
                    <h3>Crear</h3>
                    <p>
                        Desarrollar proyectos cada vez más completos para
                        mejorar mis habilidades prácticas.
                    </p>
                </div>

                <div className="objective__card">
                    <span className="objective__number">03</span>
                    <h3>Crecer</h3>
                    <p>
                        Obtener experiencia profesional y participar en
                        proyectos que aporten valor a los usuarios.
                    </p>
                </div>

            </div>

        </section>
    );
};

export default Objective;