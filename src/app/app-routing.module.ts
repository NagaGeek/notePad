import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EditComponent } from './edit/edit.component';
import { NoteDetailsComponent } from './note-details/note-details.component';
import { NoteListsComponent } from './note-details/note-lists/note-lists.component';


const routes: Routes = [ 
  {path: "id", component: NoteListsComponent},
  {path:"note-edit", component:EditComponent}
  
];

// here the router outlet will inject the noteslistcomponent 
//into the main layout component since we are defining it as a child 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
