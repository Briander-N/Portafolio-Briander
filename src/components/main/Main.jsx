import './Main.css';
import foto from '../../assets/foto.png';

export const Main = () => {
    return (
        <main className="principal">
            <div className="principal__content">

                <div className="principal__text">
                    <h1 className="principal__title">
                        Hola, soy Briander
                    </h1>

                    <p className="principal__description">
                        Estudiante y desarrollador en formación.
                    </p>

                    <a href="#portfolio" className="btn btn__light">
                        Hoja de vida
                    </a>
                </div>

                <div className="principal__image">
                    <img src={foto} alt="Mi foto" />
                </div>

            </div>
        </main>
    );
}