import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(todos: any, filterType?: any): any {
    switch (filterType) {
      case 'Active':
        return todos.filter(todo => !todo.isDone);

      case 'Completed':
        return todos.filter(todo => todo.isDone);

      default:
        return todos;
    }
  }

}
