import React, { useEffect, useState } from 'react';
import { useFilters } from './useFilters';

const useTodo = () => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem('todos')) || []
  );

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const generateId = Date.now().toString();
    const newTodo = {
      id: generateId,
      text,
      completed: false,
    };
    const todoList = [...todos];
    todoList.push(newTodo);
    setTodos(todoList);
  };

  const setCompletedTodos = (id) => {
    const updateTodoList = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updateTodoList);
  };

  const handleDeleteTodo = (id) => {
    const updateList = todos.filter((todo) => todo.id !== id);
    setTodos(updateList);
  };
  const handleClearCompletes = () => {
    const updateList = todos.filter((todo) => !todo.completed);
    setTodos(updateList);
  };

  const todosLeft = todos.filter((todo) => !todo.completed).length;

  const totalTodos = todos.length;

  return {
    handleClearCompletes,
    todos,
    setTodos,
    setCompletedTodos,
    addTodo,
    handleDeleteTodo,
    todosLeft,
    setTodos,
    totalTodos,
    setTodos,
  };
};

export { useTodo };
