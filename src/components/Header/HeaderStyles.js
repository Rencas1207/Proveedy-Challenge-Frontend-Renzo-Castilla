import styled from 'styled-components';

export const HeaderStyles = styled.header`
  background-color: var(--bg-header);
  width: 100%;
  color: var(--color-white);
  position: sticky;
  top: 0;
  z-index: 10;
  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 65px;
    li {
      list-style-type: none;
      a {
        color: var(--color-white);
      }
    }
  }

  .navigation {
    width: 65%;
    display: flex;
    justify-content: center;
    gap: 80px;
  }
  .actions {
    width: 35%;
    display: flex;
    gap: 25px;
    justify-content: flex-end;
    align-items: center;
  }
  .btn {
    transition: all 0.5s ease;
    color: var(--color-text-primary);
    &-primary {
      background-color: var(--bg-btn-primary);
      padding: 10px 12px 10px 6px;
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
    &-secondary {
      background-color: var(--bg-btn-secondary);
      padding: 10px 12px 10px 6px;
      &:hover {
        background-color: var(--bg-btn-primary);
        color: var(--color-white);
      }
    }
    &-profile {
      background-color: var(--bg-btn-primary);
      border-radius: 50%;
      width: 40px;
      height: 40px;
      padding: initial;
    }

    span {
      font-size: 14px;
    }
  }

  .my-library {
    display: flex;
    align-items: center;
    gap: 10px;
    span {
      display: inline-block;
      padding-top: 5px;
    }
  }
`;
