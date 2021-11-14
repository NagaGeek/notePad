import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NoteServiceService } from '../note-service.service';
import { Note } from '../note.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private noteservice:NoteServiceService) { }
  note:Note[] = [];
  title!:Note;
  body!:Note;

  ngOnInit(): void {
      this.note.push(...this.noteservice.notesub);
      console.log(this.note)
  }

  log1(form:NgForm){
    console.log('do something');
  }

  save(){
    this.note.push(this.title, this.body);
    this.noteservice.notesub.length= 0;
    this.noteservice.notesub.push(...this.note);
  }
  

}
