import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroRoutingModule } from './cadastro-routing.module';
import { ListAlunoComponent } from './aluno/list-aluno/list-aluno.component';
import { FormAlunoComponent } from './aluno/form-aluno/form-aluno.component';
import { ListProfessorComponent } from './professor/list-professor/list-professor.component';
import { FormProfessorComponent } from './professor/form-professor/form-professor.component';
import { ListDisciplinaComponent } from './disciplina/list-disciplina/list-disciplina.component';
import { FormDisciplinaComponent } from './disciplina/form-disciplina/form-disciplina.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormCursoComponent } from './curso/form-curso/form-curso.component';
import { FormTurmaComponent } from './turma/form-turma/form-turma.component';
import { ListCursosComponent } from './curso/list-cursos/list-cursos.component';
import { ListTurmasComponent } from './turma/list-turmas/list-turmas.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { ListMatriculaComponent } from './aluno/matricula/list-matricula/list-matricula.component';
import { FormMatriculaComponent } from './aluno/matricula/form-matricula/form-matricula.component';


@NgModule({
  declarations: [
    ListAlunoComponent,
    FormAlunoComponent,
    ListProfessorComponent,
    FormProfessorComponent,
    ListDisciplinaComponent,
    FormDisciplinaComponent,
    FormCursoComponent,
    FormTurmaComponent,
    ListCursosComponent,
    ListTurmasComponent,
    ListMatriculaComponent,
    FormMatriculaComponent
  ],
  imports: [
    CommonModule,
    CadastroRoutingModule,
    ReactiveFormsModule,
    NgSelectModule
  ]
})
export class CadastroModule { }
