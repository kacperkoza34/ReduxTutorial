import { combineReducers } from 'redux';
import { initialActors, initialMovies} from './data'

function movies(state = initialMovies, action) {
  switch (action.type) {
    case 'ADD_MOVIE':
      return {
        ...state, list: [...state.list, action.item]
      }
    case 'RESET_MOVIES':
      return {
        ...state, list: []
      }
    default:
      return state;
  }
}

function actors(state = initialActors, action) {
  switch (action.type) {
    case 'ADD_ACTOR':
      return {
        ...state, list: [...state.list, action.item]
      }
    case 'RESET_ACTORS':
      return {
         ...state, list: []
      }
    default:
      return state;
  }
}

export const allReducers = combineReducers({movies, actors});
