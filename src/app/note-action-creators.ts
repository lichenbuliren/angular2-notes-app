import { Action, ActionCreator } from 'redux';

export const ADD_NOTE: string = 'ADD_NOTE';
export const addNote: ActionCreator<Action> = (note) => ({
  type: ADD_NOTE,
  note: note
});

export const DEL_NOTE: string = 'DEL_NOTE';
export const delNote: ActionCreator<Action> = (note) => ({
  type: DEL_NOTE,
  note: note
});
