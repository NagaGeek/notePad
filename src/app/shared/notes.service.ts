import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Note } from '../note.model';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  // this is where all the titles and body text will be soted in the form of an array 
  notes: Note[] = new Array<Note>();
  note!:any;

  
  constructor() { }
  // creating methods to access the array 

  getAll(){
    return this.notes;
  }
  store(){
    this.note = JSON.stringify(this.notes);
    localStorage.setItem("note", this.note);
    return this.note;
  }

  retrieve(){
      localStorage.getItem(JSON.parse(this.note))
  }

// here i corresponds to the index of the current data
  get(i:number){
    return this.notes[i];
  }
//this method will retrieve the index of a note object
  getId(paramNote: Note){
      return this.notes.indexOf(paramNote);
  }

  // this will take in a note and add it to the array

  add(note : Note){
    let length = this.notes.push(note);
    console.log(length);
    let index = length-1;//0 indexing
    return index;
  }

  update(i: number, title: string, body: string){
    let note = this.notes[i];
    note.title = title;
    note.body = body;
  }

  del(i:number){
    this.notes.splice(i, 1); //first param is the start index to splice second is the no of elemetns to be removed
  }

}
