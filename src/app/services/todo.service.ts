import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Todo } from '../todo';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(
    private storageService: StorageService) { }


  // // 新增 Todo
  // addTodo(): void {
  //   if (this.todo.trim().length === 0) {
  //     return;       // input 為空則返回
  //   }
  //   this.todos.push({     // 把狀態暫存在 model
  //     text: this.todo,
  //     done: false
  //   });
  //   this.todo = '';
  //   this.saveTodos();
  // }

  // // 刪除 Todo
  // removeTodo(todo): void {
  //   this.todos.splice(this.todos.indexOf(todo), 1);
  //   this.saveTodos();
  // }

  // // 編輯 Todo
  // editTodo(todo, editInput): void {
  //   if (todo.done) {      // 已完成的 Todo 無法編輯
  //     return;
  //   }
  //   this.editedTodo = todo;

  //   // 編輯時自動 focus input: 需考慮執行順序
  //   setTimeout((): void => editInput.focus());
  // }

  // // 判斷是否編輯完成
  // doneEdit(todo): void {
  //   if (!this.editedTodo) {
  //     return;
  //   }
  //   this.editedTodo = null;
  //   todo.text = todo.text.trim();
  //   if (!todo.text) {
  //     this.removeTodo(todo);
  //   }
  // }

  // // 更新 Todo
  // updateTodo(todo): void {
  //   if (todo.text.length === 0) { this.removeTodo(todo); }
  //   this.saveTodos();
  // }

  // // 清除已完成 Todos
  // clearCompleted(): void {     // 外層元件接收到訊息後要執行的動作
  //   this.todos = this.todos.filter(todo => !todo.done);
  //   this.saveTodos();
  // }

  // // 篩選 Todos 狀態
  // filterTypeChanged(filterType: string): void {
  //   this.filterType = filterType;
  // }
}
