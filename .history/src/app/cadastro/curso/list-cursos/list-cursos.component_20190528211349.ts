import { Component, OnInit } from '@angular/core';
import { Curso } from '../../../shared/curso.model';
import { CURSOS } from '../../../sge.mock';

@Component({
  selector: 'app-list-cursos',
  templateUrl: './list-cursos.component.html',
  styleUrls: ['./list-cursos.component.scss']
})
export class ListCursosComponent implements OnInit {

  cursos: Array<Curso> = CURSOS;
  constructor() { }

  ngOnInit() {
  }

}
