import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EscolarService } from '../../../escolar.service';
import { Aluno } from '../../../shared/aluno.model';

@Component({
  selector: 'app-form-aluno',
  templateUrl: './form-aluno.component.html',
  styleUrls: ['./form-aluno.component.scss'],
  providers: [EscolarService]
})
export class FormAlunoComponent implements OnInit {

  formAluno: FormGroup

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm(new Aluno(null, null, null, null, null, null, null, null, null, null, null, null))
  }

  createForm(aluno: Aluno) {
    this.formAluno = this.formBuilder.group({
      id: [aluno.id],
      nome: [aluno.nome],
      sobrenome: [aluno.sobrenome],
      email: [aluno.email],
      senha: [aluno.senha],
      cpf: [aluno.cpf],
      dataNascimento: [aluno.dataNascimento],
      endereco: [aluno.endereco],
      telefone1: [aluno.telefone1],
      telefone2: [aluno.telefone2],
      dataCadastro: [aluno.dataCadastro],
      RA: [aluno.RA]
    })
    console.log(JSON.stringify(aluno))
  }

  onSubmit() {
    console.log(JSON.stringify(this.formAluno.value))
  }

  
}
