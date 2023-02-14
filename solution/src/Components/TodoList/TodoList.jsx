import React from 'react';
import { StyledTodoList } from './StyledTodoList';

const TodoList = ({ children }) => {
  return <StyledTodoList>{children}</StyledTodoList>;
};

export { TodoList };
