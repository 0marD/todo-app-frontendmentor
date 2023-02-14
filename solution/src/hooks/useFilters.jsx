import React, { useEffect, useState } from 'react';
import { useTodo } from './useTodo';

const useFilters = () => {
  const { todos, setTodos } = useTodo();

  const [activeFilter, setActiveFilter] = useState('all');
  const [filterTodos, setFilterTodos] = useState(todos);

  const showAllTodos = () => {
    setActiveFilter('all');
  };
  const showActiveTodos = () => {
    setActiveFilter('active');
  };
  const showCompletedTodos = () => {
    setActiveFilter('completed');
  };

  useEffect(() => {
    const filteredTodos =
      activeFilter === 'all'
        ? todos
        : todos.filter(
            (todo) => todo.completed === (activeFilter === 'completed')
          );
    setFilterTodos(filteredTodos);
  }, [activeFilter, todos]);

  return {
    activeFilter,
    setActiveFilter,
    filterTodos,
    setFilterTodos,

    showAllTodos,
    showActiveTodos,
    showCompletedTodos,
  };
};

export { useFilters };
