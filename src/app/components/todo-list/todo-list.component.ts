import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations'

import { TodoService } from './../../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  providers: [TodoService],
  animations: [
    // 增加 fade 動畫
    trigger('fade', [

      // 進入: 需設定初始值
      transition(':enter', [
        style({opacity: 0, transform: 'translateY(35px)'}),
        animate(300, style({opacity: 1, transform: 'translateX(0px)'}))
      ]),
      // 離開
      transition(':leave', [
        animate(300, style({opacity: 0, transform: 'translateX(100px)'}))
      ]),

    ])
  ]
})
export class TodoListComponent implements OnInit {

  // 建構子: 注入 Service 依賴
  constructor(public todoService: TodoService) { }

  // 初始化時呼叫 getTodos()
  ngOnInit(): void {
    this.todoService.getTodos();
  }

}
