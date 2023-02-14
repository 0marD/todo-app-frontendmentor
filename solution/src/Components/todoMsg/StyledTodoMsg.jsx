import styled from 'styled-components';

export const StyledTodoMsg = styled.div`
  display: grid;
  place-items: center;
  font-size: 0.75rem;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  height: 3rem;
`;
