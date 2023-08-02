import { useState } from 'react';
import { HeaderStyles } from './HeaderStyles'

import Flash from '../../assets/icons/flash.svg';
import More from '../../assets/icons/more.svg';
import Book from '../../assets/icons/book.svg';
import Profile from '../../assets/icons/profile.svg';


const Header = () => {
   const [active, setActive] = useState(false);
   const [activeActions, setActiveActions] = useState(false);

   const handleNavToggler = () => {
      setActive(!active);
   };

   const handleActionsMobile = () => {
      setActiveActions(!activeActions);
   }

   return (
      <HeaderStyles className={active ? 'active' : ''} >
         <div className='header-container container'>
            <button
               className="nav-toggler"
               onClick={() => handleNavToggler()}
            >
               <span></span>
            </button>
            <nav className='navigation'>
               <li><a href="#ia" onClick={() => setActive(!active)}>Features</a></li>
               <li><a href="#create" onClick={() => setActive(!active)}>Business</a></li>
               <li><a href="#share" onClick={() => setActive(!active)}>Education</a></li>
               <li><a href="#analyze" onClick={() => setActive(!active)}>Resources</a></li>
            </nav>
            <div className={activeActions ? 'active actions' : 'actions'} >
               <div className='actions-mobile'>
                  <button type='button' className='btn btn-secondary' onClick={() => setActiveActions(!activeActions)}>
                     <img loading='lazy' width={20} height={20} src={Flash} alt="icon upgrade" />
                     <span>Upgrade</span>
                  </button>
                  <button type='button' className='btn btn-primary' onClick={() => setActiveActions(!activeActions)}>
                     <img loading='lazy' width={20} height={20} src={More} alt="icon quiz" />
                     <span>Create Quiz</span>
                  </button>
                  <a href='#' className='my-library' onClick={() => setActiveActions(!activeActions)}>
                     <img loading='lazy' width={20} height={20} src={Book} alt="icon book" />
                     <span> My Library</span>
                  </a>
               </div>
               <button type='button' className='btn btn-profile' onClick={() => handleActionsMobile()}>
                  <img loading='lazy' width={20} height={20} src={Profile} alt="icon profile" />
               </button>
            </div>
         </div>

      </HeaderStyles>
   )
}

export default Header