import styled from 'styled-components';
import { breakpoints } from '../../styles/MediaQueries';

export const IAStyles = styled.section`
  .ia-container {
    background-color: var(--bg-secondary);
    padding: 60px 50px 80px;
    ${breakpoints.phone} {
      padding-left: 20px;
      padding-right: 20px;
    }
    h2 {
      width: 100%;
      display: inline-block;
      text-align: center;
      margin-bottom: 30px;
      color: var(--color-title);
      font-size: 18px;
      font-weight: 400;
      line-height: 32px;
    }
    &__items {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      margin-top: 30px;
      padding: 0 30px;
      gap: 40px;
      ${breakpoints.tablet} {
        grid-template-columns: 1fr;
        padding: 0;
      }
    }
    &__item {
      max-width: 320px;
      ${breakpoints.phone} {
        max-width: 100%;
      }
      .information {
        display: flex;
        gap: 15px;
        align-items: center;
        margin-bottom: 15px;
        p {
          color: var(--color-text-primary);
          font-size: 16px;
          font-weight: 400;
        }
      }
      .bg-icon {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--bg-icon);
        width: 86px;
        height: 86px;
        border-radius: 50%;
      }
      .description {
        display: inline-block;
        margin-bottom: 40px;
        color: var(--color-paragraph);
        font-size: 16px;
        font-weight: 400;
        line-height: 28px;
      }
      .learn-more {
        ${breakpoints.phone} {
          justify-content: end;
        }
        span {
          color: var(--color-text-secondary);
        }
      }
    }
  }
`;
