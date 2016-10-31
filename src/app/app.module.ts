import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { createStore, Store, StoreEnhancer } from 'redux';

import { AppState } from './app-state';
import { AppStore } from './app-store';
import { noteReducer } from './note-reducer';

import { AppComponent } from './app.component';
import { NoteToolbarComponent } from './note-toolbar/note-toolbar.component';
import { NoteListComponent } from './note-list/note-list.component';
import { NoteEditorComponent } from './note-editor/note-editor.component';

let devTools: StoreEnhancer<AppState> = window['devToolsExtension'] ? window['devToolsExtension']() : f => f

let store: Store<AppState> = createStore<AppState>(
  noteReducer,
  devTools
);

@NgModule({
  declarations: [
    AppComponent,
    NoteToolbarComponent,
    NoteListComponent,
    NoteEditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [{
    provide: AppStore,
    useValue: store
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
