import { Note } from './note';

export interface AppState {
  notes: Array<Note>;
  activeNote: Object;
  show: string;
}
