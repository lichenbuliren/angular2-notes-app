import { Component, OnInit, Input } from '@angular/core';

import { Note } from '../note';

@Component({
  selector: 'note-editor',
  templateUrl: './note-editor.component.html',
  styleUrls: ['./note-editor.component.css']
})
export class NoteEditorComponent implements OnInit {
  @Input() note: Note;
  constructor() {}

  ngOnInit() {
  }

}
