import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AulasComponent } from './aulas/aulas.component';
import { ProfessoresComponent } from './professores/professores.component';
import { DisciplinasComponent } from './disciplinas/disciplinas.component';
import { TurmasComponent } from './turmas/turmas.component';
import { CursosComponent } from './cursos/cursos.component';

const routes: Routes = [
  {path: '', component: HomeComponent}, 
  {path: 'alunos', component: AulasComponent},
  {path: 'professores', component: ProfessoresComponent},
  {path: 'disciplinas', component: DisciplinasComponent},
  {path: 'turmas', component: TurmasComponent},
  {path: 'cursos', component: CursosComponent},
  {path: 'aulas', component: AulasComponent},
  {
    path: 'form',
    data: {
      title: 'Form',
    },
    children: []
  }, {
    path: 'login',
    loadChildren: './+login/login.module#LoginModule',
    data: {
      customLayout: true
    }
  }, {
    path: 'register',
    loadChildren: './+register/register.module#RegisterModule',
    data: {
      customLayout: true
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
