import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from 'src/app/app.component';
import { TodoListComponent } from 'src/app/todo-list/todo-list.component';
import { TodoListFooterComponent } from 'src/app/todo-list-footer/todo-list-footer.component';

import { FilterPipe } from 'src/app/pipes/filter.pipe';
import { StorageService } from 'src/app/services/storage.service';
import { TodoListHeaderComponent } from './todo-list-header/todo-list-header.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoListFooterComponent,
    FilterPipe,
    TodoListHeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
