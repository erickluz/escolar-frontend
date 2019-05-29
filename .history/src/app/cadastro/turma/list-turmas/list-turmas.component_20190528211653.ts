import { Component, OnInit } from '@angular/core';
import { Turma } from '../../../shared/turma.model';
import { TURMAS } from '../../../sge.mock';

@Component({
  selector: 'app-list-turmas',
  templateUrl: './list-turmas.component.html',
  styleUrls: ['./list-turmas.component.scss']
})
export class ListTurmasComponent implements OnInit {
  turmas: Array<Turma> = TURMAS
  constructor() { }

  ngOnInit() {
  }

}
