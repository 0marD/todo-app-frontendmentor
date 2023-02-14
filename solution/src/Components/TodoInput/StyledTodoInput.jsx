import styled from 'styled-components';

export const StyledTodoInput = styled.div`
  background-color: ${({ theme }) => theme.colors.bgPrimary};
  width: 100%;
  height: 3rem;
  border-radius: 0.45rem;
  display: flex;
  transition: all 0.3s;
  overflow: hidden;
  &:hover {
    box-shadow: 0 0 5px 1px ${({ theme }) => theme.colors.boxShadow};
    .circle {
      transition: all 0.3s;
      background: linear-gradient(34deg, #57ddff 0%, #c058f3 100%);
    }
  }
  .circle {
    width: 1.25rem;
    aspect-ratio: 1/1;
    border-radius: 50%;
    overflow: hidden;
    margin: auto;
    display: grid;
    place-items: center;
    background-color: ${({ theme }) => theme.colors.border};

    &__inner {
      width: 1.125rem;
      aspect-ratio: 1/1;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.colors.bgPrimary};
    }
  }

  input {
    margin: auto;
    margin-right: 0;
    width: 84%;
    height: 100%;
    border: none;
    outline: none;
    font-size: inherit;
    color: inherit;
    background-color: transparent;
    &:focus {
      border: none;
      outline: none;
    }
    &::placeholder {
      font-size: 0.8rem;
      color: ${({ theme }) => theme.colors.font};
      opacity: 0.8;
    }
  }
`;
