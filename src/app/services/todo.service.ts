import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { ITodo } from '../interfaces/todo';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {



  todosArr: any;
  constructor(
    private storageService: StorageService
  ) {
    this.todosArr =[
      {
        id: 1,
        title: '22222',
        isDone: false,
        isEditing: false
      }
    ];
  }

  getAodosArr(): any{
    return this.todosArr;
  }
  // // 儲存資料到 locagStorage
  // saveTodos(): void {
  //   // this.storageService.setData('todos', this.todos);
  // }

  // // 新增 Todo
  // addTodo(todoTitle: string): void {
  //   if (todoTitle.trim().length === 0) {
  //     return;       // input 為空則返回
  //   }
  //   this.todos.push({     // 把狀態暫存在 model
  //     id: this.todoId,
  //     title: todoTitle.trim(),
  //     isDone: false,
  //     isEditing: false
  //   });

  //   this.todoId++;
  //   this.saveTodos();
  // }

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
