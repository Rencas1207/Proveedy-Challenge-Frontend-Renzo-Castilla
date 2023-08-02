import { ShareEmbedStyles } from './ShareEmbedStyles'

import publish from '../../assets/imgs/publish.png';
import share from '../../assets/icons/share.svg';
import iexport from '../../assets/icons/export.svg';
import embed from '../../assets/icons/embed.svg';

const ShareEmbed = () => {
   return (
      <ShareEmbedStyles>
         <div className="container share-embed-container">
            <div className="share-embed-container__information">
               <span className="label">Share & Embed</span>
               <h2 className="title">Publish with ease</h2>
               <p className="description">Effortlessly share and embed quizzes with your team, students, or use them as study aids – get everyone engaged and enhance learning experiences in just seconds.</p>
               <ul className="features">
                  <li className="feature-item">
                     <div className="name">
                        <img width={20} height={20} src={share} alt="icon share" />
                        <span>Share.</span>
                     </div>
                     <p>
                        Share quizzes effortlessly with students or colleagues.
                     </p>
                  </li>
                  <li className="feature-item">
                     <div className="name">
                        <img width={20} height={20} src={iexport} alt="icon export" />
                        <span>Export.</span>
                     </div>
                     <p>
                        Download as text, csv and Aiken format for seamless integration into your learning management system or classroom setting
                     </p>
                  </li>
                  <li className="feature-item">
                     <div className="name">
                        <img width={20} height={20} src={embed} alt="icon embed" />
                        <span>Embed.</span>
                     </div>
                     <p>
                        Add quizzes in your own website, LMS or blog. Perfect for lead generation, engaging your users
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
            <div className="share-embed-container__img">
               <img width={536} height={536} src={publish} alt="img computer" />
            </div>
         </div>

      </ShareEmbedStyles>
   )
}

export default ShareEmbed