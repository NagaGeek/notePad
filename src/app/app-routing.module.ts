import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { NotedetailsComponent } from './notedetails/notedetails.component';
import { NotesListComponent } from './notes-list/notes-list.component';

const routes: Routes = [
  {path:'', component:MainLayoutComponent, 
    children:[{path:'', component:NotesListComponent},
    {path: ':id', component: NotedetailsComponent}
  ]
} 
  
];

// here the router outlet will inject the noteslistcomponent 
//into the main layout component since we are defining it as a child 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
