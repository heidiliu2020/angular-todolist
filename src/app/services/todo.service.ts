import { Injectable } from '@angular/core';

import { ITodo } from '../interfaces/todo';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: ITodo[] = [];
  todoTitle: string;
  todoId: number;
  filterType = 'All';

  constructor(private storageService: StorageService) { }

  /**
   * 從 localStorage 讀取資料
   */
  getTodos(): void {
    this.todos = this.storageService.getData('todos') || [];
    const todoLength = this.todos.length;
    if (todoLength) {
      this.todoId = this.todos[todoLength - 1].id + 1;
    } else {
      this.todoId = 1;
    }
  }

  /**
   * 儲存資料到 localStorage
   */
  saveTodos(): void {
    this.storageService.setData('todos', this.todos);
  }

  /**
   * 新增 Todo
   */
  addTodo(newTitle): void {
    // input 為空則返回
    if (!newTitle.trim().length) { return; }
    // 把狀態暫存在 model
    this.todos.push({
      id: this.todoId,
      title: newTitle.trim(),
      datetime: new Date().toLocaleDateString(),
      isDone: false,
      isEditing: false
    });
    this.todoId++;
  }

  /**
   * 刪除 Todo
   */
  removeTodo(id: number): void {
    this.todos = this.todos.filter(todo => todo.id !== id);
    // 等同於 this.todos.splice(this.todos.indexOf(todo), 1);
  }

  /**
   * 編輯 Todo
   */
  editTodo(todo, editInput): void {
    if (todo.isDone) {      // 已完成的 Todo 無法編輯
      return;
    }
    todo.isEditing = true;
    // 編輯時自動 focus: 需考慮執行順序
    setTimeout((): void => editInput.focus());
  }

  /**
   * 判斷 Todo 是否編輯完成
   */
  doneEdit(todo): void {
    if (!todo.isEditing) {
      return;
    }
    todo.isEditing = false;
    todo.title = todo.title.trim();
    if (!todo.title) {
      this.removeTodo(todo);
    }
  }

  /**
   * 清除已完成 Todos
   */
  clearCompleted(): void {     // 外層元件接收到訊息後要執行的動作
    this.todos = this.todos.filter(todo => !todo.isDone);
  }

  /**
   * 篩選 Todos 狀態
   */
  filterTypeChanged(filterType: string): void {
    this.filterType = filterType;
  }
}
