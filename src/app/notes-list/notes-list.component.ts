import { Component, OnInit,AfterViewInit, Input} from '@angular/core';
import { Note } from '../note.model';
import { Router } from '@angular/router';
import { NotesService } from '../shared/notes.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit{

  myNote:Note[] = new Array<Note>();
  note:any=[];
  realNote!:Note[];
  constructor(private noteservice:NotesService, private router:Router) { }
  
  ngOnInit(): void {
    this.note = localStorage.getItem("note");
    this.realNote = JSON.parse(this.note);
  }


  redirect(){
    this.router.navigateByUrl('/notes');
    
  }

}
