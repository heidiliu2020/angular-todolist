import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { SortablejsModule } from 'ngx-sortablejs';

import { AppComponent } from 'src/app/app.component';
import { TodoListComponent } from 'src/app/components/todo-list/todo-list.component';
import { TodoListFooterComponent } from 'src/app/components/todo-list-footer/todo-list-footer.component';
import { TodoListHeaderComponent } from 'src/app/components//todo-list-header/todo-list-header.component';

import { FilterPipe } from 'src/app/pipes/filter.pipe';
import { PomodoroComponent } from './components/pomodoro/pomodoro.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoListFooterComponent,
    FilterPipe,
    TodoListHeaderComponent,
    PomodoroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
    MatIconModule,
    SortablejsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
