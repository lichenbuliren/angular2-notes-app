import { Injectable } from '@angular/core';

import { Note } from './note';
import { NOTES } from './mock-notes';

@Injectable()
export class NoteService {

  constructor() { }

  getNotes(): Promise<Note[]> {
    return Promise.resolve(NOTES);
  }

  getActiveNote(id: number): Promise<Note> {
    return this.getNotes().then(notes => notes.find(note => note.id === id));
  }
}
