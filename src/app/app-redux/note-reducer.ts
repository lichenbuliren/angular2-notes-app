import { Reducer, Action } from 'redux';
import { AppState } from './app-state';

import { Note } from '../note';
import { NOTES } from '../mock-notes';
import * as NoteActions from './note-action-creators';


let initialState: AppState = {
  notes: NOTES,
  activeNote: NOTES[0],
  show: 'all'
};

export const noteReducer: Reducer<AppState> = (state: AppState = initialState, action: Action) => {
  switch (action.type) {
    case NoteActions.ADD_NOTE:
      return Object.assign({}, state, {
        notes: state.notes.concat((<NoteActions.AddNoteAction>action).note)
      });
    case NoteActions.DEL_NOTE:
      return Object.assign({}, state, {
        notes: state.notes.filter((note) => note.id !== (<NoteActions.DelNoteAction>action).id)
      });
    case NoteActions.UPDATE_ACTIVE_NOTE:
      return Object.assign({}, state, {
        activeNote: (<NoteActions.UpdateActiveNoteAction>action).note
      });
    case NoteActions.TOGGLE_SHOW:
      return Object.assign({}, state, {
        show: (<NoteActions.ToggleShowAction>action).show
      })
    case NoteActions.TOGGLE_NOTE_FAVORITE:
      // 获取数组副本
      let oldNotes = state.notes.slice();
      let newNote = (<NoteActions.ToggleNoteFavoriteAction>action).note;
      let activeNote: Note;
      oldNotes.forEach((note) => {
        if (note == newNote) {
          note.favorite = !note.favorite
          activeNote = note;
          return;
        }
      });
      return Object.assign({}, state, {
         notes: oldNotes,
         activeNote: activeNote
      });
    default:
      return state;
  }
}
