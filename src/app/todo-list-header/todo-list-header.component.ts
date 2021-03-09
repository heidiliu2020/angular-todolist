import { TodoService } from './../services/todo.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ITodo } from '../interfaces/todo';

@Component({
  selector: 'app-todo-list-header',
  templateUrl: './todo-list-header.component.html',
  styleUrls: ['./todo-list-header.component.css']
})
export class TodoListHeaderComponent implements OnInit {
  inputHint = 'Add New Todo Here...';

  @Input()
  todoTitle: string;

  @Output()
  handleAddTodo = new EventEmitter<string>();

  constructor(public todoService: TodoService) { }

  ngOnInit(): void { }

  // emit handleAddTodo 事件
  doHandleAddTodo(): void {
    if (!this.todoTitle) { return; }
    this.handleAddTodo.emit(this.todoTitle);
    // 新增完清空 input
    this.todoTitle = '';
  }

}
