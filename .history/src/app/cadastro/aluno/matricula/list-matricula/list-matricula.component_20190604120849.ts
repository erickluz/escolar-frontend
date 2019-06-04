import { Component, OnInit } from '@angular/core';
import { Matricula } from '../../../../shared/matricula.model';
import { MATRICULA, ALUNO } from '../../../../sge.mock';
import { Aluno } from '../../../../shared/aluno.model';

@Component({
  selector: 'app-list-matricula',
  templateUrl: './list-matricula.component.html',
  styleUrls: ['./list-matricula.component.scss']
})
export class ListMatriculaComponent implements OnInit {

  matricula: Array<Matricula>
  aluno: Aluno = ALUNO
  
  constructor() { }

  ngOnInit() {
  }

}
