import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations'

import { StorageService } from './../services/storage.service';
import { TodoService } from './../services/todo.service';
import { ITodo } from '../interfaces/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  providers: [TodoService],
  animations: [
    trigger('fade', [       // 增加 fade 動畫

      // 進入: 需設定初始值
      transition(':enter', [
        style({opacity: 0, transform: 'translateY(35px)'}),
        animate(400, style({opacity: 1, transform: 'translateXY(0px)'}))
      ]),
      // 離開
      transition(':leave', [
        animate(400, style({opacity: 0, transform: 'translateX(100px)'}))
      ]),

    ])
  ]
})
export class TodoListComponent implements OnInit {
  inputHint = 'Add New Todo Here...';
  todoTitle = '';
  todoId = 1;
  filterType = 'All';
  todos: ITodo[] = [];

  // 建構子: 注入 Service 依賴
  constructor(
    private storageService: StorageService,
    private todoService: TodoService) {
    const todoArr = this.storageService.getData('todos');

    // if (todoArr) {
    //   this.todos = todoArr;
    // }

    this.todos = this.todoService.getAodosArr();
  }

  // 初始化時呼叫
  ngOnInit(): void {
    this.todoId = 1;
   }



  // 新增 Todo
  addTodo(): void {
    if (!this.todoTitle.trim().length) {
      return;       // input 為空則返回
    }
    // this.todoService.addTodo(this.todoTitle);

    // this.todos.push({     // 把狀態暫存在 model
    //   id: this.todoId,
    //   title: this.todoTitle.trim(),
    //   isDone: false,
    //   isEditing: false
    // });
    // this.todoTitle = '';
    // this.todoId++;
    // this.saveTodos();
  }

  // // 刪除 Todo
  // removeTodo(id: number): void {
  //   this.todos = this.todos.filter(todo => todo.id !== id);
  //   // 等同於 this.todos.splice(this.todos.indexOf(todo), 1);
  //   this.saveTodos();
  // }

  // // 編輯 Todo
  // editTodo(todo, editInput): void {
  //   if (todo.isDone) {      // 已完成的 Todo 無法編輯
  //     return;
  //   }
  //   todo.isEditing = true;
  //   // 編輯時自動 focus: 需考慮執行順序
  //   setTimeout((): void => editInput.focus());
  //   this.saveTodos();
  // }

  // // 判斷是否編輯完成
  // doneEdit(todo): void {
  //   if (!todo.isEditing) {
  //     return;
  //   }
  //   todo.isEditing = false;
  //   todo.title = todo.title.trim();
  //   if (!todo.title) {
  //     this.removeTodo(todo);
  //   }
  //   this.saveTodos();
  // }

  // // 清除已完成 Todos
  // clearCompleted(): void {     // 外層元件接收到訊息後要執行的動作
  //   this.todos = this.todos.filter(todo => !todo.isDone);
  //   this.saveTodos();
  // }

  // // 篩選 Todos 狀態
  // filterTypeChanged(filterType: string): void {
  //   this.filterType = filterType;
  // }
}
