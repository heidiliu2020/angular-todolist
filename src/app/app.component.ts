import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  inputHint = 'Add Todo...';
  todos: any[] = [];
  todo = '';
  filterType = 'All';
  toggleAll = false;

  httpOptions = {
    headers: new HttpHeaders({
       'Content-Type': 'application/json',
       'authorization': 'token c4178561-abf7-4f8b-8afd-53bdea8ed2aa'
      })
  };

  constructor (private http: HttpClient) { }

  // 透過 API
  ngOnInit() {
    this.http.get('./me', )
  }

  // 新增 Todo
  addTodo () {
    this.todos.push({     // 把狀態暫存在 model
      text: this.todo,
      done: false
    });
    this.todo = '';
  }

  // 清除已完成 Todos
  clearCompleted () {     // 外層元件接收到訊息後要執行的動作
    this.todos = this.todos.filter(item => {return !item.done; });
  }

  filterTypeChanged (filterType: string) {
    this.filterType = filterType;
  }

  // 全選 Todos
  toggleAllChange (value: boolean) {
    this.todos.forEach(item => {
      item.done = value;        // 先修改資料
    });
  }

  updateToggleAllState () {     // 再修改 UI
    this.toggleAll = this.todos.filter(item => { return !item.done; }).length === 0;
  }

  // 刪除 Todo
  removeTodo (todo) {
    this.todos.splice(this.todos.indexOf(todo), 1);
  }
}
