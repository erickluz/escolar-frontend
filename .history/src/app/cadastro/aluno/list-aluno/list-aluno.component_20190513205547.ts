import { Component, OnInit } from '@angular/core';
import { Aluno } from '../../../shared/aluno.model';
import { ALUNO, ALUNOS } from '../../../sge.mock';

@Component({
  selector: 'app-list-aluno',
  templateUrl: './list-aluno.component.html',
  styleUrls: ['./list-aluno.component.scss']
})
export class ListAlunoComponent implements OnInit {

  alunos: Array<Aluno>  = ALUNOS

  constructor() { }

  ngOnInit() {
  }

}
