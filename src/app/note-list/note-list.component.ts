import { Component, Inject, OnInit } from '@angular/core';
import { Store } from 'redux';

import { AppStore } from '../app-redux/app-store';
import { AppState } from '../app-redux/app-state';
import * as NoteActions from '../app-redux/note-action-creators';
import { Note } from '../note';
import { NoteService } from '../note.service';

@Component({
  selector: 'note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css'],
  providers: [NoteService]
})
export class NoteListComponent implements OnInit {
  search: string;
  filteredNotes: Array<Note>;
  selectedNote: Note;
  show: string;

  constructor(
    @Inject(AppStore) private store: Store<AppState>,
    private noteService: NoteService) {
  }

  ngOnInit() {
    // 订阅数据变动
    this.store.subscribe(() => this.readState());
    this.readState();
    this.selectedNote = this.filteredNotes[0];
  }

  readState() {
    let state: AppState = this.store.getState() as AppState;
    this.show = state.show;
    if (state.show === 'favorite') {
      this.filteredNotes = state.notes.filter((note) => note.favorite === true);
      // 切换别的类型。默认选中第一项
      this.selectedNote = this.filteredNotes[0];
    } else {
      this.filteredNotes = state.notes;
    }
  }

  toggleShow(show: string) {
    this.store.dispatch(NoteActions.toggleShow(show));
  }

  onSelected(note: Note) {
    this.selectedNote = note;
    this.store.dispatch(NoteActions.updateActiveNote(note));
  }
}
