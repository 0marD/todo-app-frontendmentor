import React from 'react';
import { StyledTodoContainer } from './StyledTodoContainer';

const TodoContainer = ({ children }) => {
  return <StyledTodoContainer>{children}</StyledTodoContainer>;
};

export { TodoContainer };
