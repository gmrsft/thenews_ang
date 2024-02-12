import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: string[] = [];

  constructor() { }

  // Adicionar um item à lista
  addTodo(item: string): void {
    this.todos.push(item);
  }

  // Obter todos os itens da lista
  getTodos(): string[] {
    return this.todos;
  }

  // Remover um item da lista
  removeTodo(index: number): void {
    this.todos.splice(index, 1);
  }
}
