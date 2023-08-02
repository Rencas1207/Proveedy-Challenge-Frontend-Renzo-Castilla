const Features = ({ features }) => {
   return (
      <ul className="features">
         {
            features.map(({ name, img, alt, description }) => (
               <li key={name} className="feature-item">
                  <div className="name">
                     <img width={20} height={20} src={img} alt={alt} />
                     <span>{name}.</span>
                  </div>
                  <p>{description}</p>
               </li>
            ))
         }
      </ul>
   )
}

export default Features