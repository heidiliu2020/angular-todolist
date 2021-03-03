import { Component, OnInit } from '@angular/core';
import { StorageService } from './../services/storage.service';
import { TodoService } from './../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent implements OnInit {
  inputHint = 'Add New Todo Here...';
  todos: Todo[];
  todoId: number;
  todoTitle: string;
  editedTodo = null;
  filterType = 'All';

  // 建構子: 注入 Service 依賴
  constructor(
    private storageService: StorageService,
    private todoService: TodoService) {
    const todoArr = this.storageService.getData('todos');

    if (todoArr) {
      this.todos = todoArr;
    }
  }

  // 初始化時呼叫
  ngOnInit(): void {
    this.todoId = 1;
   }

  // 儲存資料到 locagStorage
  saveTodos(): void {
    this.storageService.setData('todos', this.todos);
  }

  // 新增 Todo
  addTodo(): void {
    if (this.todoTitle.trim().length === 0) {
      return;       // input 為空則返回
    }
    this.todos.push({     // 把狀態暫存在 model
      id: this.todoId,
      title: this.todoTitle.trim(),
      done: false
    });
    this.todoTitle = '';
    this.todoId++;
    this.saveTodos();
  }

  // 刪除 Todo
  removeTodo(id: number): void {
    this.todos = this.todos.filter(todo => todo.id !== id);
    // 等同於 this.todos.splice(this.todos.indexOf(todo), 1);
    this.saveTodos();
  }

  // 編輯 Todo
  editTodo(todo, editInput): void {
    if (todo.done) {      // 已完成的 Todo 無法編輯
      return;
    }
    this.editedTodo = todo;

    // 編輯時自動 focus input: 需考慮執行順序
    setTimeout((): void => editInput.focus());
  }

  // 判斷是否編輯完成
  doneEdit(todo): void {
    if (!this.editedTodo) {
      return;
    }
    this.editedTodo = null;
    todo.title = todo.title.trim();
    if (!todo.title) {
      this.removeTodo(todo);
    }
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

interface Todo {
  id: number;
  title: string;
  done: boolean;
}
