import { AnalyzeStyles } from './AnalyzeStyles'

import performance from '../../assets/imgs/performance.png';
import check from '../../assets/icons/check.svg';

const Analyze = () => {
   return (
      <AnalyzeStyles>
         <div className="container analyze-container">
            <div className="analyze-container__information">
               <span className="label">Analyze</span>
               <h2 className="title">Measure performance</h2>
               <p className="description">Reports and stats to understand how individuals and groups performed. Auto-graded quizzes make marking a thing of the past.</p>
               <ul className="features">
                  <li className="feature-item">
                     <div className="name">
                        <img width={20} height={20} src={check} alt="icon fast" />
                        <span>Auto Grading.</span>
                     </div>
                     <p>
                        Intelligently evaluates and grades short answer questions, going the extra mile by offering valuable suggestions on how to improve and attain higher scores.
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
            <div className="analyze-container__img">
               <img width={536} height={536} src={performance} alt="img performance" />
            </div>
         </div>
      </AnalyzeStyles>
   )
}

export default Analyze