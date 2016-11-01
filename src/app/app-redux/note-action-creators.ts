import { Action, ActionCreator } from 'redux';
import { Note } from '../note';

/**
 * Redux 中的 action 只是一个接口， 只有一个 type 类型的字段，
 * 在这里我们需要自己扩展我们所需要的东西
 */

export interface AddNoteAction extends Action {
  note: Note
}
export const ADD_NOTE: string = 'ADD_NOTE';
export const addNote: ActionCreator<Action> = (note: Note) => ({
  type: ADD_NOTE,
  note: note
});

export interface DelNoteAction extends Action {
  id: number
}
export const DEL_NOTE: string = 'DEL_NOTE';
export const delNote: ActionCreator<Action> = (id: number) => ({
  type: DEL_NOTE,
  id: id
});

export interface UpdateActiveNoteAction extends Action {
  note: Note
}
export const UPDATE_ACTIVE_NOTE: string = 'UPDATE_ACTIVE_NOTE';
export const updateActiveNote: ActionCreator<Action> = (note: Note) => ({
  type: UPDATE_ACTIVE_NOTE,
  note: note
});


export interface ToggleShowAction extends Action {
  show: string;
}
export const TOGGLE_SHOW: string = 'TOGGLE_SHOW';
export const toggleShow: ActionCreator<Action> = (show: string) => ({
  type: TOGGLE_SHOW,
  show: show
});

export interface ToggleNoteFavoriteAction extends Action {
  note: Note
}
export const TOGGLE_NOTE_FAVORITE = 'TOGGLE_NOTE_FAVORITE';
export const toggleNoteFavorite: ActionCreator<Action> = (note: Note) => ({
  type: TOGGLE_NOTE_FAVORITE,
  note: note
});
