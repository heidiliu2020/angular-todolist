import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  // Input Decorator: 接著來自父元件的資料
  @Input()
  todos: any[];

  // Output Decorator: 宣告要往外傳的事件 clearCompleted
  @Output()
  clearCompleted = new EventEmitter();

  filterType='All';

  @Output()
  filterTypeChanged = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  // 透過 EventEmitter 把資料傳到上層元件
  clearBtnOnClick () {
    this.clearCompleted.emit();
  }

  changeFilterType (filterType: string) {
    this.filterType = filterType;
    this.filterTypeChanged.emit(filterType);
  }
}
