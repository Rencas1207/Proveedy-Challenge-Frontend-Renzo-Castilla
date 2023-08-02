import React from 'react'
import { dataSections } from '../../data/sections'
import Features from '../Features/Features';
import { SectionsTemplateStyles } from './SectionsTemplateStyles'

const SectionsTemplate = () => {
   return (
      <>
         {
            dataSections.map(({ id, name, label, title, description, features, imgSection, alt, titleImg, width, height, orderSection }) =>
            (
               <SectionsTemplateStyles key={id} id={name}>
                  <div className="container section-container">
                     <div className="section-container__information" style={{ order: `${orderSection}` }} >
                        <span className="label">{label}</span>
                        <h2 className="title">{title}</h2>
                        <p className="description">{description}</p>
                        <Features features={features} />
                        <div className="actions">
                           <a href="#" className="btn btn-primary">
                              <span>
                                 Create a Quiz for Free
                              </span>
                           </a>
                        </div>
                     </div>
                     <div className="section-container__img">
                        <img key={id} width={width} height={height} src={imgSection} alt={alt} title={titleImg} />
                     </div>
                  </div>
               </SectionsTemplateStyles>

            ))
         }

      </>
   )
}

export default SectionsTemplate