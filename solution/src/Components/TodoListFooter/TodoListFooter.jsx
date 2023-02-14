import React from 'react';
import { StyledTodoListFooter } from './StyledTodoListFooter';

const TodoListFooter = ({ handleClearCompletes, todosLeft, children }) => {
  return (
    <StyledTodoListFooter>
      <p className='itemsLeft'>{todosLeft} items left</p>
      {children}
      <button
        className='clearBtn'
        title='Clear TODOS completed'
        onClick={handleClearCompletes}
      >
        Clear completed
      </button>
    </StyledTodoListFooter>
  );
};

export { TodoListFooter };
