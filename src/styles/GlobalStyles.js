import { createGlobalStyle } from 'styled-components';

import { breakpoints } from './MediaQueries';

export const GlobalStyles = createGlobalStyle`
   :root {       
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
   }
   * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
   }
   html {
      font-size: 14px;
   }

   body {
      background-color: var(--white);
      font-family: 'Segoe', sans-serif;
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
   }

   .container {
      max-width: 1440px;
      margin: 0 auto;
      padding: 0 50px;
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
      &:hover{
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
      &:hover {
         padding-left: 10px;
      }
   }

   /* .grid {
      display: grid;
      grid-template-columns: 330px calc(100% - 330px);

      ${breakpoints.tablet}{
         grid-template-columns: 100%;
      }
   } */

   /* .flex {
      display: flex;
      justify-content: center;
      align-items: center
   }

   .mb-3 {
      margin-bottom: 3rem;
   }

   .mb-2 {
      margin-bottom: 2rem;
   }

   .section {
      padding: 0 2rem;
   } */
`;
