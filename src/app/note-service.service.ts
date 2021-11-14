import { ThrowStmt } from '@angular/compiler';
import { Injectable, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Observable, Subject } from 'rxjs'; // Subject from RXJS is called here 
import { Note } from './note.model';

@Injectable({
  providedIn: 'root'
})
export class NoteServiceService implements OnInit{

  // implementing subject here to listen for storage calls 
   private subject =  new Subject();
   public notesub: Note[] = [];
   count!:any;
   shout(val: any){
     this.subject.next(val);
   }

   hear():Observable<any>{
      return this.subject.asObservable();
   }

   note:any[]= [];
   storeNote!:any;
   notee:any=[];
   realNote!:Note[];
  
  constructor() {}
  ngOnInit(){
  }

   getall(){
      return this.note;
    }

    showSearch(i:number){
      console.log(this.note[i]);
      this.notesub.push(this.note[i]);
    
    }

  add(form:any){
   this.note.push(form);
 }





  
}


// let re = /[A-Z]/;
// let str = 'hi There! How are you?';
// let index = str.search(re);

// console.log(index);
