import styled from 'styled-components';

export const IAStyles = styled.section`
  margin: 80px 0;
  .ia-container {
    background-color: var(--bg-secondary);
    padding: 60px 50px 80px;
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
    }
    &__item {
      max-width: 320px;
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
        span {
          color: var(--color-text-secondary);
        }
      }
    }
  }
`;
