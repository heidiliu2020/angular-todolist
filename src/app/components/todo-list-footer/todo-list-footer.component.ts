import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ITodo } from '../../interfaces/todo';

@Component({
  selector: 'app-todo-list-footer',
  templateUrl: './todo-list-footer.component.html',
  styleUrls: ['./todo-list-footer.component.css']
})
export class TodoListFooterComponent implements OnInit {
  filterType = 'All';     // 預設篩選 All

  // Input Decorator: 接住來自父元件的資料
  @Input()
  todos: ITodo[];

  // Output Decorator: 宣告要往外傳的事件 clearCompleted
  @Output()
  clearCompleted = new EventEmitter();

  @Output()
  filterTypeChanged = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {  }

  // 透過 EventEmitter 把資料傳到上層元件 app-todo-list
  clearBtnOnClick(): void {
    this.clearCompleted.emit();
  }

  changeFilterType(filterType: string): void {
    this.filterType = filterType;
    this.filterTypeChanged.emit(filterType);
  }
}
