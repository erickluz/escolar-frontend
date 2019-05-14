import { Component, OnInit } from '@angular/core';
import { Aluno } from '../../../shared/aluno.model';

@Component({
  selector: 'app-list-aluno',
  templateUrl: './list-aluno.component.html',
  styleUrls: ['./list-aluno.component.scss']
})
export class ListAlunoComponent implements OnInit {

  Aluno alunos = new Array<Aluno>

  constructor() { }

  ngOnInit() {
  }

}
