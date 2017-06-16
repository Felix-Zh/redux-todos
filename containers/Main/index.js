import React from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleTodo } from '../../actionCreator/todos';
import { setVisibilityFilter } from '../../actionCreator/visibilityFilter';
import { VisibilityFilters } from '../../constants/constants';
import Input from './components/Input';
import List from './components/List';
import Filter from './components/Filter';


const Main = props => {
  const { dispatch } = props;

  return (
    <div>
      <Input
        onAddTodo={text => dispatch(addTodo(text))}
      />
      <List
        todos={props.todos}
        onToggleTodo={idx => dispatch(toggleTodo(idx))}
      />
      <Filter
        currentFilter={props.visibilityFilter}
        onFilterChange={targetFilter => dispatch(setVisibilityFilter(targetFilter))}
      />
    </div>
  );
};

function filterTodos(todos, filter) {
  switch (filter) {
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed === true);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(todo => todo.completed === false);
    case VisibilityFilters.SHOW_ALL:
    default:
      return todos;
  }
}

const mapStateToProps = (state) => {
  const { visibilityFilter } = state;

  return {
    todos: filterTodos(state.todos, visibilityFilter),
    visibilityFilter: visibilityFilter
  };
};

export default connect(mapStateToProps)(Main);
