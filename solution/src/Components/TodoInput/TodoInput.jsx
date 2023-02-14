import React, { useState } from 'react';
import { StyledTodoInput } from './StyledTodoInput';

const TodoInput = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleAddTodo = (e) => {
    if (e.key.toLowerCase() === 'enter') {
      addTodo(text);
      setText('');
    }
  };

  return (
    <StyledTodoInput>
      <figure className='circle'>
        <div className='div circle__inner'></div>
      </figure>
      <input
        type='text'
        className='todoInput'
        placeholder='Create a new todo...'
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => handleAddTodo(e)}
      />
    </StyledTodoInput>
  );
};

export { TodoInput };
