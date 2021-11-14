import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NoteServiceService } from '../note-service.service';
import { Note } from '../note.model';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.css']
})
export class NoteDetailsComponent implements OnInit {


  constructor(private noteservice:NoteServiceService) { 
  }

  note!:Note;
  storeNote!:Note[];
  subArr!:Note[];
  title!:any;
  delete:boolean = true;


  ngOnInit(): void {
    this.note = new Note();
    if(this.noteservice.note.length == 0){ this.delete = true;}
    this.noteservice.note
    }

  // using rxjs subject 
  // here the form value is being emitted but no one is capturing the data
  log1(form:NgForm){
      this.noteservice.shout(form);
      if(this.noteservice.note.length == 0){
        this.delete = true;
      }else {
         this.delete = false
      }
      
    }



 del(){
   this.noteservice.note.length = 0;
 }


  }
