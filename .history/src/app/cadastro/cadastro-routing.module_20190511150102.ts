import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListAlunoComponent } from './aluno/list-aluno/list-aluno.componentponent';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Cadastro'
    },
    children: [
      {
        path: '',
        redirectTo: 'aluno'
      },
      {
        path: 'colors',
        component: ListAlunoComponent,
        data: {
          title: 'Colors'
        }
      },
      {
        path: 'typography',
        component: TypographyComponent,
        data: {
          title: 'Typography'
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
