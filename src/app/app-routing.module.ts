import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlunoComponent } from './aluno/form-alunos/aluno.component';
import { ListagemAlunosComponent } from './aluno/listagem-alunos/listagem-alunos.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'aluno/cadastro', component: AlunoComponent },
  { path: 'aluno/listagem', component: ListagemAlunosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
