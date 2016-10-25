import { Component, OnInit } from '@angular/core';

import { Note } from '../note';

@Component({
  selector: 'note-toolbar',
  templateUrl: './note-toolbar.component.html',
  styleUrls: ['./note-toolbar.component.css']
})
export class NoteToolbarComponent implements OnInit {
  activeNote: Note;

  constructor() {}

  ngOnInit() {
  }

}
