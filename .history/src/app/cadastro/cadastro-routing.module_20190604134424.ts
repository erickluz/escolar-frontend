import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListAlunoComponent } from './aluno/list-aluno/list-aluno.component';
import { FormAlunoComponent } from './aluno/form-aluno/form-aluno.component';
import { ListProfessorComponent } from './professor/list-professor/list-professor.component';
import { FormProfessorComponent } from './professor/form-professor/form-professor.component';
import { ListDisciplinaComponent } from './disciplina/list-disciplina/list-disciplina.component';
import { FormDisciplinaComponent } from './disciplina/form-disciplina/form-disciplina.component';
import { ListCursosComponent } from './curso/list-cursos/list-cursos.component';
import { ListTurmasComponent } from './turma/list-turmas/list-turmas.component';
import { FormCursoComponent } from './curso/form-curso/form-curso.component';
import { FormTurmaComponent } from './turma/form-turma/form-turma.component';
import { FormMatriculaComponent } from './aluno/matricula/form-matricula/form-matricula.component';
import { ListMatriculaComponent } from './aluno/matricula/list-matricula/list-matricula.component';

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
      },
      {
        path: 'lista-cursos',
        component: ListCursosComponent,
        data: {
          title: 'Cursos'
        }
      },
      {
        path: 'lista-turmas',
        component: ListTurmasComponent,
        data: {
          title: 'Turmas'
        }
      },
      {
        path: 'form-curso',
        component: FormCursoComponent,
        data: {
          title: 'Fomulario de Curso'
        }
      },
      {
        path: 'form-turma',
        component: FormTurmaComponent,
        data: {
          title: 'Fomulario de turma'
        }
      },
      {
        path: 'form-matricula',
        component: FormMatriculaComponent,
        data: {
          title: 'Fomulario de matricula'
        }
      },
      {
        path: 'lista-matricula',
        component: ListMatriculaComponent,
        data: {
          title: 'Matriculas'
        }
      },
      {
        path: 'lista-matricula/:id',
        component: FormMatriculaComponent,
        data: {
          title: 'Listagem de matricula'
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
