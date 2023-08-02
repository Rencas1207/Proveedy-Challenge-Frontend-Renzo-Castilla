import styled from 'styled-components';

export const BannerStyles = styled.section`
  margin: 80px 0;
  .banner {
    display: flex;
    justify-content: start;
    position: relative;
    &__information {
      max-width: 500px;

      .title {
        color: var(--color-title);
        font-size: 46px;
        font-weight: 400;
        line-height: 48px;
        letter-spacing: 1.15px;
        max-width: 380px;
        margin: 0 0 20px;
      }
      .subtitle {
        color: var(--color-subtitle);
        font-size: 20px;
        font-weight: 400;
        line-height: 28px;
        margin: 0 0 20px;
      }
      .description {
        margin: 0 0 20px;
        color: var(--color-title);
        font-size: 18px;
        font-weight: 400;
        line-height: 28.8px;
      }

      .phrase {
        display: inline-block;
        margin: 0 0 35px;
        color: var(--color-text-secondary);
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 28px;
      }

      .actions {
        display: flex;
        align-items: center;
        gap: 30px;
        .btn-primary {
          padding: 15px 20px;
          span {
            font-size: 16px;
          }
        }
        .learn-more {
          span {
            font-size: 16px;
          }
        }
      }
    }
    &__img {
      position: absolute;
      right: 0;
      top: 0;
    }
  }
`;
