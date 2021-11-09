
import { Component, OnInit, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Note } from '../note.model';
import { NotesService } from '../shared/notes.service';

@Component({
  selector: 'notedetails',
  templateUrl: './notedetails.component.html',
  styleUrls: ['./notedetails.component.css']
})
export class NotedetailsComponent implements OnInit {

  constructor(private noteservice: NotesService, private router: Router) { }
   notes!: Note; // data will flow form the input elements to the node of type Note 

  ngOnInit(): void {
    this.notes = new Note();
  }

  onSubmit(form: NgForm){
    // we want to save the note with this method to an array
    console.log(form.value);
    this.noteservice.add(form.value);
    this.router.navigateByUrl("/");
    this.noteservice.store();
    
  }
}
