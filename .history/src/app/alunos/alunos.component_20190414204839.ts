import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { EscolaService } from '../escola.service';
import { Aluno } from '../shared/aluno.model';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css'],
  providers: [ EscolaService ]
})
export class AlunosComponent implements OnInit {
  model
  formalarioDeAlunos: FormGroup 
  aluno: Aluno

  constructor(private fb: FormBuilder,  private escolarService: EscolaService) { }

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
    this.aluno = this.formalarioDeAlunos.value
    
    this.escolarService.salvaAluno(this.aluno)

  }

}
