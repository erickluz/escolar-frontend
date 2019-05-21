import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Professor } from '../../../shared/professor.model';

@Component({
  selector: 'app-form-professor',
  templateUrl: './form-professor.component.html',
  styleUrls: ['./form-professor.component.scss']
})
export class FormProfessorComponent implements OnInit {

  formProfessor: FormGroup

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  createForm(professor: Professor){
    this.formProfessor = this.formBuilder.group({
      id: [professor.id],
      nome: [professor.nome],
      sobrenome: [professor.sobrenome],
      email: [professor.email],
      senha: [professor.senha],
      cpf: [professor.cpf],
      dataNascimento: [professor.dataNascimento],
      endereco: [professor.endereco],
      telefone1: [professor.telefone1],
      telefone2: [professor.telefone2],
      dataCadastro: [professor.dataCadastro],
      formacao: [professor.formacao]
    })
  }

}
