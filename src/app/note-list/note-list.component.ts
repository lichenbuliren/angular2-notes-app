import { Component, OnInit } from '@angular/core';

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
  activeNote: Note;
  noteList: Note[];

  constructor(private noteService: NoteService) {

  }

  ngOnInit() {
    this.noteList = noteService.getNotes();
    this.activeNote = noteService.getActiveNote(this.noteList[0].id);
  }

  onSelected(note: Note) {
    this.selectedNote = note;
  }
}
