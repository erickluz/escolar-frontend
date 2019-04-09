import { Component, OnInit } from '@angular/core';
import { Aluno } from 'src/app/shared/aluno.modal';

@Component({
  selector: 'app-listagem-alunos',
  templateUrl: './listagem-alunos.component.html',
  styleUrls: ['./listagem-alunos.component.css']
})
export class ListagemAlunosComponent implements OnInit {

  alunos : Array<Aluno> = 

  constructor() { }

  ngOnInit() {

  }

}
