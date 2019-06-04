import { Component, OnInit } from '@angular/core';
import { Matricula } from '../../../../shared/matricula.model';
import { ALUNO, MATRICULA1, MATRICULA2 } from '../../../../sge.mock';
import { Aluno } from '../../../../shared/aluno.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-matricula',
  templateUrl: './list-matricula.component.html',
  styleUrls: ['./list-matricula.component.scss']
})
export class ListMatriculaComponent implements OnInit {

  matriculas: Array<Matricula> = [MATRICULA1, MATRICULA2]
  aluno: Aluno = ALUNO
  idRota: string
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.idRota = this.route.snapshot.params['id']
  }

}
