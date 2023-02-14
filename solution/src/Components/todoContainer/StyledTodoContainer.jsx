import styled from 'styled-components';

export const StyledTodoContainer = styled.div`
  width: 88%;
  max-width: 33.75rem;
  margin: auto;
  margin-top: -9.375rem;
  display: flex;
  flex-direction: column;
  background-color: transparent;
  gap: 16px;
  color: ${({ theme }) => theme.colors.font};
  transition: margin height 0.3s;
  @media screen and (min-width: 768px) {
    margin-top: -11rem;
  }
`;
