import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListAlunoComponent } from './aluno/list-aluno/list-aluno.component';
import { FormAlunoComponent } from './aluno/form-aluno/form-aluno.component';
import { ListProfessorComponent } from './professor/list-professor/list-professor.component';
import { FormProfessorComponent } from './professor/form-professor/form-professor.component';
import { ListDisciplinaComponent } from './disciplina/list-disciplina/list-disciplina.component';
import { FormDisciplinaComponent } from './disciplina/form-disciplina/form-disciplina.component';

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
        component: ListProfessorComponent,
        data: {
          title: 'Professores'
        }
      },
      {
        path: 'form-professor',
        component: FormProfessorComponent,
        data: {
          title: 'Fomulario de professor'
        }
      },
      {
        path: 'lista-disciplinas',
        component: ListDisciplinaComponent,
        data: {
          title: 'Disciplinas'
        }
      },
      {
        path: 'form-disciplina',
        component: FormDisciplinaComponent,
        data: {
          title: 'Fomulario de disciplina'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroRoutingModule { }
