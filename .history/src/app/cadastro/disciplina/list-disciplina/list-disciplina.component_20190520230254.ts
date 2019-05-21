import { Component, OnInit } from '@angular/core';
import { DISCIPLINAS } from '../../../sge.mock';

@Component({
  selector: 'app-list-disciplina',
  templateUrl: './list-disciplina.component.html',
  styleUrls: ['./list-disciplina.component.scss']
})
export class ListDisciplinaComponent implements OnInit {

  disciplinas : Array<Disciplina> = DISCIPLINAS

  constructor() { }

  ngOnInit() {
  }

}
