import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputHint = "Add Todo...";
  todos: any[] = [];
  todo = '';

  addTodo() {
    this.todos.push(this.todo);
    this.todo = "";
  }
}
