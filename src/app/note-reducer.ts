import { Reducer, Action } from 'redux';
import { AppState } from './app-state';
import { ADD_NOTE, DEL_NOTE } from './note-action-creators';

let initialState: AppState = {
  notes: [],
  activeNote: {},
  show: 'all'
};

export const noteReducer: Reducer<AppState> = (state: AppState = initialState, action: Action) => {
  switch (action.type) {
    case ADD_NOTE:
      return Object.assign({}, state, { notes: state.notes.concat(action.note)});
    default:
      // code...
      break;
  }
}
