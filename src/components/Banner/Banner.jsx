import { BannerStyles } from './BannerStyles';

import learnMore from '../../assets/icons/learn-more.svg';
import bannerWeb from '../../assets/imgs/banner_web.webp';

const Banner = () => {
  return (
    <BannerStyles>
      <div className="container banner">
        <div className="banner__information animate__animated animate__backInLeft">
          <h1 className="title">
            Ya no abandones los estudios por falta de tutor
          </h1>
          <h2 className="subtitle">
            Servicio de tutoria académica personalizada.
          </h2>
          <p className="description">
            Convierte con facilidad cualquier video, documento o URL en un curso
            interactivo con asistente inteligente. Perfecto para empresas,
            profesionales y estudiantes.
          </p>
          <span className="phrase">Potenciado por Inteligencia Artificial</span>
          <div className="actions">
            <button className="btn btn-primary">
              <span>Crea un tutor gratis</span>
            </button>
            <a href="#ia" className="learn-more">
              <span>Saber más</span>
              <img
                width={20}
                height={21}
                src={learnMore}
                alt="icon learn more"
              />
            </a>
          </div>
        </div>
        <div className="banner__img  animate__animated animate__backInRight">
          <img
            width={579}
            height={447}
            src={bannerWeb}
            alt="img computer"
            title="laptop"
          />
        </div>
      </div>
    </BannerStyles>
  );
};

export default Banner;
