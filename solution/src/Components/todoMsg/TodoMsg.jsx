import React from 'react';
import { StyledTodoMsg } from './StyledTodoMsg';

const TodoMsg = ({ msg }) => {
  return <StyledTodoMsg>{msg}</StyledTodoMsg>;
};

export { TodoMsg };
