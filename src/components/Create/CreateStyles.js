import styled from 'styled-components';

export const CreateStyles = styled.section`
  margin: 80px 0;
  .create-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    &__information {
      order: 2;
      .label {
        color: var(--color-text-secondary);
        font-size: 16px;
        font-weight: 400;
        line-height: 28px;
        display: inline-block;
        margin-bottom: 10px;
      }
      .title {
        color: var(--color-text-primary);
        font-size: 33px;
        font-weight: 400;
        line-height: 40px;
        letter-spacing: 0.9px;
        margin-bottom: 30px;
      }
      .description {
        color: var(--color-paragraph);
        font-size: 18px;
        font-weight: 400;
        line-height: 32px;
        margin-bottom: 40px;
      }
      .actions {
        display: flex;
        justify-content: start;
        .btn-primary {
          width: fit-content;
          margin-top: 40px;
          padding: 12px 25px;
          border-radius: 8px;
          span {
            font-size: 16px;
          }
        }
      }
    }

    .features {
      display: flex;
      flex-direction: column;
      gap: 20px;
      .feature-item {
        .name {
          display: flex;
          align-items: center;
          gap: 15px;
          span {
            color: var(--color-text-primary);
            font-size: 16px;
            font-weight: 400;
            line-height: 28px;
          }
        }
        p {
          color: var(--color-paragraph);
          font-size: 16px;
          font-weight: 400;
          line-height: 28px;
          padding-left: 35px;
          margin-top: 5px;
        }
      }
    }

    &__img {
      order: 1;
    }
  }
`;
