import { IAStyles } from "./IAStyles"

import quiz from '../../assets/imgs/quiz.webp';
import dashboard from '../../assets/imgs/dashboard.webp';
import chatbot from '../../assets/imgs/chatbot.webp';
import learMoreBlue from '../../assets/icons/learn-more-blue.svg';

const IA = () => {
   return (
      <IAStyles id="ia">
         <div className="container ia-container">
            <h2>Usa Inteligencia artificial para mejorar tu aprendizaje.</h2>
            <div className="ia-container__items">
               <article className="ia-container__item">
                  <div className="information">
                     <div className="bg-icon">
                        <img src={quiz} alt="" />
                     </div>
                     <p>Sube tu información</p>
                  </div>
                  <p className="description">Educativa, procesa PDF, MP4, MP3. Crear tu libreria de documentos que alimentaran a tu tutor inteligente.</p>
                  <a href="#" className="learn-more">
                     <span>Empieza aquí</span>
                     <img src={learMoreBlue} alt="icon learn more" />
                  </a>
               </article>
               <article className="ia-container__item" >
                  <div className="information">
                     <div className="bg-icon">
                        <img src={dashboard} alt="icon dashboard" />
                     </div>
                     <p>Generación de ficha</p>
                  </div>
                  <p className="description">Resumen con palabras claves, puntos claves, resumen y capítulos recomendados para un fácil aprendizaje.</p>
                  <a href="#" className="learn-more">
                     <span>Empieza aquí</span>
                     <img src={learMoreBlue} alt="icon learn more" />
                  </a>
               </article>
               <article className="ia-container__item">
                  <div className="information">
                     <div className="bg-icon">
                        <img src={chatbot} alt="icon chatbot" />
                     </div>
                     <p>Tutor virtual</p>
                  </div>
                  <p className="description">Crea cuestionarios para facilitar el aprendizaje y responde en base al contenido académico generado.</p>
                  <a href="#" className="learn-more">
                     <span>Empieza aquí</span>
                     <img src={learMoreBlue} alt="icon learn more" />
                  </a>
               </article>
            </div>

         </div>
      </IAStyles>
   )
}

export default IA