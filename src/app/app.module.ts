import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NoteDetailsComponent } from './note-details/note-details.component';
import { NoteListsComponent } from './note-details/note-lists/note-lists.component';
import { NoteServiceService } from './note-service.service';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteDetailsComponent,
    NoteListsComponent,
    EditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [NoteServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
