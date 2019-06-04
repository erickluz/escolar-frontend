import { Component, OnInit } from '@angular/core';
import { Matricula } from '../../../../shared/matricula.model';
import { MATRICULA } from '../../../../sge.mock';

@Component({
  selector: 'app-list-matricula',
  templateUrl: './list-matricula.component.html',
  styleUrls: ['./list-matricula.component.scss']
})
export class ListMatriculaComponent implements OnInit {

  matricula: Matricula = MATRICULA
  
  constructor() { }

  ngOnInit() {
  }

}
