import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EscolarService } from '../../../escolar.service';
import { Aluno } from '../../../shared/aluno.model';
import { FormGroup, FormControl} from '@angular/forms'
import { formControlBinding } from '@angular/forms/src/directives/ng_model';

@Component({
  selector: 'app-form-aluno',
  templateUrl: './form-aluno.component.html',
  styleUrls: ['./form-aluno.component.scss'],
  providers: [ EscolarService ]
})
export class FormAlunoComponent implements OnInit {
  
  formAluno : FormGroup

  constructor() { }

  ngOnInit() {
  }

  createForm(aluno: Aluno){
    this.formAluno = new FormGroup({
      id: new FormControl(aluno.id),
      nome: new FormControl(aluno.nome),
      sobrenome: new FormControl(aluno.sobrenome),
      email: new FormControl(aluno.email),
      senha: new FormControl(aluno.senha),
      cpf: new FormControl(aluno.cpf),
      dataNascimento: new FormControl(aluno.dataNascimento),
      endereco: new FormControl(aluno.endereco),
      telefone1: new formControl(aluno.telefone1),
      telefone2: new formControl(aluno.telefone2),
      dataCadastro: new formControl(aluno.dataCadastro),
      RA: new formControl(aluno.RA),



    })
  }

}
