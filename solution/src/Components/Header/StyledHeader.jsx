import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: 0.6875rem;
  margin-bottom: 2.125rem;
  .header__title {
    text-shadow: 0 2px 15px black;
  }
  .header__themeSwitch {
    width: 1.25rem;
    aspect-ratio: 1/1;
    position: relative;
    .header__switchIcon {
      position: absolute;
      top: 0;
      width: 0;
      height: 100%;
      transition: width 0.3s;
      &--active {
        width: 100%;
        cursor: pointer;
      }
    }
  }
`;
