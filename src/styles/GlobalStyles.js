import { createGlobalStyle } from 'styled-components';

import { breakpoints } from './MediaQueries';

export const GlobalStyles = createGlobalStyle`
   :root {       
      --z-index-header: 99;
      --bg-header: #020113;
      --bg-btn-primary: #818cf8;
      --bg-btn-secondary: #FACC15;
      --color-text-secondary: #4f46e5;
      --bg-secondary: #f9fafb;
      --bg-icon: #e0e7ff;
      --color-text-primary: #111827;
      --color-title: #374151;
      --color-subtitle: #1f2937;
      --color-paragraph: #4b5563;
      --color-white: #ffffff;
      --box-shadow: #ccc;
   }
   * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
   }
   ::-webkit-scrollbar {
       width: 10px;
   }
   ::-webkit-scrollbar-track {
      border-radius: 8px;
      background: var(--color-white);
  }
   ::-webkit-scrollbar-thumb {
      background: var(--bg-btn-primary);
      border-radius: 2rem;
   }
   html{
      scroll-behavior: smooth;
   }
   body {
      background-color: var(--white);
      font-family: 'Segoe UI Regular';
      font-size: 14px;
   }

   a {
      text-decoration: none;
      color: unset;
      cursor: pointer;
   }

   button,
   input {
      outline: 0;
      border: none;
      border-radius: 12px;
   }

   ul {
      list-style-type: none;
   }

   img {
      max-width: 100%;
   }

   span{
      font-size: 14px;
      font-family: 'Segoe UI Regular';
   }

   section{
      margin: 80px 0;
      ${breakpoints.phone} {
         margin: 60px 0;
      }
   }

   .container {
      max-width: 1440px;
      margin: 0 auto;
      padding: 0 30px;
      ${breakpoints.tablet} {
         padding: 0 20px;
      }
   }

   .btn{
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5px;
      cursor: pointer;
      padding: 10px 12px;
   }

   .btn-primary {
      background-color: var(--bg-btn-primary);
      transition: all 0.5s ease;
      span {
        color: var(--color-white);
      }
      &:hover {
         background-color: var(--bg-btn-secondary);
        span {
          color: var(--color-text-primary);
        }
      }
   }

   .learn-more{
      display: flex;
      gap: 10px;
      transition: all 0.6s ease;
      img {
         padding-top: 3px;
      }
      &:hover {
         padding-left: 10px;
         ${breakpoints.tablet} {
            padding-left: 0;
         }
      }
   }
`;
