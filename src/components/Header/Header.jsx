
import { HeaderStyles } from './HeaderStyles'

import Flash from '../../assets/icons/flash.svg';
import More from '../../assets/icons/more.svg';
import Book from '../../assets/icons/book.svg';
import Profile from '../../assets/icons/profile.svg';

const Header = () => {
   return (
      <HeaderStyles>
         <div className='header-container container'>
            <nav className='navigation'>
               <li><a href="#">Features</a></li>
               <li><a href="#">Business</a></li>
               <li><a href="#">Education</a></li>
               <li><a href="#">Resources</a></li>
            </nav>
            <div className='actions'>
               <button type='button' className='btn btn-secondary'>
                  <img loading='lazy' width={20} height={20} src={Flash} alt="icon upgrade" />
                  <span>Upgrade</span>
               </button>
               <button type='button' className='btn btn-primary'>
                  <img loading='lazy' width={20} height={20} src={More} alt="icon quiz" />
                  <span>Create Quiz</span>
               </button>
               <a href='#' className='my-library'>
                  <img loading='lazy' width={20} height={20} src={Book} alt="icon book" />
                  <span> My Library</span>
               </a>
               <button type='button' className='btn btn-profile'>
                  <img loading='lazy' width={20} height={20} src={Profile} alt="icon profile" />
               </button>
            </div>
         </div>

      </HeaderStyles>
   )
}

export default Header