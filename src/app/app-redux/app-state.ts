import { Note } from '../note';

export interface AppState {
  notes: Array<Note>;
  activeNote: Note;
  show: string;
}
