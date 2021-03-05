import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ITodo } from '../interfaces/todo';

@Component({
  selector: 'app-todo-list-header',
  templateUrl: './todo-list-header.component.html',
  styleUrls: ['./todo-list-header.component.css']
})
export class TodoListHeaderComponent implements OnInit {
  inputHint = 'Add New Todo Here...';
  newTodoTitle: string;

  @Input()
  todoTitle: string;

  @Output()
  handleAddTodo = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  addTodo(todo): void {
    this.handleAddTodo.emit(this.todoTitle);
    console.log(this.todoTitle);
  }

}
