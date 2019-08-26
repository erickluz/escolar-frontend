import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EscolarService } from '../../escolar.service';
import { Aluno } from '../../../shared/aluno.model';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { DISABLED } from '@angular/forms/src/model';

@Component({
  selector: 'app-form-aluno',
  templateUrl: './form-aluno.component.html',
  styleUrls: ['./form-aluno.component.scss'],
  providers: [EscolarService]
})
export class FormAlunoComponent implements OnInit {

  private formAluno: FormGroup
  private aluno: Aluno
  private edicao: boolean = false

  constructor(private formBuilder: FormBuilder, private service : EscolarService, private toast: ToastrService, private nav: ActivatedRoute, private rota: Router ) { }

  ngOnInit() {
    this.createForm(new Aluno(null, null, null, null, null, null, null, null, null, null, null, null, null))
    let idAluno: number  = this.nav.snapshot.params['id']
    if (idAluno != null){
      this.service.getObjetoPorId(idAluno, 'aluno')
      .then(resposta => {
        this.aluno = resposta
        console.log(JSON.stringify(resposta))
        this.createForm(this.aluno)
        this.edicao = true
      })
      .catch(resposta => {
        console.log("Erro: " + JSON.stringify(resposta))
        this.toast.error(JSON.stringify(resposta), "Erro")
        this.rota.navigate(['/cadastro/lista-alunos'])
      })
    }
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
      ra: [aluno.ra],
      matriculas: [aluno.matriculas]
    })
    this.formAluno.controls['ra'].disable() 
  }

  onSubmit() {
    if(!this.edicao){
      this.service.cadastrarObjeto(this.formAluno.value, 'aluno')
      .then(() => {
        this.toast.success("Aluno salvo com sucesso")
        this.rota.navigate(['/cadastro/lista-alunos'])
      })
      .catch(resposta => {
        this.toast.error(resposta.json().message, "Erro")
      })
    } else {
      this.service.editarObjeto(this.formAluno.value, 'aluno')
      .then(() => {
        this.toast.success("Alteracoes salvas com sucesso !")
        this.rota.navigate(['/cadastro/lista-alunos'])
      })
      .catch(resposta => {
        this.toast.error(resposta.json().message, "Erro")
      })
    }
    
  }
  
}