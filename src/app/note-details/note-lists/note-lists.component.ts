
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import * as Aos from 'aos';
import { NoteServiceService } from 'src/app/note-service.service';
import { Note } from 'src/app/note.model';


@Component({
  selector: 'app-note-lists',
  templateUrl: './note-lists.component.html',
  styleUrls: ['./note-lists.component.css']
})
export class NoteListsComponent implements OnInit {
  constructor(private noteservice: NoteServiceService, private router: Router) {
   }
   
   subNote:Note[] = [];
   note:any=[];
   realNote:Note[] = [];
   noteme = this.noteservice.note;
   hello:any;
   searchTitle!:any;
   remind: boolean= false;
   warn: string = "no results found!!"
   searchShow:Note[]= [];
  @Input () mynote!:Note[];
   
   ngOnInit(): void {
    // aos animation library init
    Aos.init({duration: 500,easing: 'ease-in-out' });  

    this.noteservice.hear().subscribe((d)=>{
      this.subNote.push(d);
      console.log(this.subNote)
      localStorage.setItem('Note', JSON.stringify(this.subNote));
      this.hello =  localStorage.getItem('Note');
      JSON.parse(this.hello);
      this.subNote.push(this.hello);
      this.subNote.pop();
      this.subNote = this.noteservice.note;
      console.log("after", this.subNote);
    }); 
  }

  search(){
    this.subNote.forEach((item, i)=>{
      if(item.title.toLocaleLowerCase().trim() === this.searchTitle.toLowerCase().trim()){
        this.noteservice.showSearch(i);
      }
    })
  }

}
