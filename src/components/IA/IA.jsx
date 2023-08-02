import { IAStyles } from './IAStyles';
import learMoreBlue from '../../assets/icons/learn-more-blue.svg';
import { dataBenefits } from '../../data/dataBenefits';

const IA = () => {
  return (
    <IAStyles id="ia">
      <div className="container ia-container">
        <h2>Usa Inteligencia artificial para mejorar tu aprendizaje.</h2>
        <div className="ia-container__items">
          {dataBenefits.map(
            ({
              id,
              icon,
              width,
              height,
              alt,
              titleImg,
              title,
              description,
            }) => (
              <article key={id} className="ia-container__item">
                <div className="information">
                  <div className="bg-icon">
                    <img
                      width={width}
                      height={height}
                      src={icon}
                      alt={alt}
                      title={titleImg}
                    />
                  </div>
                  <p>{title}</p>
                </div>
                <p className="description">{description}</p>
                <a href="#" className="learn-more">
                  <span>Empieza aquí</span>
                  <img
                    width={20}
                    height={18}
                    src={learMoreBlue}
                    alt="icon learn more"
                    title="leer más"
                  />
                </a>
              </article>
            )
          )}
        </div>
      </div>
    </IAStyles>
  );
};

export default IA;
