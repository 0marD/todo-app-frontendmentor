import React from 'react';
import { StyledFilters, StyledFiltersDesk } from './StyledFilters';

const Filters = ({
  showAllTodos,
  showActiveTodos,
  showCompletedTodos,
  activeFilter,
}) => {
  return (
    <StyledFilters>
      <button
        className={` filter ${activeFilter === 'all' && 'filter--active'}`}
        title='Show all TODOS'
        onClick={showAllTodos}
      >
        All
      </button>
      <button
        className={` filter ${activeFilter === 'active' && 'filter--active'}`}
        title='Show Active TODOS'
        onClick={showActiveTodos}
      >
        Active
      </button>
      <button
        className={` filter ${
          activeFilter === 'completed' && 'filter--active'
        }`}
        title='Show Completed TODOS'
        onClick={showCompletedTodos}
      >
        Completed
      </button>
    </StyledFilters>
  );
};

const FiltersDesk = ({
  showAllTodos,
  showActiveTodos,
  showCompletedTodos,
  activeFilter,
}) => {
  return (
    <StyledFiltersDesk>
      <button
        className={` filter ${activeFilter === 'all' && 'filter--active'}`}
        title='Show all TODOS'
        onClick={showAllTodos}
      >
        All
      </button>
      <button
        className={` filter ${activeFilter === 'active' && 'filter--active'}`}
        title='Show Active TODOS'
        onClick={showActiveTodos}
      >
        Active
      </button>
      <button
        className={` filter ${
          activeFilter === 'completed' && 'filter--active'
        }`}
        title='Show Completed TODOS'
        onClick={showCompletedTodos}
      >
        Completed
      </button>
    </StyledFiltersDesk>
  );
};

export { Filters, FiltersDesk };
