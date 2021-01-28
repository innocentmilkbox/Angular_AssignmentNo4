import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  public note: NoteModel = new NoteModel();
  public notes: NoteModel[] = [];
  public selectedNote: NoteModel;
  public selectedrowindex: number;
  constructor() { }

  ngOnInit() {
  }

  public btnAddNote_Click(): void {
    this.notes.push(this.note);    
    this.note = new NoteModel();
  }

  public row_Click(item: NoteModel, index: number) {
    this.selectedNote = item;
    this.selectedrowindex = index;
  }
}

export class NoteModel {
  public DateNote: Date = new Date();
  public Note: string = '';
}