import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-status',
  templateUrl: './todo-status.component.html',
  styleUrls: ['./todo-status.component.css']
})
export class TodoStatusComponent implements OnInit {
  filterType = 'All';     // 預設篩選 All

  // Input Decorator: 接著來自父元件的資料
  @Input()
  todos: any[];

  // Output Decorator: 宣告要往外傳的事件 clearCompleted
  @Output()
  clearCompleted = new EventEmitter();

  @Output()
  filterTypeChanged = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  // 透過 EventEmitter 把資料傳到上層元件 app-todo-list
  clearBtnOnClick(): void {
    this.clearCompleted.emit();
  }

  changeFilterType(filterType: string): void {
    this.filterType = filterType;
    this.filterTypeChanged.emit(filterType);
  }
}