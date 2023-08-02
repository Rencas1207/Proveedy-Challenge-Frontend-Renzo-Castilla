import styled from 'styled-components';

import { breakpoints } from '../../styles/MediaQueries';

export const HeaderStyles = styled.header`
  background-color: var(--bg-header);
  width: 100%;
  color: var(--color-white);
  position: sticky;
  top: 0;
  z-index: var(--z-index-header);
  box-shadow: 0px 0px 5px 5px var(--box-shadow);

  &.active {
    .nav-toggler {
      span {
        background-color: transparent;
        &::after {
          transform: rotate(-45deg);
        }
        &::before {
          transform: rotate(45deg);
        }
      }
    }
    .navigation {
      left: 0;
    }
  }

  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 65px;
    ul {
      display: inherit;
      gap: inherit;
      flex-direction: inherit;
    }
    li {
      list-style-type: none;
      a {
        color: var(--color-white);
        padding: 10px 15px;
        position: relative;
        font-size: 16px;
        &::before {
          position: absolute;
          content: '';
          bottom: 3px;
          left: 0;
          width: 100%;
          height: 1px;
          background: var(--color-white);
          transform: scale(0, 1);
          transition: transform 0.5s ease;
        }
        &:hover {
          &::before {
            transform: scale(1, 1);
          }
        }
      }
    }
  }
  .nav-toggler {
    display: none;
    border: none;
    cursor: pointer;
    border: var(--color-white);
    z-index: 1;
    width: 28px;
    height: 28px;
    background: transparent;
    transition: opacity 0.5s ease-in-out;
    ${breakpoints.tablet} {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &.hide {
      opacity: 0;
      transition: none;
    }
    span {
      height: 3px;
      width: 24px;
      border-radius: 12px;
      background-color: var(--color-white);
      position: relative;
      transition: background-color 0.3s ease;

      &::before,
      &::after {
        position: absolute;
        content: '';
        top: 0;
        width: 100%;
        height: 100%;
        background-color: var(--color-white);
        transition: all 0.3s ease;
        border-radius: 12px;
      }

      &::before {
        left: 0;
        transform: translateY(-8px);
      }

      &::after {
        right: 0;
        transform: translateY(8px);
      }
    }
  }

  .navigation {
    width: 60%;
    display: flex;
    justify-content: center;
    gap: 40px;
    ${breakpoints.tablet} {
      position: fixed;
      top: 0;
      left: -100%;
      background-color: var(--bg-header);
      width: 100%;
      height: 100vh;
      flex-direction: column;
      align-items: center;
      transition: all 0.5s ease;
    }
  }
  .actions {
    width: 40%;
    display: flex;
    gap: 25px;
    justify-content: flex-end;
    align-items: center;
    ${breakpoints.tablet} {
      width: fit-content;
      position: relative;
      &.active {
        .actions-mobile {
          opacity: 1;
          pointer-events: all;
        }
      }
    }
  }
  .actions-mobile {
    display: inherit;
    gap: inherit;
    ${breakpoints.tablet} {
      background-color: var(--bg-header);
      border-radius: 10px;
      padding: 15px;
      position: absolute;
      flex-direction: column;
      top: 65px;
      right: 0;
      width: 150px;
      transition: all 0.5s ease;
      pointer-events: none;
      opacity: 0;
    }
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
      min-width: fit-content;
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
      padding-top: 3px;
    }
  }
`;
