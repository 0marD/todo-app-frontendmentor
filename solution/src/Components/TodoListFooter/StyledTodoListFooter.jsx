import styled from 'styled-components';

export const StyledTodoListFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.65rem;
  min-height: 3rem;
  opacity: 0.8;
  padding: 0 1.25rem;
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  .clearBtn {
    border: none;
    cursor: pointer;
    opacity: 1;
  }
`;
