import { Component, OnInit } from '@angular/core';

import { Note } from '../note';
import { NOTES } from '../mock-notes';

@Component({
  selector: 'note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {
  search: string;
  selectedNote: Note;
  filteredNotes: Note[];

  constructor() {
    this.filteredNotes = NOTES;
    this.selectedNote = this.filteredNotes[0];
  }

  ngOnInit() {
  }

  onSelected(note: Note) {
    this.selectedNote = note;
  }
}
