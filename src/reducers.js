/*jshint esversion:6*/

import { combineReducers } from 'redux';

import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from './actions';
const { SHOW_ALL } = VisibilityFilters;

var nextId = 0;
function todos(state=[], action) {
  switch (action.type) {
    case ADD_TODO: {
      return state.concat([{text: action.text, completed: false, id: nextId++}]);
    }
    case TOGGLE_TODO: {
      return state.map((e, i) => {
        if (i === action.index) {
          return Object.assign({}, e, {
            completed: !e.completed
          });
        }
        return e;
      });
    }
    default: {
      return state;
    }
  }
}

function visibilityFilter(state=SHOW_ALL, action) {
  if (action.type === SET_VISIBILITY_FILTER) {
    return action.filter;
  }
  else return state;
}

//main reducer
const todoApp = combineReducers({
  visibilityFilter,
  todos,
});

export default todoApp;
