import { DatePipe, NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

export class Todo{
  constructor(
    public id: number, 
    public description: string,
    public done: boolean,
    public targetDate: Date
  ){}
}

@Component({
  selector: 'app-list-todos',
  imports: [NgIf, NgFor, UpperCasePipe, DatePipe],
  templateUrl: './list-todos.component.html',
  styleUrl: './list-todos.component.css'
})
export class ListTodosComponent {
  todos: Todo[] = [
    new Todo(1, 'Learn to Dance', false, new Date()),
    new Todo(2, 'Become an Expert at Angular', false, new Date()),
    new Todo(3, 'Visit India', false, new Date())
  ];
  message: string = 'Hey!';

}
