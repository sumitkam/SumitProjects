import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './components/tasks/todo-list/todo-list.component';
import { MainComponent } from './layout/main/main.component';
import { PortfolioComponent } from './components/tasks/portfolio/portfolio.component';
import { FormValidationsComponent } from './components/tasks/form-validations/form-validations.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path:'todo-list',
    component:TodoListComponent
  },
  {
    path: 'portfolio',
    component: PortfolioComponent
  },
  {
    path:'form-Validation',
    component:FormValidationsComponent
  },
  {
    path: "**",
    component: MainComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
