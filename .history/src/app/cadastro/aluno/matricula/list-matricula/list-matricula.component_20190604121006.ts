import { Component, OnInit } from '@angular/core';
import { Matricula } from '../../../../shared/matricula.model';
import { ALUNO, MATRICULA1, MATRICULA2 } from '../../../../sge.mock';
import { Aluno } from '../../../../shared/aluno.model';

@Component({
  selector: 'app-list-matricula',
  templateUrl: './list-matricula.component.html',
  styleUrls: ['./list-matricula.component.scss']
})
export class ListMatriculaComponent implements OnInit {

  matricula: Array<Matricula> = [MATRICULA1, MATRICULA2]
  aluno: Aluno = ALUNO
  
  constructor() { }

  ngOnInit() {
  }

}