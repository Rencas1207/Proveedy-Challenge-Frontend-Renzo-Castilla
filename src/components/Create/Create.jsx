import { CreateStyles } from "./CreateStyles"

import uploadInformation from '../../assets/imgs/upload-information.png';
import fast from '../../assets/icons/fast.svg';
import flexible from '../../assets/icons/flexible.svg';
import integrated from '../../assets/icons/integrated.svg';

const Create = () => {
   return (
      <CreateStyles>
         <div className="container create-container">
            <div className="create-container__information">
               <span className="label">Crea</span>
               <h2 className="title">Sube tu información fácil</h2>
               <p className="description">Te presentamos la nueva forma de estudiar con resúmenes generados por la IA, cuestionarios lúdicos y asistentes virtuales.</p>
               <ul className="features">
                  <li className="feature-item">
                     <div className="name">
                        <img width={20} height={20} src={fast} alt="icon fast" />
                        <span>Fast.</span>
                     </div>
                     <p>
                        question formats. Consistently come up with new ideas and inspiration, while saving time and effort.
                     </p>
                  </li>
                  <li className="feature-item">
                     <div className="name">
                        <img width={20} height={20} src={flexible} alt="icon flexible" />
                        <span>Flexible.</span>
                     </div>
                     <p>
                        in-the-blank style questions. Upload files like PDFs, DOCs, and PPTs to create quizzes and exams.
                     </p>
                  </li>
                  <li className="feature-item">
                     <div className="name">
                        <img width={20} height={20} src={integrated} alt="icon integrated" />
                        <span>Integrated.</span>
                     </div>
                     <p>
                        flashcards in a single click. Quizgecko can even generate entire quizzes from Youtube videos.
                     </p>
                  </li>
               </ul>
               <div className="actions">
                  <a href="#" className="btn btn-primary">
                     <span>
                        Create a Quiz for Free
                     </span>
                  </a>
               </div>

            </div>
            <div className="create-container__img">
               <img width={536} height={536} src={uploadInformation} alt="img upload information" />
            </div>
         </div>
      </CreateStyles >
   )
}

export default Create