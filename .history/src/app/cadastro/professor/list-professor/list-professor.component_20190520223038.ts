import { Component, OnInit } from '@angular/core';
import { Professor } from '../../../shared/professor.model';
import { PROFESSORES } from '../../../sge.mock';

@Component({
  selector: 'app-list-professor',
  templateUrl: './list-professor.component.html',
  styleUrls: ['./list-professor.component.scss']
})
export class ListProfessorComponent implements OnInit {

  professores: Array<Professor> = PROFESSORES

  constructor() { }

  ngOnInit() {
  }

}
