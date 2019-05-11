import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListAlunoComponent } from './aluno/list-aluno/list-aluno.component';
import { FormAlunoComponent } from './aluno/form-aluno/form-aluno.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Cadastro'
    },
    children: [
      {
        path: '',
        redirectTo: 'lista-alunos'
      },
      {
        path: 'lista-alunos',
        component: ListAlunoComponent,
        data: {
          title: 'Alunos'
        }
      },
      {
        path: 'form-aluno',
        component: FormAlunoComponent,
        data: {
          title: 'Fomulario de aluno'
        }
      },
      {
        path: 'lista-professores',
        component: ListAlunoComponent,
        data: {
          title: 'Alunos'
        }
      },
      {
        path: 'form-professor',
        component: FormAlunoComponent,
        data: {
          title: 'Fomulario de aluno'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroRoutingModule { }
