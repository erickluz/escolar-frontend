import { Component, OnInit } from '@angular/core';
import { Curso } from '../../../shared/curso.model';

@Component({
  selector: 'app-list-cursos',
  templateUrl: './list-cursos.component.html',
  styleUrls: ['./list-cursos.component.scss']
})
export class ListCursosComponent implements OnInit {

  cursos: Array<Curso>
  constructor() { }

  ngOnInit() {
  }

}
