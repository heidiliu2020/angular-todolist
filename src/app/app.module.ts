import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from 'src/app/app.component';
import { TodoListComponent } from 'src/app/todo-list/todo-list.component';
import { TodoStatusComponent } from 'src/app/todo-status/todo-status.component';

import { FilterPipe } from 'src/app/pipes/filter.pipe';
import { StorageService } from 'src/app/services/storage.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoStatusComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
