import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { escolaService } from '../escola.service';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  formalarioDeAlunos: FormGroup

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.criarFormularioDeAlunos();
  }

  criarFormularioDeAlunos() {
    this.formalarioDeAlunos = this.fb.group({
      id: [''],
      nome: [''],
      sobrenome: [''],
      email: [''],
      senha: [''],
      cpf: [''],
      dataNascimento: [''],
      endereco: [''],
      telefone1: [''],
      telefone2: [''],
      dataCadastro: [''],
      ra: ['']
    })
  }

  enviarDados() {
    console.log(this.formalarioDeAlunos.value);

    

  }

}
