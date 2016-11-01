import { Component, Inject, OnInit } from '@angular/core';
import { Store } from 'redux';

import { AppStore } from '../app-redux/app-store';
import { AppState } from '../app-redux/app-state';
import * as NoteActions from '../app-redux/note-action-creators';
import { Note } from '../note';

@Component({
  selector: 'note-toolbar',
  templateUrl: './note-toolbar.component.html',
  styleUrls: ['./note-toolbar.component.css']
})
export class NoteToolbarComponent implements OnInit{
  activeNote: Note;

  constructor(@Inject(AppStore) private store: Store<AppState>) {}

  ngOnInit() {
    this.store.subscribe(() => this.readState());
    this.readState();
  }

  readState() {
    let state: AppState = this.store.getState() as AppState;
    this.activeNote = state.activeNote;
  }

  addNote() {
    this.store.dispatch(NoteActions.addNote(new Note(11, 'hello', 'world', false)));
  }

  delNote() {
    this.store.dispatch(NoteActions.delNote(11));
  }

  toggleFavorite() {
    this.store.dispatch(NoteActions.toggleNoteFavorite(this.activeNote));
  }

}
