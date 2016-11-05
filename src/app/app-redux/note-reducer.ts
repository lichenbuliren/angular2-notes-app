import { Reducer } from 'redux';
import { AppState } from './app-state';

import { NOTES } from '../mock-notes';
import * as NoteActions from './note-action-creators';


let initialState: AppState = {
  notes: NOTES,
  activeNote: NOTES[0],
  show: 'all'
};

// 构建 reducer 辅助方法
let createReducer =  (initialState, handlers) => {
  return (state = initialState, action) => {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    } else {
      return state;
    }
  }
};

// 所有的 action 类型方法，返回一个键值映射对象
let reducerHandler = () => ({
  [NoteActions.ADD_NOTE]: (state, action) => {
    return (<any>Object).assign({}, state, {
      notes: state.notes.concat((<NoteActions.CommonStateAction>action).note)
    });
  },
  [NoteActions.DEL_NOTE]: (state, action) => {
    console.log(state);
    console.log((<NoteActions.CommonStateAction>action).id);
    return (<any>Object).assign({}, state, {
      notes: state.notes.filter((note) => note.id !== (<NoteActions.CommonStateAction>action).id)
    });
  },
  [NoteActions.UPDATE_ACTIVE_NOTE]: (state, action) => {
    return (<any>Object).assign({}, state, {
      activeNote: (<NoteActions.CommonStateAction>action).note
    });
  },
  [NoteActions.TOGGLE_SHOW]: (state, action) => {
    return (<any>Object).assign({}, state, {
      show: (<NoteActions.CommonStateAction>action).show
    });
  },
  [NoteActions.TOGGLE_NOTE_FAVORITE]: (state, action) => {
    // 获取数组副本
    let oldNotes = state.notes.slice();
    let currentActiveNote = (<NoteActions.CommonStateAction>action).note;
    currentActiveNote.favorite = !currentActiveNote.favorite;
    oldNotes.forEach((note) => {
      if (note == currentActiveNote) {
        note.favorite = !note.favorite;
        return;
      }
    });
    return (<any>Object).assign({}, state, {
      notes: oldNotes,
      activeNote: currentActiveNote
    });
  }
});

export const noteReducer: Reducer<AppState> = createReducer(initialState, reducerHandler());
