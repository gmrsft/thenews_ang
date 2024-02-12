import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/todo.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  newTodo: string = '';
  todos: string[] = [];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todos = this.todoService.getTodos();
  }

  addTodo(): void {
    if (this.newTodo.trim()) {
      this.todoService.addTodo(this.newTodo);
      this.newTodo = '';
      this.todos = this.todoService.getTodos();
    }
  }

  removeTodo(index: number): void {
    this.todoService.removeTodo(index);
    this.todos = this.todoService.getTodos();
  }

  moveUp(index: number): void {
    if (index > 0) {
      const temp = this.todos[index];
      this.todos[index] = this.todos[index - 1];
      this.todos[index - 1] = temp;
    }
  }

  moveDown(index: number): void {
    if (index < this.todos.length - 1) {
      const temp = this.todos[index];
      this.todos[index] = this.todos[index + 1];
      this.todos[index + 1] = temp;
    }
  }
}
