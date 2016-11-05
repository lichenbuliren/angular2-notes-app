import {Component, Inject} from '@angular/core';
import {Store} from 'redux';

import {AppStore} from '../app-redux/app-store';
import {AppState} from '../app-redux/app-state';
import {Note} from '../note';

@Component({
  selector: 'note-editor',
  templateUrl: './note-editor.component.html',
  styleUrls: ['./note-editor.component.css']
})
export class NoteEditorComponent {
  note: Note;

  constructor(@Inject(AppStore) private store: Store<AppState>) {
    this.store.subscribe(() => this.readState());
    this.readState();
  }

  readState() {
    let state: AppState = this.store.getState() as AppState;
    this.note = state.activeNote;
  }
}
