import styled from 'styled-components';

export const StyledTodoFilters = styled.div`
  width: 100%;
  min-height: 3rem;
  display: grid;
  place-items: center;
  background-color: ${({ theme }) => theme.colors.bgPrimary};
  border-radius: 0.5rem;
  @media screen and (min-width: 668px) {
    display: none;
  }
`;
