import { Component, OnInit } from '@angular/core';
import { Aluno } from '../shared/aluno.modal';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {

  aluno: Aluno = new Aluno()

  constructor() {

  }

  ngOnInit() {
    this.aluno = new Aluno()
    this.aluno.id = 1
    this.aluno.nome = "Erick"
    this.aluno.sobrenome = "Luz"
    this.aluno.cpf = "123456"
    this.aluno.dataNascimento = "19/04/1995"
    this.aluno.endereco = "Av vereador Eduardo Cassanho"
    this.aluno.telefone1 = "99999-1111"
    this.aluno.telefone2 = "99999-1111"
    this.aluno.dataCadastro = new Date().toLocaleDateString()
  }
  
  onSubmit(val: any) {
    this.aluno = val.value
    alert(JSON.stringify(val.value));
  }


}
