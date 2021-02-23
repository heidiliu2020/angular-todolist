import { Component, OnInit } from '@angular/core';

import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  inputHint = 'Add New Todo Here...';
  todos: any[] = [];
  todo = '';
  filterType = 'All';
  results: string[];
  toggleAll: boolean;

  // Inject HttpClient into your component or service.
  constructor(
    private todoService: TodoService
  ) { }

  // 透過 API
  ngOnInit() {
    // this.getTodos().subscribe(data => {
    //   this.todos = data;
    // });
  }

  // 新增 Todo
  addTodo() {
    if (!this.todo.trim()) { return; }    // input 為空則返回
    this.todos.push({     // 把狀態暫存在 model
      text: this.todo,
      done: false
    });
    this.todo = '';
  }

  // 清除已完成 Todos
  clearCompleted() {     // 外層元件接收到訊息後要執行的動作
    this.todos = this.todos.filter(item => {return !item.done; });
  }

  // 篩選 Todos 狀態
  filterTypeChanged(filterType: string) {
    this.filterType = filterType;
  }

  // 刪除 Todo
  removeTodo(todo) {
    console.log('delete')
    this.todos.splice(this.todos.indexOf(todo), 1);
  }
}
