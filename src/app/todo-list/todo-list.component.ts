import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  inputHint = 'Add New Todo Here...';
  todos = [];
  todo = '';
  filterType = 'All';
  results: string[];
  toggleAll: boolean;
  contenteditable = false;

  // 建構子: 注入依賴
  constructor(private storageService: StorageService) {
    const todoArr = this.storageService.getData('todos');
    if (todoArr) {
      this.todos = todoArr;
    }
  }

  // 初始化時呼叫
  ngOnInit(): void { }

  // 儲存資料到 locagStorage
  saveTodos(): void {
    this.storageService.setData('todos', this.todos)
  }

  // 新增 Todo
  addTodo(): void {
    if (!this.todo.trim()) { return; }    // input 為空則返回
    this.todos.push({     // 把狀態暫存在 model
      text: this.todo,
      done: false,
    });
    this.todo = '';
    this.saveTodos();
  }

  // 刪除 Todo
  removeTodo(todo): void {
    this.todos.splice(this.todos.indexOf(todo), 1);
    this.saveTodos();
  }

  // 清除已完成 Todos
  clearCompleted(): void {     // 外層元件接收到訊息後要執行的動作
    this.todos = this.todos.filter(todo => !todo.done);
    this.saveTodos();
  }

  // 篩選 Todos 狀態
  filterTypeChanged(filterType: string): void {
    this.filterType = filterType;
  }
}
