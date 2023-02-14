import React, { useEffect } from 'react';
import { ReactSortable } from 'react-sortablejs';
import { ThemeProvider } from 'styled-components';
import { useTheme } from './hooks/useTheme';
import { Themes } from './themes/Themes';
import { useFilters } from './hooks/useFilters';
import { useTodo } from './hooks/useTodo';
import { GlobalStyles } from './GlobalStyles';
import { Top } from './Components/Top/Top';
import { TodoContainer } from './Components/todoContainer/TodoContainer';
import { Header } from './Components/Header/Header';
import { TodoInput } from './Components/TodoInput/TodoInput';
import { TodoList } from './Components/TodoList/TodoList';
import { TodoItem } from './Components/TodoItem/TodoItem';
import { TodoListFooter } from './Components/TodoListFooter/TodoListFooter';
import { TodoFilters } from './Components/TodoFilters/TodoFilters';
import { Filters, FiltersDesk } from './Components/Filters/Filters';
import { Legend } from './Components/Legend/Legend';
import { Footer } from './Components/Footer/Footer';
import { TodoMsg } from './Components/TodoMsg/TodoMsg';

function App() {
  const { theme, changeTheme } = useTheme();
  const {
    todos,
    setCompletedTodos,
    addTodo,
    handleDeleteTodo,
    todosLeft,
    totalTodos,
    setTodos,
    handleClearCompletes,
  } = useTodo();

  const {
    activeFilter,
    filterTodos,
    setFilterTodos,
    showAllTodos,
    showActiveTodos,
    showCompletedTodos,
  } = useFilters();

  useEffect(() => {
    const filteredTodos =
      activeFilter === 'all'
        ? todos
        : todos.filter(
            (todo) => todo.completed === (activeFilter === 'completed')
          );
    setFilterTodos(filteredTodos);
  }, [activeFilter, todos]);

  const handleSortableChange = (newTodos) => {
    setFilterTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  return (
    <>
      <ThemeProvider theme={Themes[theme]}>
        <GlobalStyles />
        <Top theme={theme} />
        <TodoContainer>
          <Header theme={theme} changeTheme={changeTheme} />
          <TodoInput addTodo={addTodo} />
          <TodoList>
            {filterTodos == '' && totalTodos !== 0 && (
              <TodoMsg
                msg={`There's nothing to show here, try another filter`}
              />
            )}
            {totalTodos === 0 && <TodoMsg msg={`¡Come on! create a todo`} />}
            <ReactSortable
              list={filterTodos}
              setList={handleSortableChange}
              className='sortable-container'
              chosenClass='chosen'
              animation={200}
              dragClass='drag'
            >
              {filterTodos !== '' &&
                filterTodos.map((todo, index) => (
                  <TodoItem
                    key={index}
                    setCompletedTodos={setCompletedTodos}
                    todo={todo}
                    handleDeleteTodo={handleDeleteTodo}
                  />
                ))}
            </ReactSortable>
            <TodoListFooter
              todosLeft={todosLeft}
              handleClearCompletes={handleClearCompletes}
            >
              <FiltersDesk
                showAllTodos={showAllTodos}
                showActiveTodos={showActiveTodos}
                showCompletedTodos={showCompletedTodos}
                activeFilter={activeFilter}
              />
            </TodoListFooter>
          </TodoList>
          <TodoFilters>
            <Filters
              showAllTodos={showAllTodos}
              showActiveTodos={showActiveTodos}
              showCompletedTodos={showCompletedTodos}
              activeFilter={activeFilter}
            />
          </TodoFilters>
          <Legend />
        </TodoContainer>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
