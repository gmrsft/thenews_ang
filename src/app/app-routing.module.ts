import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';
import { TodolistComponent } from './pages/todolist/todolist.component'; // Importe o TodolistComponent
import { QuizzComponent } from './pages/quizz/quizz.component';
import{ ApiconsumComponent } from './pages/apiconsum/apiconsum.component';
import { PooComponent } from './pages/poo/poo.component'

// Configuração das rotas da aplicação, paginação
const routes: Routes = [
  {
    path: '', // Rota vazia, correspondendo à raiz da aplicação
    component: HomeComponent // Carrega o componente HomeComponent quando a rota é acessada
  },
  {
    path: 'content/:Id', // Rota que espera um parâmetro chamado 'Id'
    component: ContentComponent // Carrega o componente ContentComponent quando a rota é acessada
  },
  {
    path: 'todolist', // Rota para o TodolistComponent
    component: TodolistComponent // Carrega o componente TodolistComponent quando a rota é acessada
  },
  {
    path: 'buzzfeed',
    component: QuizzComponent
  },
  {
  path: 'apiconsum',
  component: ApiconsumComponent
  },
  {
    path: 'poo',
    component: PooComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
