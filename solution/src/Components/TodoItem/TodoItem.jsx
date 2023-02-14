import React from 'react';
import { StyledTodoItem } from './StyledTodoItem';
import { AiOutlineClose } from 'react-icons/ai';
import { FaCheck } from 'react-icons/fa';

const TodoItem = ({ setCompletedTodos, todo, handleDeleteTodo }) => {
  const { id, text, completed } = todo;
  return (
    <StyledTodoItem className='sortable-item'>
      <figure
        className={`circle ${completed && 'circle--completed'}`}
        title='Mark as completed'
        onClick={() => setCompletedTodos(id)}
      >
        <div
          className={`circle__inner ${completed && 'circle__inner--completed'}`}
        >
          <FaCheck
            className={`circle__inner__icon ${
              completed && 'circle__inner__icon--completed'
            }`}
          />
        </div>
      </figure>
      <p
        className={`text ${completed && 'text--completed'}`}
        title='Mark as completed'
        onClick={() => setCompletedTodos(id)}
      >
        {text}
      </p>
      <AiOutlineClose
        className='deleteIcon'
        title='Delete todo'
        onClick={() => handleDeleteTodo(id)}
      />
    </StyledTodoItem>
  );
};

export { TodoItem };
